import { Navbar, Text } from "@components";

import SELF_PORTRAIT_URL from "../../assets/selfPortraitSide.jpg";

export function AboutMe() {
  return (
    <div className="flex flex-col bg-black min-h-screen justify-center">
      <Navbar bgColor="black" />
      <div
        className="flex flex-col xl:flex-row justify-center items-center px-24  grow h-fit
     gap-14 "
      >
        <div className="relative  max-w-[600px] w-[32dvw]  aspect-[3/4] hidden xl:block">
          {/* Top-left corner */}
          <div className="absolute top-[-15px] left-[-15px] w-8 h-8 border-t-3 border-l-3 border-yellow-700" />

          {/* Top-right corner */}
          <div className="absolute top-[-15px] right-[-15px] w-8 h-8 border-t-3 border-r-3 border-yellow-700" />

          {/* Bottom-left corner */}
          <div className="absolute bottom-[-15px] left-[-15px] w-8 h-8 border-b-3 border-l-3 border-yellow-700" />

          {/* Bottom-right corner */}
          <div className="absolute bottom-[-15px] right-[-15px] w-8 h-8 border-b-3 border-r-3 border-yellow-700" />

          {/* Image */}
          <img
            src={SELF_PORTRAIT_URL}
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" xl:hidden flex relative w-full max-w-[30dvw] aspect-[3/4]">
          <img
            src={SELF_PORTRAIT_URL}
            alt="About Me"
            className="w-full h-full object-cover"
          />
          <img
            src={SELF_PORTRAIT_URL}
            alt="About Me"
            className="w-full h-full object-cover"
          />
          <img
            src={SELF_PORTRAIT_URL}
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50dvw]">
          {/* <Text textColor={"white"} variant="heading1">
            Through My Lens,
          </Text> */}
          <Text textColor={"white"} variant="bodyItalic">
            Dear Friend,
            <br />
            <br />
            I’m Gayashan Hettiarachchi, a photographer who sees the world
            through a lens of wonder. I don’t just capture images; I capture
            moments, emotions, and stories waiting to be told. Each shot is an
            invitation to pause and remember the beauty in life’s details.
            Photography is my passion, my way of connecting with the world, and
            I’d love to share that connection with you. If you're looking to
            preserve not just a memory, but a feeling, let’s create something
            unforgettable.
            <br />
            <br />
            Yours truly, <br />
            Gayashan Hettiarachchi
          </Text>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
