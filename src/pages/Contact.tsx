import { useState } from "react";

import { Button, Text } from "@components";

const contactDetails = [
  {
    label: "Email",
    value: "hello@aureliaromance.com",
    href: "mailto:hello@aureliaromance.com",
  },
  { label: "Phone", value: "+94 77 123 4567", href: "tel:+94771234567" },
  { label: "Studio", value: "Colombo, Sri Lanka" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder until the enquiry flow is connected to a real inbox.
    // eslint-disable-next-line no-console
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="luxury-shell px-[5%] pb-12 pt-24 sm:pt-28 md:pb-20">
      <section className="luxury-panel rounded-[2rem] px-5 py-7 sm:px-6 sm:py-8 md:px-10 md:py-12">
        <Text variant="label1" className="luxury-kicker mb-6">
          Enquiries
        </Text>
        <Text
          variant="headingxl"
          className="text-[4.35rem] leading-[0.88] tracking-[-0.05em] sm:text-[6rem] md:text-[100px] xl:text-[200px]"
        >
          Contact
          <br />
          <span className="text-primary">Aurelia</span>
        </Text>

        <div className="mt-8 grid gap-5 border-t luxury-border pt-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
          {contactDetails.map((item) => (
            <div key={item.label} className=" pt-2">
              <Text
                variant="label1"
                className="mb-2 font-semibold uppercase tracking-[0.18em]"
              >
                {item.label}
              </Text>
              <Text
                as={item.href ? "a" : "p"}
                {...(item.href ? { href: item.href } : {})}
                variant="body"
                className="break-words text-[1.125rem] leading-[1.35] font-light sm:text-[1.2rem] md:text-[1.28rem] lg:text-[1.35rem]"
              >
                {item.value}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section className="luxury-panel mt-10 rounded-[2rem] px-5 py-7 sm:px-6 sm:py-8 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Text variant="label1" className="luxury-kicker mb-5">
              Tell the Story
            </Text>
            <Text
              as="h2"
              variant="heading2"
              className="text-[2.15rem] leading-[0.95] sm:text-[2.5rem] md:text-[2.8125em]"
            >
              Share the mood,
              <br />
              setting, and season.
            </Text>
            <Text
              variant="body"
              className="mt-5 max-w-[24ch] text-[1.125rem] leading-[1.45] font-light sm:mt-6 sm:text-[1.2rem] md:max-w-[18ch] md:text-[1.35rem]"
            >
              Tell me about the celebration, the location, and the feeling you
              want your gallery to hold onto.
            </Text>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <label className="block md:col-span-1">
              <Text variant="label1" className="luxury-kicker mb-3 block">
                Name
              </Text>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-[1.25rem] border luxury-border bg-white/70 px-4 py-3.5 text-[1rem] outline-none transition-colors focus:border-primary sm:px-5 sm:py-4"
                placeholder="Your name"
              />
            </label>

            <label className="block md:col-span-1">
              <Text variant="label1" className="luxury-kicker mb-3 block">
                Email
              </Text>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full rounded-[1.25rem] border luxury-border bg-white/70 px-4 py-3.5 text-[1rem] outline-none transition-colors focus:border-primary sm:px-5 sm:py-4"
                placeholder="you@example.com"
              />
            </label>

            <label className="block md:col-span-2">
              <Text variant="label1" className="luxury-kicker mb-3 block">
                Vision
              </Text>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={7}
                className="min-h-[220px] w-full rounded-[1.5rem] border luxury-border bg-white/70 px-4 py-3.5 text-[1rem] outline-none transition-colors focus:border-primary sm:px-5 sm:py-4"
                placeholder="Tell me about the celebration, the atmosphere you love, and the kind of photographs you want to remember."
              />
            </label>

            <div className="pt-3 md:col-span-2 md:max-w-xs">
              <Button className="px-8">Send Enquiry</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
