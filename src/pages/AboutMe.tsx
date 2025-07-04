import { Text } from "@components";

import CASUAL_SHOOT_IMAGE from "../assets/images/casualImage.avif";
import ENGAGEMENT_IMAGE from "../assets/images/engagementImage.avif";
import HOMECOMMING_IMAGE from "../assets/images/homecommingImage.avif";
import PRESHOOT_IMAGE from "../assets/images/preshootImage.avif";
import STUDIO_IMAGE_URL from "../assets/images/studio.avif";
import WEDDING_IMAGE from "../assets/images/weddingImage.avif";

const services = [
  { title: "Weddings", image: WEDDING_IMAGE },
  { title: "Engagements", image: ENGAGEMENT_IMAGE },
  { title: "Preshoots", image: PRESHOOT_IMAGE },
  { title: "Homecomings", image: HOMECOMMING_IMAGE },
  { title: "Casual", image: CASUAL_SHOOT_IMAGE },
];

export function AboutMe() {
  return (
    // <div className="flex flex-col relative">
    //   <div className="flex  flex-col xl:flex-row xl:pr-24 xl:gap-14 ">
    //     <div className="h-full  w-[50dvw] hidden xl:block sticky top-0">
    //       <img
    //         src={STUDIO_IMAGE_URL}
    //         alt="About Me"
    //         className="w-full h-screen rounded-r-[100px] full object-cover self-start grayscale hover:grayscale-0 transition-all duration-500 ease-in-out shadow-2xl shadow-black"
    //       />
    //     </div>
    //     <div className="xl:hidden flex w-full ">
    //       <img
    //         src={STUDIO_IMAGE_URL}
    //         alt="About Me"
    //         className="w-full h-[60dvh] rounded-b-[70px] xl:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out shadow-2xl shadow-black "
    //       />
    //     </div>

    //     <div className="md:mx-auto md:w-[70dvw] xl:w-[50dvw] flex flex-col  xl:min-h-screen justify-between py-8 gap-18 px-3 mt-8 md:mt-12 xl:mt-0 xl:px-0 ">
    //       <div className="xl:grow font-bold flex flex-col xl:justify-center text-center  gap-12 xl:gap-32 ">
    //         {/* <Text className="leading-12 md:leading-20" variant="heading1">
    //           Welcome to Aurelia Romance
    //         </Text> */}
    //         <div>
    //           {/* <Text variant="heading2">Our Philosophy</Text> */}
    //           <Text
    //             className="font-light font-family-inter"
    //             variant="bodyItalic"
    //           >
    //             photography is feeling capturing the quiet between glances and
    //             heartbeats. We begin by listening to your story, guiding you
    //             gently so real emotion can shine through. Each image becomes a
    //             soft dance of shadow and soul, a timeless poem crafted with care
    //             to reflect your true essence.
    //           </Text>
    //         </div>
    //         {/* <div>
    //           <Text variant="heading2">Our Process</Text>
    //           <Text className="font-light" variant="bodyItalic">
    //             Our process is simple and smooth: we start by listening to your
    //             story, then guide you gently so you can relax. We focus on real
    //             emotion, crafting each image with care to capture your true
    //             essence.
    //           </Text>
    //         </div> */}
    //       </div>

    //       <div className="flex flex-col xl:flex-row justify-between w-full items-center xl:items-end-safe pb-[70px] xl:pb-0 ">
    //         <Link
    //           href="https://www.facebook.com/share/16J3zTjRzp/?mibextid=wwXIfr"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Text className="font-bold" variant="label1">
    //             Facebook: Connect with us
    //           </Text>
    //         </Link>

    //         <Text className="font-bold" variant="label1">
    //           Mobile: +94 71 892 8981
    //         </Text>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col">
      <div className="w-[90%] md:w-[90%]  leading-none flex flex-col m-auto">
        <Text as={"h1"} variant="headingxl">
          About
          <br />
          <span className="text-primary ">
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
                Photography is more than seeing it is sensing. ItΓÇÖs not about
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
                Each session is unique shaped by quiet moments, gentle cues, and
                the rhythm of your story. From intimate vows to golden sunsets,
                I create with patience, letting light and soul lead.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] leading-none flex flex-col m-auto mt-[120px] md:mt-[200px] mb-[70px] md:mb-[100px]">
        <Text as={"h1"} variant="headingxl">
          Explore <br /> Services
        </Text>
      </div>
      <div>
        {services.map((item) => (
          <div
            key={item.title}
            className="w-full h-[80dvh] md:h-[50dvh] bg-cover object-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="w-full bg-black/50 h-full flex justify-center items-center text-center">
              <Text className="text-white" variant="heading1">
                {item.title}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
