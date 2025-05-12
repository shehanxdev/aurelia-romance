import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/slider-images/A4 - 1.png";

export function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState("");
  const totalImages = 2; // Change as needed
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (imagesLoaded < totalImages || !carouselRef.current) return;

    const totalWidth = carouselRef.current.scrollWidth / 2;

    if (!totalWidth) return;

    const keyframeName = "scroll-marquee-dynamic";
    const duration = totalWidth / 100; // Adjust speed as needed

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
    <div className="w-full h-[85dvh] overflow-hidden relative">
      <div ref={carouselRef} className={`flex w-max h-full ${animationClass}`}>
        {Array.from({ length: totalImages }).map((_, idx) => (
          <img
            key={idx}
            src={img}
            alt="carousel"
            onLoad={handleImageLoad}
            className="h-full w-auto object-cover"
          />
        ))}
        {/* Duplicate the same set for seamless looping */}
        {Array.from({ length: totalImages }).map((_, idx) => (
          <img
            key={`dup-${idx}`}
            src={img}
            alt="carousel"
            onLoad={handleImageLoad}
            className="h-full w-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
}
