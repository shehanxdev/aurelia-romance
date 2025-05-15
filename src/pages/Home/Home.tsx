import { HeroSection } from "./HeroSection";

export function Home() {
  return (
    <div className="relative">
      <HeroSection className="h-[85vh] sticky top-0 z-[1] min-w-full overflow-hidden" />
      <div className="layer h-screen bg-blue-200 sticky top-0 z-[2]">
        Layer 1
      </div>
      <div className="layer h-screen bg-green-200 sticky top-0 z-[2]">
        Layer 2
      </div>
      <div className="layer h-screen bg-red-200 sticky top-0 z-[3]">
        Layer 3
      </div>
      <div className="layer h-screen bg-yellow-200 sticky top-0 z-[4]">
        Layer 4
      </div>
    </div>
  );
}
