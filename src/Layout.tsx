// Layout.tsx
import gsap from "gsap";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useLocation } from "react-router";

export const Layout = forwardRef(function Layout(
  { children }: { children: React.ReactNode },
  ref
) {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    async playExitAnimation() {
      const el = containerRef.current;
      if (!el) return;
      await gsap.to(el, {
        opacity: 0,
        filter: "blur(100px)",
        duration: 0.4,
        ease: "power2.inOut",
      });
    },
    async playEnterAnimation() {
      const el = containerRef.current;
      if (!el) return;
      gsap.set(el, { opacity: 0, filter: "blur(100px)" });
      await gsap.to(el, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power2.out",
      });
    },
  }));

  // Optional: animate on first load
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, filter: "blur(100px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
      );
    }
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[#F8F5F2]">
      {children}
    </div>
  );
});
