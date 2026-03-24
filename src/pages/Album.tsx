import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router";

import { Button, Text } from "@components";

import { getAlbumById } from "../data/albums";

type ActiveImage = {
  url: string;
  alt: string;
};

export function Album() {
  const { albumId = "" } = useParams();
  const navigate = useNavigate();
  const album = getAlbumById(albumId);
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  if (!album) {
    return (
      <div className="luxury-shell px-[5%] py-16 md:py-24">
        <section className="luxury-panel rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
          <Text variant="label1" className="luxury-kicker mb-6">
            Album Not Found
          </Text>
          <Text as="h1" variant="heading2" className="leading-none">
            This story is not available right now.
          </Text>
          <div className="mx-auto mt-8 max-w-xs">
            <Button onClick={() => navigate("/gallery")}>Back to Gallery</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="luxury-shell px-[5%] py-12 md:py-20">
      <section className="luxury-panel rounded-[2rem] px-6 py-8 md:px-12 md:py-14">
        <Text variant="label1" className="luxury-kicker mb-5">
          Album
        </Text>
        <Text as="h1" variant="headingxl" className="leading-[0.85]">
          {album.title}
        </Text>
        <div className="mt-8 grid gap-8 border-t luxury-border pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Text variant="label1" className="luxury-kicker mb-3">
              Couple
            </Text>
            <Text as="h2" variant="heading2" className="leading-none">
              {album.couple}
            </Text>
            <Text variant="body" className="mt-5 max-w-[22ch] font-light">
              {album.details}
            </Text>
          </div>
          <div>
            <Text variant="label1" className="luxury-kicker mb-3">
              Story
            </Text>
            <Text variant="body" className="max-w-[30ch] font-light">
              {album.description}
            </Text>
          </div>
        </div>
      </section>

      <section className="luxury-panel mt-10 overflow-hidden rounded-[2rem] p-3 md:p-5">
        <img
          src={album.heroImage}
          alt={`${album.title} hero`}
          className="luxury-image h-[38vh] w-full rounded-[1.5rem] object-cover md:h-[55vh]"
        />
      </section>

      <section className="mt-10 grid gap-4 md:gap-6">
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:gap-6">
          {album.galleryImages.slice(0, 2).map((image, index) => (
            <button
              key={image}
              type="button"
              className="luxury-panel group overflow-hidden rounded-[1.75rem] p-3 text-left"
              onClick={() =>
                setActiveImage({
                  url: image,
                  alt: `${album.title} image ${index + 1}`,
                })
              }
            >
              <img
                src={image}
                alt={`${album.title} image ${index + 1}`}
                className="luxury-image h-[340px] w-full rounded-[1.3rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-[420px]"
              />
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-6">
          {album.galleryImages.slice(2).map((image, index) => (
            <button
              key={image}
              type="button"
              className="luxury-panel group overflow-hidden rounded-[1.75rem] p-3 text-left"
              onClick={() =>
                setActiveImage({
                  url: image,
                  alt: `${album.title} image ${index + 3}`,
                })
              }
            >
              <img
                src={image}
                alt={`${album.title} image ${index + 3}`}
                className="luxury-image h-[320px] w-full rounded-[1.3rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="luxury-panel mt-16 rounded-[2rem] px-6 py-10 text-center md:px-10 md:py-14">
        <Text variant="label1" className="luxury-kicker mb-6">
          Begin Your Story
        </Text>
        <Text as="h2" variant="heading2" className="leading-none">
          Ready for a gallery
          <br />
          that feels this personal?
        </Text>
        <Text variant="body" className="mx-auto mt-6 max-w-[22ch] font-light">
          Share your plans and let&apos;s create something intimate, polished,
          and unforgettable together.
        </Text>
        <div className="mx-auto mt-10 max-w-xs">
          <Button onClick={() => navigate("/contact")}>Contact Us</Button>
        </div>
      </section>

      {activeImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[130] bg-[rgba(18,15,13,0.92)] backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-[131] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-2xl text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/45 sm:right-6 sm:top-6"
              aria-label="Close image"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            >
              ×
            </button>
            <div
              className="flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
