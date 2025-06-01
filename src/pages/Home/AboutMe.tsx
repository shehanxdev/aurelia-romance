import { Link, Navbar, Text } from "@components";

import STUDIO_IMAGE_URL from "../../assets/images/studio.avif";

export function AboutMe() {
  return (
    <div className="flex flex-col">
      <Navbar isPositionAbsolute={true} />
      <div className="flex  flex-col xl:flex-row xl:pr-24 xl:gap-14 ">
        <div className="h-full max-w-[900px] w-[40dvw] hidden xl:block sticky top-0">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-screen full object-cover self-start grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="xl:hidden flex w-full ">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-screen xl:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out sticky top-0"
          />
        </div>

        <div className="w-[90dvw] md:w-[70dvw] xl:w-[50dvw] flex flex-col h-full justify-between py-8 gap-18 m-auto xl:m-0">
          <div className="grow font-bold flex flex-col justify-center text-center  gap-12 xl:gap-32 ">
            <Text className="leading-12 md:leading-20" variant="heading1">
              Welcome to Aurelia Romance
            </Text>
            <div>
              <Text variant="heading2">Our Philosophy</Text>
              <Text className="font-light" variant="body">
                Photography is more than seeing it is sensing. It’s not about
                capturing perfection, but preserving the invisible emotion that
                lives between glances, between gestures, between heartbeats. At
                Aurelia Romance, every image is a delicate dialogue between
                shadow and soul. An heirloom of feeling. A poem of light.
              </Text>
            </div>
            <div>
              <Text variant="heading2">Our Process</Text>
              <Text className="font-light" variant="body">
                Our process begins with listening we tailor each session to your
                story. On shoot day, we guide gently, letting real emotion lead
                the way. Each image is edited with care, preserving both beauty
                and feeling. With us, you're not just photographed you're deeply
                seen and artfully remembered.
              </Text>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between w-full items-center xl:items-end-safe pb-[100px] xl:pb-0 ">
            <Link
              href="https://www.facebook.com/share/16J3zTjRzp/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text className="font-bold" variant="label1">
                Facebook: Connect with us
              </Text>
            </Link>

            <Text className="font-bold" variant="label1">
              Mobile: +94 71 892 8981
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
