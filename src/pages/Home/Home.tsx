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

  const animateToSection = (newIndex: number) => {
    if (isAnimating.current || newIndex === currentIndex) return;
    isAnimating.current = true;

    const prevEl = sectionRefs.current[currentIndex];
    const nextEl = sectionRefs.current[newIndex];

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" },
      onComplete: () => {
        setCurrentIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Prepare next section
    tl.set(nextEl, { autoAlpha: 1, scale: 0.6, xPercent: 50 });

    // Animate prev out and next in simultaneously
    tl.to(prevEl, { autoAlpha: 0, scale: 0.6, xPercent: 50 }, 0).to(
      nextEl,
      { autoAlpha: 1, scale: 1, xPercent: 0 },
      0
    );
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }
      const delta = e.deltaY;
      const container = scrollContainers.current[currentIndex];
      if (!container) return;

      const atTop = container.scrollTop === 0;
      const atBottom =
        Math.ceil(container.scrollTop + container.clientHeight) >=
        container.scrollHeight;

      if (delta > 0) {
        // scrolling down
        if (!atBottom) {
          // let native scroll
          return;
        }
        e.preventDefault();
        if (currentIndex < sections.length - 1)
          animateToSection(currentIndex + 1);
      } else if (delta < 0) {
        // scrolling up
        if (!atTop) {
          // let native scroll
          return;
        }
        e.preventDefault();
        if (currentIndex > 0) animateToSection(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
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
          ref={(el) => (sectionRefs.current[idx] = el!)}
        >
          {/* Internal scroll container */}
          <div
            className="flex-1 overflow-y-auto "
            ref={(el) => (scrollContainers.current[idx] = el!)}
          >
            {section}
          </div>
        </div>
      ))}
    </div>
  );
}
