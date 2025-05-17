import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";

import AboutMe from "./AboutMe";
import { HeroSection } from "./HeroSection";

gsap.registerPlugin(ScrollToPlugin);

const sections = [
  <HeroSection className="overflow-hidden" key={"HeroSection"} />,
  <AboutMe key={"AboutMection"} />,
  <div className="h-screen bg-green-200 p-10" key={"dev"}>
    Layer 2
  </div>,
  <div className="h-[130vh] bg-red-200 p-10" key={"AboutMection"}>
    Layer 3 (Also Tall)
  </div>,
  <div className="h-screen bg-yellow-200 p-10" key={"AboutMection"}>
    Layer 4
  </div>,
];

export function Home() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const scrollContainers = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const animateToSection = (newIndex: number) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;

    const currentEl = sectionRefs.current[currentIndex];
    const nextEl = sectionRefs.current[newIndex];

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      onComplete: () => {
        setCurrentIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Blur out current section
    tl.to(
      currentEl,
      {
        filter: "blur(100px)",
        onComplete: () => {
          // Instantly hide current and show next
          gsap.set(currentEl, { autoAlpha: 0 });
          gsap.set(nextEl, { autoAlpha: 1, filter: "blur(100px)" });
        },
      },
      0
    );

    // Then unblur next section
    tl.to(
      nextEl,
      {
        filter: "blur(0px)",
      },
      ">0.01"
    );
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
      } else {
        //typescript rule S126
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
          key={section.key}
          className={`absolute top-0 left-0 w-full h-full flex flex-col  overflow-hidden`}
          style={{
            visibility: idx === currentIndex ? "visible" : "hidden",
            opacity: idx === currentIndex ? 1 : 0,
          }}
          ref={(el) => {
            if (el) sectionRefs.current[idx] = el;
          }}
        >
          {/* Internal scroll container flex-1 was removed */}
          <div
            className="overflow-y-auto "
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
