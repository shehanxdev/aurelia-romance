import { Link, Navbar, Text } from '@components';

import STUDIO_IMAGE_URL from '../../assets/images/studio.avif';

export function AboutMe() {
  return (
    <div className="flex flex-col  h-full xl:overflow-y-hidden ">
      <Navbar isPositionAbsolute={true} />
      <div
        className="flex h-full flex-col xl:flex-row justify-between items-center xl:pr-24  grow 
     xl:gap-14 "
      >
        <div className="relative h-full max-w-[800px] w-[35dvw] grow  hidden xl:block">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-full object-cover sticky top-0 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>
        <div className=" xl:hidden  flex relative w-full ">
          <img
            src={STUDIO_IMAGE_URL}
            alt="About Me"
            className="w-full h-[50dvh] xl:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="w-[90dvw] xl:w-[50dvw] flex flex-col h-full justify-between py-8 gap-18">
          <div className="grow font-bold flex flex-col justify-center">
            <Text variant="bodyItalic">
              Dear Friend,
              <br />
              <br />
              Welcome to Aurelia Romance where photography meets poetry in light
              and emotion. We capture not just moments, but the soul behind
              them, crafting timeless stories with heart and artistry.
              <br />
              <br />
              Warmly, <br />
              The Aurelia Romance Team
            </Text>
          </div>
          <div className="flex flex-col xl:flex-row justify-between w-full xl:items-end-safe pb-[100px] xl:pb-0">
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
