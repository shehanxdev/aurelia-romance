import { useState } from "react";
import { Button, Text } from "@components";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: wire up to real backend or email service
    // eslint-disable-next-line no-console
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-[90%] m-auto py-12 md:py-20">
      <Text variant="headingxl" className="leading-none">
        Contact
        <br />
        <span className="text-primary">Me</span>
      </Text>

      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Text as="h2" variant="heading2" className="mb-6">
            Let's create something beautiful
          </Text>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-secondary">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border p-3 bg-transparent outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-secondary">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full rounded-lg border p-3 bg-transparent outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-secondary">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full rounded-lg border p-3 bg-transparent outline-none"
                placeholder="Tell me about your shoot"
              />
            </div>

            <div className="pt-4">
              <Button className="w-full md:w-auto px-8">Send Message</Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <Text as="h3" variant="heading2" className="mb-4">
            Get in touch
          </Text>

          <div className="space-y-4 text-[1.05em]">
            <div>
              <Text className="font-semibold" variant="label1">
                Email
              </Text>
              <div className="text-secondary">hello@aureliaromance.com</div>
            </div>

            <div>
              <Text className="font-semibold" variant="label1">
                Phone
              </Text>
              <div className="text-secondary">+1 (555) 123-4567</div>
            </div>

            <div>
              <Text className="font-semibold" variant="label1">
                Studio
              </Text>
              <div className="text-secondary">Colombo, Sri Lanka</div>
            </div>

            <div className="pt-6">
              <Text variant="body" className="italic">
                I respond to most enquiries within 48 hours. For urgent
                bookings please call.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
