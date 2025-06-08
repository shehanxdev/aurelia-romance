import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { List, X } from "@phosphor-icons/react";

import logoUrl from "../../assets/gold V2.png";
import { Button } from "../Button/Button";
import { Link } from "../Link";
import { Text } from "../Text";

interface NavbarProps {
  readonly isPositionAbsolute?: boolean;
  readonly bgColor?: string;
}

export function Navbar({ isPositionAbsolute, bgColor = "white" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Animate drawer and overlay
  useEffect(() => {
    if (!drawerRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.4 },
    });

    if (isOpen) {
      tl.set(overlayRef.current, { visibility: "visible" })
        .to(overlayRef.current, { opacity: 1 })
        .fromTo(drawerRef.current, { y: "100%" }, { y: 0 }, "<");
    } else {
      tl.to(drawerRef.current, { y: "100%" })
        .to(overlayRef.current, { opacity: 0 }, "<")
        .set(overlayRef.current, { visibility: "hidden" });
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <header
      className={`w-full px-4 md:pt-9 ${
        isPositionAbsolute ? "absolute" : ""
      } z-50 font-serif text-white ${bgColor}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div
          className={`${
            isPositionAbsolute ? "absolute" : ""
          } top-4 left-4 md:top-10 md:left-10 backdrop-blur-sm bg-white/30 text-black px-4 py-2 rounded-lg shadow-md`}
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="h-8 md:h-10 w-auto cursor-pointer"
          />
        </div>

        <div
          className={`${
            isPositionAbsolute ? "absolute" : ""
          } top-4 right-4 md:top-10 md:right-10 backdrop-blur-sm bg-white/60 rounded-lg shadow-md flex items-center justify-center w-10 h-10`}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700"
            aria-label="Open menu"
          >
            <List className="cursor-pointer text-2xl md:text-3xl text-primary-dark" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-3xl opacity-0 invisible"
      >
        {/* Bottom drawer */}
        <div
          ref={drawerRef}
          className="absolute bottom-0 left-0 right-0 bg-white text-white rounded-t-2xl shadow-xl w-full h-[90vh] py-6 px-6 transform translate-y-full overflow-y-auto"
        >
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <Button
              variant="iconButton"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X
                className="cursor-pointer text-secondary hover:text-gold transition"
                size={24}
              />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-6 text-center">
            {["Home", "Gallery", "Services", "Contact"].map((item, index) => (
              <Link
                key={item}
                variant="large"
                decoration="noUnderline"
                className={`text-lg text-white hover:text-gold transition-all duration-300 border-b border-white/10 pb-2 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm opacity-60"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Text variant="heading1">{item}</Text>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
