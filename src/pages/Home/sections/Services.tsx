import { Navbar, Text } from "@components";

import CASUAL_SHOOT_IMAGE from "../../../assets/images/casualImage.avif";
import ENGAGEMENT_IMAGE from "../../../assets/images/engagementImage.avif";
import HOMECOMMING_IMAGE from "../../../assets/images/homecommingImage.avif";
import PRESHOOT_IMAGE from "../../../assets/images/preshootImage.avif";
import WEDDING_IMAGE from "../../../assets/images/weddingImage.avif";

const services = [
  { title: "Weddings", image: WEDDING_IMAGE },
  { title: "Engagements", image: ENGAGEMENT_IMAGE },
  { title: "Preshoots", image: PRESHOOT_IMAGE },
  { title: "Homecomings", image: HOMECOMMING_IMAGE },
  { title: "Casual Photoshoots", image: CASUAL_SHOOT_IMAGE },
];

export function Services() {
  return (
    <div className="w-full">
      <Navbar isPositionAbsolute={true} />
      {services.map((service) => (
        <div
          key={service.title}
          className="relative w-[100dvw] h-[100vh] overflow-hidden"
        >
          <div
            className="h-full bg-center bg-cover bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="w-full h-full bg-black/70 flex items-center justify-center">
              <Text variant="heading1" className="text-white text-center">
                {service.title}
              </Text>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}
    </div>
  );
}
