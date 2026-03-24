import { ArrowCircleUpRight } from "@phosphor-icons/react";

import { Button, Text } from "@components";

import CASUAL_SHOOT_IMAGE from "../assets/images/casualImage.avif";
import ENGAGEMENT_IMAGE from "../assets/images/engagementImage.avif";
import HOMECOMMING_IMAGE from "../assets/images/homecommingImage.avif";
import PRESHOOT_IMAGE from "../assets/images/preshootImage.avif";
import WEDDING_IMAGE from "../assets/images/weddingImage.avif";

const services = [
  {
    title: "Weddings",
    image: WEDDING_IMAGE,
    description:
      "Layered coverage for vows, fashion, atmosphere, and the quiet moments in between.",
  },
  {
    title: "Engagements",
    image: ENGAGEMENT_IMAGE,
    description:
      "Editorial portraits with movement, softness, and a sense of place around your story.",
  },
  {
    title: "Preshoots",
    image: PRESHOOT_IMAGE,
    description:
      "A more cinematic chapter for couples who want images that feel transportive and personal.",
  },
  {
    title: "Homecomings",
    image: HOMECOMMING_IMAGE,
    description:
      "Warmly observed celebrations shaped around reunion, family texture, and lived emotion.",
  },
  {
    title: "Casual",
    image: CASUAL_SHOOT_IMAGE,
    description:
      "Relaxed sessions with elegant styling, natural direction, and beautifully unforced frames.",
  },
];

const principles = [
  {
    label: "Philosophy",
    copy:
      "Photography is not treated as documentation alone. The work is shaped to feel tactile, intimate, and quietly cinematic, preserving how the day felt as much as how it looked.",
  },
  {
    label: "The Process",
    copy:
      "Each session is paced with calm direction, light styling cues, and room for spontaneity so the final gallery feels composed without becoming stiff or over-produced.",
  },
];

export function Services() {
  return (
    <div className="luxury-shell px-[5%] py-12 md:py-20">
      <section className="luxury-panel rounded-[2rem] px-6 py-8 md:px-12 md:py-14">
        <Text variant="label1" className="luxury-kicker mb-6">
          Signature Offerings
        </Text>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Text as="h1" variant="headingxl" className="leading-[0.85]">
              Crafted
              <br />
              for <span className="text-primary">romance</span>
            </Text>
          </div>
          
        </div>
      </section>

      <section className="mt-10 space-y-6">
        {services.map((item, index) => (
          <article
            key={item.title}
            className="luxury-panel rounded-[2rem] p-4 md:p-6"
          >
            <div className="grid gap-6 md:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  className="luxury-image h-[320px] w-full object-cover md:h-[420px]"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="flex min-h-full flex-col justify-between gap-8 py-2 md:py-4">
                <div className="space-y-6">
                  <Text variant="label1" className="luxury-kicker">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <div className="border-t luxury-border pt-6">
                    <Text as="h2" variant="heading2" className="leading-none">
                      {item.title}
                    </Text>
                    <Text
                      variant="body"
                      className="mt-5 max-w-[22ch] font-light text-secondary"
                    >
                      {item.description}
                    </Text>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t luxury-border pt-5">
                  <Text variant="label1" className="tracking-[0.2em] uppercase">
                    Tailored Experience
                  </Text>
                  <Button
                    variant="iconButton"
                    className="h-auto w-auto rounded-full p-0"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowCircleUpRight
                      weight="thin"
                      className="text-[42px] text-primary-dark transition-colors duration-300 hover:text-black md:text-[56px]"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="luxury-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <Text variant="label1" className="luxury-kicker mb-6">
            House Notes
          </Text>
          <Text as="h2" variant="heading2" className="leading-none">
            A softer pace,
            <br />
            an editorial eye.
          </Text>
        </div>

        <div className="luxury-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <div className="space-y-10">
            {principles.map((item) => (
              <div key={item.label} className="border-b luxury-border pb-8 last:border-b-0 last:pb-0">
                <Text as="h3" variant="heading2" className="mb-4">
                  {item.label}
                </Text>
                <Text variant="body" className="font-light">
                  {item.copy}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-panel mt-20 rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
        <Text variant="label1" className="luxury-kicker mb-6">
          Ready When You Are
        </Text>
        <Text as="h2" variant="heading2" className="leading-none">
          Let&apos;s shape a gallery
          <br />
          that feels heirloom-worthy.
        </Text>
        <div className="mx-auto mt-10 max-w-xs">
          <Button className="px-6">
            <Text as="span" variant="body" className="text-white">
              Contact Us
            </Text>
          </Button>
        </div>
      </section>
    </div>
  );
}
