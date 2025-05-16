import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect, useRef, useState } from 'react';

import { HeroSection } from './HeroSection';

gsap.registerPlugin(ScrollToPlugin);

const sections = [
  <HeroSection className="overflow-hidden" />,
  <div className="h-[150vh] bg-blue-200 p-10">Layer 1 (Tall Content)</div>,
  <div className="h-screen bg-green-200 p-10">Layer 2</div>,
  <div className="h-[130vh] bg-red-200 p-10">Layer 3 (Also Tall)</div>,
  <div className="h-screen bg-yellow-200 p-10">Layer 4</div>,
];

export function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const scrollContainers = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  //   if (isAnimating.current || newIndex === currentIndex) return;
  //   isAnimating.current = true;

  //   const prevEl = sectionRefs.current[currentIndex];
  //   const nextEl = sectionRefs.current[newIndex];

  //   const tl = gsap.timeline({
  //     defaults: { duration: 1, ease: "power1.out" },
  //     onComplete: () => {
  //       setCurrentIndex(newIndex);
  //       isAnimating.current = false;
  //     },
  //   });

  //   // Prepare next section
  //   tl.set(nextEl, { autoAlpha: 1, scale: 0, xPercent: 100 });

  //   // Animate prev out and next in simultaneously
  //   tl.to(prevEl, { autoAlpha: 0, scale: 0, xPercent: 100 }, 0).to(
  //     nextEl,
  //     { autoAlpha: 1, scale: 1, xPercent: 0 },
  //     0
  //   );
  // };

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     if (isAnimating.current) {
  //       e.preventDefault();
  //       return;
  //     }
  //     const delta = e.deltaY;
  //     const container = scrollContainers.current[currentIndex];
  //     if (!container) return;

  //     const atTop = container.scrollTop === 0;
  //     const atBottom =
  //       Math.ceil(container.scrollTop + container.clientHeight) >=
  //       container.scrollHeight;

  //     if (delta > 0) {
  //       // scrolling down
  //       if (!atBottom) {
  //         // let native scroll
  //         return;
  //       }
  //       e.preventDefault();
  //       if (currentIndex < sections.length - 1)
  //         animateToSection(currentIndex + 1);
  //     } else if (delta < 0) {
  //       // scrolling up
  //       if (!atTop) {
  //         // let native scroll
  //         return;
  //       }
  //       e.preventDefault();
  //       if (currentIndex > 0) animateToSection(currentIndex - 1);
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [currentIndex]);
  const animateToSection = (newIndex: number) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;

    const currentEl = sectionRefs.current[currentIndex];
    const nextEl = sectionRefs.current[newIndex];
    const direction = newIndex > currentIndex ? "down" : "up";

    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power1.in" },
      onComplete: () => {
        setCurrentIndex(newIndex);
        isAnimating.current = false;
      },
    });

    if (direction === "down") {
      // Prepare next section off-screen, scaled down
      tl.set(nextEl, {
        autoAlpha: 1,
        scale: 0,
        yPercent: 100,
      });

      // Slightly scale up current section to simulate zoom-out effect
      tl.to(
        currentEl,
        {
          filter: "blur(15px)",
        },
        0
      );

      // Animate next section scaling up and moving in
      tl.to(
        nextEl,
        {
          scale: 1,
          yPercent: 0,
        },
        0
      );
    } else {
      // Prepare previous (nextEl) to be larger and in place
      tl.set(nextEl, {
        autoAlpha: 1,

        filter: "blur(15px)",
      });

      // Animate current section scaling down and exiting to middle-right
      tl.to(
        currentEl,
        {
          scale: 0,
          yPercent: 100,
          autoAlpha: 0,
        },
        0
      );

      // Animate previous (nextEl) scaling down into place more gently
      tl.to(
        nextEl,
        {
          filter: "blur(0px)",
          yPercent: 0,
        },
        0
      );
    }
  };

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const container = scrollContainers.current[currentIndex];

    const handleDirection = (direction: "up" | "down", e: Event) => {
      if (isAnimating.current || !container) {
        e.preventDefault();
        return;
      }

      const atTop = container.scrollTop === 0;
      const atBottom =
        Math.ceil(container.scrollTop + container.clientHeight) >=
        container.scrollHeight;

      if (direction === "down") {
        if (!atBottom) return;
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          animateToSection(currentIndex + 1);
        }
      } else {
        if (!atTop) return;
        e.preventDefault();
        if (currentIndex > 0) {
          animateToSection(currentIndex - 1);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      handleDirection(e.deltaY > 0 ? "down" : "up", e);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        handleDirection("down", e);
      } else if (e.key === "ArrowUp") {
        handleDirection("up", e);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        handleDirection(deltaY > 0 ? "down" : "up", e);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full flex flex-col  overflow-hidden`}
          style={{
            visibility: idx === currentIndex ? "visible" : "hidden",
            opacity: idx === currentIndex ? 1 : 0,
          }}
          ref={(el) => {
            if (el) sectionRefs.current[idx] = el;
          }}
        >
          {/* Internal scroll container */}
          <div
            className="flex-1 overflow-y-auto "
            ref={(el) => {
              if (el) scrollContainers.current[idx] = el;
            }}
          >
            {section}
          </div>
        </div>
      ))}
    </div>
  );
}
