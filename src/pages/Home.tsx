import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { Button, Text } from "@components";

import SLIDER_IMAGE from "../assets/images/HomePageSliderImage.png";

interface HeroSection {
  readonly className?: string;
}

export function Home({ className }: HeroSection) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const navigate = useNavigate();
  const totalImages = 2;
  const slideRateAdjuster = 44;

  useEffect(() => {
    if (imagesLoaded < totalImages || !carouselRef.current) return undefined;

    const totalWidth = carouselRef.current.scrollWidth / 2;
    if (!totalWidth) return undefined;

    const keyframeName = "scroll-marquee-dynamic";
    const duration = totalWidth / slideRateAdjuster;

    const style = `
      @keyframes ${keyframeName} {
        0% {
          transform: translateX(0) scale(1.02);
        }
        100% {
          transform: translateX(-${totalWidth}px) scale(1.02);
        }
      }

      .${keyframeName} {
        animation: ${keyframeName} ${duration}s linear infinite;
        transform-origin: center center;
        will-change: transform;
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

  return (
    <div className={className}>
      <section className="relative h-[100dvh] overflow-hidden bg-black">
        <div
          ref={carouselRef}
          className={`flex h-[100dvh] w-max ${animationClass}`}
        >
          {Array.from({ length: totalImages }).map((_, idx) => (
            <img
              key={idx}
              src={SLIDER_IMAGE}
              alt="Aurelia Romance hero carousel"
              onLoad={() => setImagesLoaded((prev) => prev + 1)}
              className="h-full w-auto object-cover"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,11,0.18)_0%,rgba(17,14,11,0.08)_28%,rgba(17,14,11,0.24)_62%,rgba(17,14,11,0.68)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,245,230,0.1),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(182,141,64,0.12),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.24)]" />

       
        <div className="absolute inset-x-[5%] bottom-8 md:bottom-8">
          <div className="max-w-[700px] text-white">
            <div className="mb-5 w-20 border-t border-white/35 md:mb-7 md:w-28" />
            <Text
              as="h1"
              variant="heading1"
              textColor="white"
              className="max-w-[9ch] leading-[0.9]"
            >
              Romance, held in light.
            </Text>
            <Text
              variant="label1"
              className="mt-5 max-w-[28ch] text-white/72 md:mt-6"
            >
              Editorial wedding stories with softness, atmosphere, and quiet
              elegance.
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
              <Button
                className="w-full px-8 sm:w-auto"
                onClick={() => navigate("/gallery")}
              >
                View Stories
              </Button>
              <button
                type="button"
                className="w-full text-left text-sm uppercase tracking-[0.28em] text-white/78 transition-colors duration-300 hover:text-white sm:w-auto"
                onClick={() => navigate("/contact")}
              >
                Begin Your Story
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-[5%] hidden text-right md:block">
          <Text variant="label1" className="luxury-kicker !text-white/60">
            Colombo, Sri Lanka
          </Text>
        </div>
      </section>
    </div>
  );
}
