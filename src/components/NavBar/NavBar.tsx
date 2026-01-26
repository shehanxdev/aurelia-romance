import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import logoUrl from "../../assets/gold V2.png";
import { Text } from "../Text";

interface NavbarProps {
  layoutRef?: React.RefObject<{
    playExitAnimation?: () => Promise<void>;
    playEnterAnimation?: () => void;
  }>;
}

interface RouteItem {
  title: string;
  path: string;
}

export function NavBar({ layoutRef }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const routes: RouteItem[] = [
    { title: "Gallery", path: "/gallery" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });

    tl.to(overlayRef.current, {
      opacity: 1,
      visibility: "visible",
    }).to(
      drawerRef.current,
      {
        y: 0,
      },
      "<"
    );

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  const handleNavigate = async (path: string) => {
    setIsOpen(false);

    if (layoutRef?.current?.playExitAnimation) {
      await layoutRef.current.playExitAnimation();
    }

    navigate(path);

    requestAnimationFrame(() => {
      layoutRef?.current?.playEnterAnimation?.();
    });
  };

  return (
    <header className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 font-serif">
      <div className="flex items-center justify-center gap-4 px-4 py-3 bg-white/80 backdrop-blur-md text-black rounded-full shadow-lg w-[90dvw] md:w-fit">
        <button
          onClick={() => handleNavigate("/")}
          className="p-0 border-none bg-transparent cursor-pointer"
          aria-label="Go to home"
        >
          <img src={logoUrl} alt="Logo" className="h-5 md:h-8 w-auto" />
        </button>

        <div className="flex gap-4 px-4">
          {routes.map((item, index) => (
            <button
              key={item.title}
              onClick={() => handleNavigate(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text-sm md:text-base transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-60"
                  : ""
              } hover:text-gold`}
            >
              <Text
                className="font-family-inter cursor-pointer"
                variant="label1"
              >
                {item.title}
              </Text>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-3xl opacity-0 invisible"
      >
        <div
          ref={drawerRef}
          className="absolute bottom-0 left-0 right-0 bg-white text-white rounded-t-2xl shadow-xl w-full h-[90vh] py-6 px-6 transform translate-y-full overflow-y-auto"
        >
          {/* Drawer content can go here if needed */}
        </div>
      </div>
    </header>
  );
}
