import { useEffect, useRef, useState } from "react";
import img from "../../assets/slider-images/A4 - 1.png";
import { Navbar } from "@components";
import { useScrollSections } from "./../../hooks/useScrollSections";

interface Homeprops {
  readonly className?: string;
}
export function Home({ className }: Homeprops) {
  useScrollSections(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState("");
  const totalImages = 2;
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const SLIDE_RATE_ADJUSTER = 100;

  useEffect(() => {
    if (imagesLoaded < totalImages || !carouselRef.current) return undefined;

    const totalWidth = carouselRef.current.scrollWidth / 2;

    if (!totalWidth) return undefined;

    const keyframeName = "scroll-marquee-dynamic";
    const duration = totalWidth / SLIDE_RATE_ADJUSTER;

    const style = `
      @keyframes ${keyframeName} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }

      .${keyframeName} {
        animation: ${keyframeName} ${duration}s linear infinite;
      }
    `;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    setAnimationClass(keyframeName);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <div className="relative h-[300vh]">
      <div className="sticky top-0 h-screen z-[1]">
        <Navbar />
        <div
          className={`w-full h-[85dvh] overflow-hidden relative ${className}`}
        >
          <div
            ref={carouselRef}
            className={`flex w-max h-full ${animationClass}`}
          >
            {Array.from({ length: totalImages }).map((_, idx) => (
              <img
                key={idx}
                src={img}
                alt="carousel"
                onLoad={handleImageLoad}
                className="h-full w-auto object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl bg-red-500 z-[2]">
        Section 2
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl bg-green-500 z-[3]">
        Section 3
      </div>
    </div>
  );
}
