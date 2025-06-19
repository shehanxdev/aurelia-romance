import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"; // ✅

import { List, X } from "@phosphor-icons/react";

import logoUrl from "../../assets/gold V2.png";
import { Button } from "../Button/Button";
import { Text } from "../Text";

interface NavbarProps {
  isPositionAbsolute?: boolean;
  bgColor?: string;
  layoutRef?: React.RefObject<{
    playExitAnimation?: () => Promise<void>;
    playEnterAnimation?: () => void;
  }>;
}

export function NavBar({
  isPositionAbsolute,
  bgColor = "white",
  layoutRef,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const routes = ["/", "/services", "/about"];

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

  const handleNavigate = async (path: string) => {
    setIsOpen(false);

    if (layoutRef?.current?.playExitAnimation) {
      await layoutRef.current.playExitAnimation();
    }

    navigate(path);
    // Wait for next tick to allow Layout remount
    requestAnimationFrame(() => {
      layoutRef?.current?.playEnterAnimation?.();
    });
  };

  return (
    // <header
    //   className={`w-full px-4 md:pt-9 ${
    //     isPositionAbsolute ? "absolute" : ""
    //   } z-50 font-serif text-white ${bgColor}`}
    // >
    //   <div className="flex items-center justify-between">
    //     <div
    //       className={`${
    //         isPositionAbsolute ? "absolute" : ""
    //       } top-4 left-4 md:top-10 md:left-10 backdrop-blur-sm bg-white/30 text-black px-4 py-2 rounded-lg shadow-md`}
    //     >
    //       <button
    //         onClick={() => handleNavigate("/")}
    //         className="p-0 border-none bg-transparent cursor-pointer"
    //         aria-label="Go to home"
    //         style={{ lineHeight: 0 }}
    //       >
    //         <img src={logoUrl} alt="Logo" className="h-8 md:h-10 w-auto" />
    //       </button>
    //     </div>

    //     <div
    //       className={`${
    //         isPositionAbsolute ? "absolute" : ""
    //       } top-4 right-4 md:top-10 md:right-10 backdrop-blur-sm bg-white/60 rounded-lg shadow-md flex items-center justify-center w-10 h-10`}
    //     >
    //       <button
    //         onClick={() => setIsOpen(true)}
    //         className="text-gray-700"
    //         aria-label="Open menu"
    //       >
    //         <List className="cursor-pointer text-2xl md:text-3xl text-primary-dark" />
    //       </button>
    //     </div>
    //   </div>

    //   {/* Overlay */}
    //   <div
    //     ref={overlayRef}
    //     className="fixed inset-0 z-50 bg-black/40 backdrop-blur-3xl opacity-0 invisible"
    //   >
    //     <div
    //       ref={drawerRef}
    //       className="absolute bottom-0 left-0 right-0 bg-white text-white rounded-t-2xl shadow-xl w-full h-[90vh] py-6 px-6 transform translate-y-full overflow-y-auto"
    //     >
    //       <div className="flex justify-end mb-4">
    //         <Button
    //           variant="iconButton"
    //           onClick={() => setIsOpen(false)}
    //           aria-label="Close menu"
    //         >
    //           <X
    //             className="cursor-pointer text-secondary hover:text-gold transition"
    //             size={24}
    //           />
    //         </Button>
    //       </div>

    //       <nav className="flex flex-col gap-6 text-center">
    //         {["Home", "Services", "About"].map((item, index) => (
    //           <button
    //             key={item}
    //             onClick={() => handleNavigate(routes[index])}
    //             onMouseEnter={() => setHoveredIndex(index)}
    //             onMouseLeave={() => setHoveredIndex(null)}
    //             className={`text-lg text-black hover:text-gold transition-all duration-300 pb-2 ${
    //               hoveredIndex !== null && hoveredIndex !== index
    //                 ? "blur-sm opacity-60"
    //                 : ""
    //             }`}
    //           >
    //             <Text variant="heading1">{item}</Text>
    //           </button>
    //         ))}
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    <header
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 font-serif text-white ${bgColor}`}
    >
      <div className="flex items-center justify-center gap-4 px-4 py-3 bg-white/80 backdrop-blur-md text-black rounded-full shadow-lg w-[90dvw] md:w-fit ">
        {/* Logo */}
        <button
          onClick={() => handleNavigate("/")}
          className="p-0 border-none bg-transparent cursor-pointer"
          aria-label="Go to home"
        >
          <img src={logoUrl} alt="Logo" className="h-5 md:h-8 w-auto" />
        </button>

        {/* Links */}
        <div className="flex gap-4 px-4">
          {["Home", "Services", "About"].map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavigate(routes[index])}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text-sm md:text-base transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-sm opacity-60"
                  : ""
              } hover:text-gold`}
            >
              <Text className="font-family-inter" variant="label1">
                {item}
              </Text>
            </button>
          ))}
        </div>

        {/* Hamburger Icon */}
        {/* <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700 w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow-md"
          aria-label="Open menu"
        >
          <List className="text-2xl md:text-3xl text-primary-dark" />
        </button> */}
      </div>

      {/* Overlay + Drawer (unchanged) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-3xl opacity-0 invisible"
      >
        <div
          ref={drawerRef}
          className="absolute bottom-0 left-0 right-0 bg-white text-white rounded-t-2xl shadow-xl w-full h-[90vh] py-6 px-6 transform translate-y-full overflow-y-auto"
        >
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

          <nav className="flex flex-col gap-6 text-center">
            {["Home", "Services", "About"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavigate(routes[index])}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`text-lg text-black hover:text-gold transition-all duration-300 pb-2 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm opacity-60"
                    : ""
                }`}
              >
                <Text variant="heading1">{item}</Text>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
