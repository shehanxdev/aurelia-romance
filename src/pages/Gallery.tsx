import { useEffect, useMemo, useState } from "react";

import { GalleryImage, Text } from "@components";

import IMG1 from "../assets/images/C123324.jpg";
import IMG2 from "../assets/images/c234234.jpg";
import IMG3 from "../assets/images/c435435.jpg";
import IMG4 from "../assets/images/cc7654645.jpg";
import IMG20 from "../assets/images/w321.jpg";
import IMG19 from "../assets/images/w3245.jpg";
import IMG18 from "../assets/images/w325645.jpg";
import IMG17 from "../assets/images/w43242.jpg";
import IMG16 from "../assets/images/w43424.jpg";
import IMG15 from "../assets/images/w457567.jpg";
import IMG14 from "../assets/images/w52342.jpg";
import IMG13 from "../assets/images/w643535.jpg";
import IMG12 from "../assets/images/w64356345.jpg";
import IMG10 from "../assets/images/w64563465.jpg";
import IMG9 from "../assets/images/w6e455634.jpg";
import IMG8 from "../assets/images/w7654654.jpg";
import IMG7 from "../assets/images/w7657y5.jpg";
import IMG6 from "../assets/images/w86556.jpg";
import IMG5 from "../assets/images/w9832.jpg";
import { ImageType } from "../data/image";

export const imageData: ImageType[] = [
  {
    type: "wedding",
    albumId: "w1",
    urlList: [IMG1, IMG2, IMG3, IMG4, IMG4],
  },
  {
    type: "wedding",
    albumId: "w12",
    urlList: [IMG5, IMG6, IMG7, IMG8, IMG3, IMG4, IMG4],
  },
  {
    type: "wedding",
    albumId: "w123",
    urlList: [IMG9, IMG10, IMG13, IMG12, IMG14, IMG15, IMG16, IMG17, IMG18],
  },
  {
    type: "wedding",
    albumId: "w124",
    urlList: [IMG15, IMG16, IMG17, IMG18, IMG5, IMG6, IMG7, IMG8],
  },
  {
    type: "wedding",
    albumId: "w125",
    urlList: [IMG19, IMG20, IMG9, IMG10, IMG13, IMG12],
  },
];

type GalleryImageItem = {
  url: string;
  albumId: string;
  albumType: string;
};

function chunkArray<T>(arr: T[], columns: number): T[][] {
  const chunked: T[][] = Array.from({ length: columns }, () => []);
  arr.forEach((item, index) => {
    chunked[index % columns].push(item);
  });
  return chunked;
}

export function Gallery() {
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(window.innerWidth < 768 ? 2 : 3);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const allImages = useMemo<GalleryImageItem[]>(
    () =>
      imageData.flatMap((item) =>
        item.urlList.map((url) => ({
          url,
          albumId: item.albumId,
          albumType: item.type,
        }))
      ),
    []
  );

  const columns = useMemo(
    () => chunkArray(allImages, columnCount),
    [allImages, columnCount]
  );

  return (
    <div className="luxury-shell px-[5%] py-12 md:py-20">
      <section className="luxury-panel rounded-[2rem] px-6 py-8 md:px-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Text variant="label1" className="luxury-kicker mb-6">
              Curated Gallery
            </Text>
            <Text variant="headingxl" className="leading-[0.85]">
              An
              <br />
              <span className="text-primary">editorial</span> archive
            </Text>
          </div>

          <div className="space-y-6">
            <Text variant="body" className="max-w-[19ch] font-light">
              The home page already sells atmosphere. The gallery should do the
              same by feeling framed, collected, and intentionally paced instead
              of just dropping images into a plain grid.
            </Text>
            <div className="grid grid-cols-2 gap-4 border-t luxury-border pt-5">
              <div>
                <Text variant="label1" className="luxury-kicker mb-2">
                  Focus
                </Text>
                <Text variant="body" className="font-light">
                  Weddings & romance
                </Text>
              </div>
              <div>
                <Text variant="label1" className="luxury-kicker mb-2">
                  Mood
                </Text>
                <Text variant="body" className="font-light">
                  Soft, cinematic, heirloom
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-panel mt-10 rounded-[2rem] p-3 md:p-5">
        <div className="grid h-[100dvh] grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {columns.map((columnImages, colIndex) => (
            <div
              key={colIndex}
              className="h-full space-y-2 overflow-y-auto rounded-[1.5rem] bg-white/35 p-2 md:space-y-3 md:p-3"
            >
              {columnImages.map((galleryImageItem, imgIndex) => (
                <GalleryImage
                  key={`${galleryImageItem.albumId}-${imgIndex}-${galleryImageItem.url}`}
                  url={galleryImageItem.url}
                  alt={`${galleryImageItem.albumType} ${imgIndex + 1}`}
                  albumId={galleryImageItem.albumId}
                  albumType={galleryImageItem.albumType}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
