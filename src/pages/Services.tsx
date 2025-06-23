import gsap from 'gsap';
import { useRef, useState } from 'react';

import { Text } from '@components';

import CASUAL_SHOOT_IMAGE from '../assets/images/casualImage.avif';
import ENGAGEMENT_IMAGE from '../assets/images/engagementImage.avif';
import HOMECOMMING_IMAGE from '../assets/images/homecommingImage.avif';
import PRESHOOT_IMAGE from '../assets/images/preshootImage.avif';
import WEDDING_IMAGE from '../assets/images/weddingImage.avif';

const services = [
  { title: "Weddings", image: WEDDING_IMAGE },
  { title: "Engagements", image: ENGAGEMENT_IMAGE },
  { title: "Preshoots", image: PRESHOOT_IMAGE },
  { title: "Homecomings", image: HOMECOMMING_IMAGE },
  { title: "Casual Photoshoots", image: CASUAL_SHOOT_IMAGE },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleServiceClick = (index: number) => {
    if (index === activeIndex) return;

    // Animate fade out, change image, fade in
    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        setActiveIndex(index); // triggers re-render and updates image
      },
    }).to(imageRef.current, {
      opacity: 1,
      duration: 0.4,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="md:w-[60dvw] m-auto flex flex-col mb-8 md:mb-20">
        <Text variant="headingxl" className="text-center md:text-left">
          EXPLORE
        </Text>
        <Text
          variant="headingxl"
          className="text-center md:text-right leading-none"
        >
          SERVICES
        </Text>
      </div>

      <div className="flex flex-col xl:flex-row h-[100vh] w-full bg-white">
        {/* Left Image Section */}
        <div className="relative w-full xl:w-2/3 h-[50vh] xl:h-full">
          <img
            ref={imageRef}
            key={services[activeIndex].image}
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            className="w-full h-full object-cover transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Right List Section */}
        <div className="w-full xl:w-1/3 h-full flex flex-col items-center justify-center px-4 py-8 gap-6">
          <div className="flex flex-col gap-4 mt-8">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => handleServiceClick(index)}
                className={`transition transform text-xl  ${
                  index === activeIndex
                    ? " text-primary-dark underline"
                    : " text-gray-700 hover:scale-105"
                }`}
              >
                <Text className="text-left" variant="heading2">
                  {" "}
                  {service.title}
                </Text>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
