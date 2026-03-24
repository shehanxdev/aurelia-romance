import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const routes: RouteItem[] = [
    { title: "Gallery", path: "/gallery" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  const handleNavigate = async (path: string) => {
    if (layoutRef?.current?.playExitAnimation) {
      await layoutRef.current.playExitAnimation();
    }

    navigate(path);

    requestAnimationFrame(() => {
      layoutRef?.current?.playEnterAnimation?.();
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-[5%] pt-5 md:pt-7">
      <div
        className={`flex w-full max-w-[760px] items-center justify-center gap-4 rounded-full border px-5 py-3 backdrop-blur-md md:gap-6 md:px-7 ${
          isHomePage
            ? "border-white/14 bg-[rgba(20,16,12,0.22)] text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)]"
            : "border-[rgba(122,101,50,0.16)] bg-[rgba(248,245,242,0.82)] text-[#403737] shadow-[0_18px_50px_rgba(64,55,55,0.08)]"
        }`}
      >
        <button
          type="button"
          onClick={() => handleNavigate("/")}
          className="shrink-0 border-none bg-transparent p-0"
          aria-label="Go to home"
        >
          <Text
            as="span"
            variant="label1"
            className={`font-serif uppercase tracking-[0.32em] ${
              isHomePage ? "text-white" : "text-primary-dark"
            }`}
          >
            Aurelia Romance
          </Text>
        </button>

        <div
          className={`h-4 w-px shrink-0 md:h-5 ${
            isHomePage ? "bg-white/20" : "bg-[rgba(122,101,50,0.2)]"
          }`}
        />

        <nav className="flex items-center justify-center gap-4 md:gap-6">
          {routes.map((item, index) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(`${item.path}/`);

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => handleNavigate(item.path)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border-none bg-transparent p-0 transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-60"
                    : "opacity-100"
                }`}
              >
                <Text
                  as="span"
                  variant="label1"
                  className={`uppercase tracking-[0.24em] ${
                    isHomePage
                      ? isActive
                        ? "text-white"
                        : "text-white/74 hover:text-white"
                      : isActive
                        ? "text-primary-dark"
                        : "text-[#5f524d] hover:text-[#403737]"
                  }`}
                >
                  {item.title}
                </Text>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
