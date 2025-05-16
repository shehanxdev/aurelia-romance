import { useEffect, useRef, useState } from 'react';

import img from '../../assets/slider-images/A4 - 1.png';

interface HeroSection {
  readonly className?: string;
}
export function HeroSection({ className }: HeroSection) {
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
    <div className={className}>
      <div
        ref={carouselRef}
        className={`flex w-max h-[100dvh] ${animationClass}`}
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
  );
}
