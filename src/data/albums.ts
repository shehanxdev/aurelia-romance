import IMG1 from "../assets/images/C123324.jpg";
import IMG2 from "../assets/images/c234234.jpg";
import IMG3 from "../assets/images/c435435.jpg";
import IMG4 from "../assets/images/cc7654645.jpg";
import HERO1 from "../assets/images/engagementImage.avif";
import HERO2 from "../assets/images/preshootImage.avif";
import HERO3 from "../assets/images/weddingImage.avif";
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

export type Album = {
  id: string;
  type: string;
  title: string;
  couple: string;
  details: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
};

export const albums: Album[] = [
  {
    id: "w1",
    type: "wedding",
    title: "Golden Meadow Vows",
    couple: "Miyuri & Hirindu",
    details: "An open-air wedding celebration framed by evening light and soft countryside textures.",
    description:
      "This album follows a day that moved gently from anticipation to celebration. The photographs are built around warmth, movement, and the quiet tenderness that sat underneath the larger moments.",
    heroImage: HERO3,
    galleryImages: [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7],
  },
  {
    id: "w12",
    type: "wedding",
    title: "Afterlight Promises",
    couple: "Ameesha & Kavin",
    details: "A romantic wedding story with layered florals, dark interiors, and champagne-toned styling.",
    description:
      "The mood of this celebration was intimate and cinematic, with a balance of editorial portraits and lived-in documentary details. Each frame was chosen to preserve atmosphere as much as memory.",
    heroImage: HERO1,
    galleryImages: [IMG8, IMG9, IMG10, IMG13, IMG14, IMG15, IMG16, IMG17],
  },
  {
    id: "w123",
    type: "wedding",
    title: "A Quiet Ceremony",
    couple: "Nethmi & Dilan",
    details: "A refined ceremony shaped by soft tailoring, candlelit interiors, and emotional family moments.",
    description:
      "There is a calm elegance running through this album. The pacing is slower, the gestures feel close, and the final collection leans into intimacy, texture, and timeless portraiture.",
    heroImage: HERO2,
    galleryImages: [IMG18, IMG19, IMG20, IMG9, IMG10, IMG12, IMG13, IMG1],
  },
  {
    id: "w124",
    type: "wedding",
    title: "The Celebration Edit",
    couple: "Ayesha & Samudra",
    details: "A spirited wedding gallery blending portrait drama with lively celebration frames.",
    description:
      "This album is designed to feel expansive and full of movement. The imagery moves between still elegance and expressive celebration, keeping the whole story polished yet alive.",
    heroImage: HERO3,
    galleryImages: [IMG14, IMG15, IMG16, IMG17, IMG18, IMG5, IMG6, IMG7, IMG8],
  },
  {
    id: "w125",
    type: "wedding",
    title: "Heirloom Afternoon",
    couple: "Yenuli & Raveen",
    details: "A sunlit day of vows and portraits held with softness, ease, and understated luxury.",
    description:
      "The frames in this album are airy, tactile, and quietly celebratory. They focus on gesture, landscape, and the emotional rhythm between the couple and the world around them.",
    heroImage: HERO1,
    galleryImages: [IMG19, IMG20, IMG9, IMG10, IMG13, IMG12, IMG1, IMG2],
  },
];

export function getAlbumById(albumId: string) {
  return albums.find((album) => album.id === albumId);
}
