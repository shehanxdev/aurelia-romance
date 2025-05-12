import { useScrollSections } from "./../hooks/useScrollSections";

export function Layout() {
  useScrollSections(3);
  return (
    <div className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl bg-blue-500 z-[1]">
        Section 1
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl bg-red-500 z-[2]">
        Section 2
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl bg-green-500 z-[3]">
        Section 3
      </div>
    </div>
  );
}
