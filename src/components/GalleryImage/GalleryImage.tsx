import { useEffect, useState } from "react";

import { Button } from "../Button";

export function GalleryImage({
  url,
  alt,
  albumId,
  albumType,
}: {
  url: string;
  alt: string;
  albumId: string;
  albumType: string;
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const modalId = `${albumId}-${albumType}-${url}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOpenModalEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>;
      const id = customEvent.detail?.id;

      if (!id) return;
      if (id !== modalId) {
        setShowImageModal(false);
      }
    };

    window.addEventListener("openGalleryImageModal", handleOpenModalEvent);

    return () => {
      window.removeEventListener("openGalleryImageModal", handleOpenModalEvent);
    };
  }, [modalId]);

  const handleViewImage = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("openGalleryImageModal", {
          detail: { id: modalId },
        }),
      );
    }

    setShowImageModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  return (
    <>
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
          ${
            showOverlay
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none lg:pointer-events-auto"
          } 
          group-hover:opacity-100
        `}
        >
          <Button
            textClassName="text-white"
            className="outline-white px-4 h-[2.1em] sm:h-[3.3em] md:h-[4em]"
            variant={"outlined"}
            onClick={(e) => {
              e.stopPropagation();
              handleViewImage();
            }}
          >
            View Image
          </Button>
          <Button
            textClassName="text-white"
            className="outline-white px-4 h-[2.1em] sm:h-[3.3em] md:h-[4em]"
            variant={"outlined"}
            onClick={(e) => {
              e.stopPropagation();
              // placeholder for future "View Album" behaviour
            }}
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

      {showImageModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-3 sm:px-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-5xl w-full sm:w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-4 -right-4 z-[61] h-10 w-10 sm:h-8 sm:w-8 rounded-full bg-white text-black flex items-center justify-center shadow-md text-xl sm:text-base"
              aria-label="Close image"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <div className="max-h-[90vh] overflow-hidden rounded-xl">
              <img
                src={url}
                alt={alt}
                className="w-full h-full max-h-[90vh] object-contain bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
