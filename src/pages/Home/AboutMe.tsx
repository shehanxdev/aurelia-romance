import { Link, Navbar, Text } from "@components";

import STUDIO_IMAGE_URL from "../../assets/images/studio.avif";

export function AboutMe() {
  return (
    <div className="flex flex-col">
      <Navbar isPositionAbsolute={true} />
      <div className="flex  flex-col xl:flex-row xl:pr-24 xl:gap-14 ">
        <div className="h-full max-w-[900px] w-[50dvw] hidden xl:block sticky top-0">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-screen rounded-r-[100px] full object-cover self-start grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="xl:hidden flex w-full ">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-[60dvh] rounded-b-[70px] xl:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out "
          />
        </div>

        <div className="w-full  xl:w-[50dvw] flex flex-col h-full justify-between py-8 gap-18 px-3 md:px-16 xl:px-0">
          <div className="grow font-bold flex flex-col justify-center text-center  gap-12 xl:gap-32 ">
            <Text className="leading-12 md:leading-20" variant="heading1">
              Welcome to Aurelia Romance
            </Text>
            <div>
              <Text variant="heading2">Our Philosophy</Text>
              <Text className="font-light" variant="bodyItalic">
                Photography is feeling capturing the quiet between glances and
                heartbeats. At Aurelia Romance, each image is a soft dance of
                shadow and soul, a timeless poem written in light.
              </Text>
            </div>
            <div>
              <Text variant="heading2">Our Process</Text>
              <Text className="font-light" variant="bodyItalic">
                Our process is simple and smooth: we start by listening to your
                story, then guide you gently so you can relax. We focus on real
                emotion, crafting each image with care to capture your true
                essence.
              </Text>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between w-full items-center xl:items-end-safe pb-[70px] xl:pb-0 ">
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
