import { useState } from "react";

import { Button, Text } from "@components";

const contactDetails = [
  { label: "Email", value: "hello@aureliaromance.com" },
  { label: "Phone", value: "+94 77 123 4567" },
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
    <div className="luxury-shell px-[5%] py-12 md:py-20">
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="luxury-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <Text variant="label1" className="luxury-kicker mb-6">
            Enquiries
          </Text>
          <Text variant="headingxl" className="leading-[0.85]">
            Contact
            <br />
            <span className="text-primary">Aurelia</span>
          </Text>
        </div>

        <div className="luxury-panel overflow-hidden rounded-[2rem] p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
   
            <div className="flex flex-col justify-between gap-8 rounded-[1.5rem] border luxury-border bg-[#f7f0e8] p-6 md:p-8">
              <div>
                <Text variant="label1" className="luxury-kicker mb-4">
                  Response Window
                </Text>
                <Text as="h2" variant="heading2" className="leading-none">
                  Most enquiries are answered within 48 hours.
                </Text>
              </div>

              <div className="space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.label} className="border-t luxury-border pt-4">
                    <Text variant="label1" className="mb-2 font-semibold uppercase tracking-[0.18em]">
                      {item.label}
                    </Text>
                    <Text variant="body" className="font-light">
                      {item.value}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-panel mt-10 rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Text variant="label1" className="luxury-kicker mb-5">
              Tell the Story
            </Text>
            <Text as="h2" variant="heading2" className="leading-none">
              Share the mood,
              <br />
              setting, and season.
            </Text>
            <Text variant="body" className="mt-6 max-w-[18ch] font-light">
              The form is framed more like a private consultation than a plain
              contact block, which helps it feel aligned with the home page.
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
                className="w-full rounded-[1.25rem] border luxury-border bg-white/70 px-5 py-4 outline-none transition-colors focus:border-primary"
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
                className="w-full rounded-[1.25rem] border luxury-border bg-white/70 px-5 py-4 outline-none transition-colors focus:border-primary"
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
                className="w-full rounded-[1.5rem] border luxury-border bg-white/70 px-5 py-4 outline-none transition-colors focus:border-primary"
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
