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
    albumId: "w124",
    urlList: [IMG19, IMG20, IMG9, IMG10, IMG13, IMG12],
  },
];

// Helper to chunk array into N columns
function chunkArray<T>(arr: T[], columns: number): T[][] {
  const chunked: T[][] = Array.from({ length: columns }, () => []);
  arr.forEach((item, index) => {
    chunked[index % columns].push(item);
  });
  return chunked;
}

export function Gallery() {
  const [columnCount, setColumnCount] = useState(3);

  // Update column count on resize
  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(window.innerWidth < 768 ? 2 : 3); // md = 768px
    };
    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  // Get all images into a flat array
  const allImages = useMemo(() => {
    return imageData.flatMap((item) => item.urlList);
  }, []);

  // Distribute images across columns
  const columns = useMemo(
    () => chunkArray(allImages, columnCount),
    [allImages, columnCount]
  );

  return (
    <div>
      <Text
        className="text-center leading-none w-[90%] m-auto pt-9"
        variant="headingxl"
      >
        <span className="text-primary ">Aurelia </span>Gallery
      </Text>
      <div className=" h-[100dvh] mt-[40px] lg:mt-[100px] grid grid-cols-2 md:grid-cols-3 ">
        {columns.map((columnImages, colIndex) => (
          <div
            key={colIndex}
            className="overflow-y-auto h-full px-1 space-y-2 "
          >
            {columnImages.map((url, imgIndex) => (
              <GalleryImage url={url} alt={`${imgIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
