import { useState } from "react";

import { Button } from "../Button";

export function GalleryImage({ url, alt, albumId, albumType }: { url: string; alt: string; albumId: string; albumType: string }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className="relative group transition-transform duration-300 ease-in-out hover:scale-90"
      onClick={() => setShowOverlay((prev) => !prev)}
    >
      {/* Overlay */}
      <div
        className={`
            flex flex-col gap-4 lg:gap-8 justify-center items-center
          absolute top-0 left-0 w-full h-full bg-black/80 rounded-xl 
          transition-opacity duration-300 ease-in-out
          ${showOverlay ? "opacity-100" : "opacity-0"} 
          group-hover:opacity-100
        `}
      >
        <Button
          textClassName="text-white"
          className="outline-white px-4 h-[2.1em] sm:h-[3.3em] md:h-[4em]"
          variant={"outlined"}
        >
          View Image
        </Button>
        <Button
          textClassName="text-white"
          className="outline-white px-4 h-[2.1em] sm:h-[3.3em] md:h-[4em]"
          variant={"outlined"}
        >
          View Album
        </Button>
      </div>

      <img
        src={url}
        alt={alt}
        className="w-full rounded-xl shadow-md object-cover"
      />
    </div>
  );
}
