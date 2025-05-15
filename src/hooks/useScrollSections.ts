import { useEffect, useRef, useState } from "react";

export function useScrollSectionsByIds(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const scrollToSection = (index: number) => {
      const section = document.getElementById(sectionIds[index]);
      if (!section) return;

      const targetY = section.offsetTop;
      const start = window.scrollY;
      const change = targetY - start;
      const duration = 1000;
      const startTime = performance.now();

      isScrolling.current = true;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + change * ease);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          isScrolling.current = false;
        }
      };

      requestAnimationFrame(animate);
    };

    const handleScroll = (deltaY: number) => {
      if (isScrolling.current) return;

      let next = currentSection;
      if (deltaY > 0 && currentSection < sectionIds.length - 1) next++;
      else if (deltaY < 0 && currentSection > 0) next--;

      if (next !== currentSection) {
        setCurrentSection(next);
        scrollToSection(next);
      }
    };

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll(e.deltaY);
    };

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") handleScroll(1);
      else if (e.key === "ArrowUp") handleScroll(-1);
    };

    const touchStartHandler = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const touchEndHandler = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 50) handleScroll(deltaY);
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("touchstart", touchStartHandler);
    window.addEventListener("touchend", touchEndHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("touchstart", touchStartHandler);
      window.removeEventListener("touchend", touchEndHandler);
    };
  }, [sectionIds, currentSection]);

  return currentSection;
}
