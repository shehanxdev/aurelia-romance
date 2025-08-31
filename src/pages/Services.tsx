import { Button, Text } from "@components";
import { ArrowCircleUpRight } from "@phosphor-icons/react";

import CASUAL_SHOOT_IMAGE from "../assets/images/casualImage.avif";
import ENGAGEMENT_IMAGE from "../assets/images/engagementImage.avif";
import HOMECOMMING_IMAGE from "../assets/images/homecommingImage.avif";
import PRESHOOT_IMAGE from "../assets/images/preshootImage.avif";

const services = [
  { title: "Weddings", image: HOMECOMMING_IMAGE },
  { title: "Engagements", image: ENGAGEMENT_IMAGE },
  { title: "Preshoots", image: PRESHOOT_IMAGE },
  { title: "Homecomings", image: HOMECOMMING_IMAGE },
  { title: "Casual", image: CASUAL_SHOOT_IMAGE },
];

export function Services() {
  return (
    <div className="flex flex-col">
      {/* Explore Services Heading */}
      <div className="w-[90%] leading-none flex flex-col m-auto  mb-[40px]">
        <Text as="h1" variant="headingxl">
          Explore <br /> Services
        </Text>
      </div>

      {/* Services List */}
      <div className="w-[90%] m-auto">
        {services.map((item) => (
          <div
            key={item.title}
            className="flex flex-col md:flex-row gap-x-9 gap-y-5 w-full m-auto py-14 md:py-20 border-b border-dashed"
          >
            <div className="flex items-end">
              <img
                className="rounded-3xl w-[100%] md:w-[300px] lg:w-[500px]"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex justify-between grow items-center sm:items-end">
              <Text variant="heading2">{item.title}</Text>
              <Button variant="iconButton">
                <ArrowCircleUpRight
                  weight="thin"
                  className="text-[40px] sm:text-[60px] font-thin text-primary-dark hover:text-black"
                />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Heading and Philosophy Section */}
      <div className="w-[90%] leading-none flex flex-col m-auto mt-[120px] md:mt-[200px]">
        <Text as="h1" variant="headingxl">
          About
          <br />
          <span className="text-primary">
            Aurelia <br /> Romance
          </span>
        </Text>

        <div className="mt-[70px] md:mt-[100px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-14">
            <div className="md:w-[40%]">
              <Text className="font-semibold" as="h2" variant="heading2">
                Philosophy
              </Text>
            </div>
            <div className="md:w-[60%]">
              <Text className="font-light" variant="body">
                Photography is more than seeing it is sensing. It's not about
                capturing perfection, but preserving the invisible emotion that
                lives between glances, between gestures, between heartbeats.
              </Text>
            </div>
          </div>
        </div>

        <div className="mt-[50px] md:mt-[100px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-14">
            <div className="md:w-[40%]">
              <Text className="font-semibold" as="h2" variant="heading2">
                The Process
              </Text>
            </div>
            <div className="md:w-[60%]">
              <Text className="font-light" variant="body">
                Each session is uniqueΓÇöshaped by quiet moments, gentle cues, and
                the rhythm of your story. From intimate vows to golden sunsets,
                I create with patience, letting light and soul lead.
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Final CTA */}
      <div className="w-[90%] leading-none flex flex-col m-auto mt-[100px] md:mt-[200px] mb-[70px] md:mb-[100px] items-center">
        <Text className="text-center" as="h1" variant="headingxl">
          LetΓÇÖs Capture <br /> Your Story
        </Text>
        <Button className="text-center px-6 my-16">
          <Text className="text-white" as="a" variant="body">
            Contact Us
          </Text>
        </Button>
      </div>
    </div>
  );
}
