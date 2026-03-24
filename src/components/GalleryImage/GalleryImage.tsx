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
        className="group relative overflow-hidden rounded-[1.25rem] transition-transform duration-500 ease-in-out hover:scale-[0.98]"
        onClick={() => setShowOverlay((prev) => !prev)}
      >
        <div
          className={`
            absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(180deg,rgba(28,21,16,0.08),rgba(28,21,16,0.75))] px-4
          transition-opacity duration-300 ease-in-out
          ${
            showOverlay
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none lg:pointer-events-auto"
          } 
          group-hover:opacity-100
        `}
        >
          <div className="absolute inset-x-4 top-4 border-t border-white/40" />
          <Button
            textClassName="text-white"
            className="h-[2.4em] border border-white/60 bg-transparent px-4 text-white sm:h-[3.3em] md:h-[4em]"
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
            className="h-[2.4em] border border-white/60 bg-transparent px-4 text-white sm:h-[3.3em] md:h-[4em]"
            variant={"outlined"}
            onClick={(e) => {
              e.stopPropagation();
              // placeholder for future "View Album" behaviour
            }}
          >
            View Album
          </Button>
          <div className="absolute inset-x-4 bottom-4 border-t border-white/25" />
        </div>

        <img
          src={url}
          alt={alt}
          className="luxury-image w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
