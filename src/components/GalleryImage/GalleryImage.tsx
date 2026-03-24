type GalleryImageProps = {
  url: string;
  alt: string;
  albumId: string;
  albumType: string;
  onOpen: (payload: {
    url: string;
    alt: string;
    albumId: string;
    albumType: string;
  }) => void;
};

export function GalleryImage({
  url,
  alt,
  albumId,
  albumType,
  onOpen,
}: GalleryImageProps) {
  const handleOpen = () => {
    onOpen({ url, alt, albumId, albumType });
  };

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-[1.25rem] transition-transform duration-500 ease-in-out hover:scale-[0.98]"
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      <img
        src={url}
        alt={alt}
        className="luxury-image w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,21,16,0.03),rgba(28,21,16,0.25))] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </div>
  );
}
