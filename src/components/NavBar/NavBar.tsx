import { useEffect, useRef, useState } from 'react';

import { List, X } from '@phosphor-icons/react';

import logoUrl from '../../assets/gold V2.png';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) setHasOpened(true);
  }, [isOpen]);
  return (
    <header className="w-full px-4 py-4 md:py-9 absolute z-50 font-serif text-white">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between   ">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 backdrop-blur-3xl bg-white/30 text-black px-4 py-2 rounded-lg shadow-md">
          <img
            src={logoUrl}
            alt="Logo"
            className="h-8 md:h-10 w-auto cursor-pointer"
          />
        </div>
        <div className="absolute top-4 right-4 md:top-10 md:right-10 backdrop-blur-sm bg-white/60 rounded-lg shadow-md flex items-center justify-center w-10 h-10">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700"
            aria-label="Open menu"
          >
            <List className="cursor-pointer text-2xl md:text-3xl text-primary-dark" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center transition-opacity backdrop-blur-sm duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 portal-zoom-in"
            : hasOpened
            ? "opacity-0 pointer-events-none portal-zoom-out"
            : "opacity-0 pointer-events-none"
        } bg-black/60`}
      >
        {/* Side Drawer */}
        <div
          ref={drawerRef}
          className="w-[100dvw] h-[100dvh] bg-white/10 backdrop-blur-2xl border-r border-white/20 shadow-2xl p-6 z-50"
        >
          <div className="flex justify-end mb-8">
            <Button
              variant={"iconButton"}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X
                className="cursor-pointer text-white hover:text-gold transition"
                size={24}
              />
            </Button>
          </div>

          <nav className="flex flex-col gap-6">
            {["Home", "Gallery", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                variant="large"
                decoration="noUnderline"
                textColor="secondary"
                className="text-lg text-white hover:text-gold transition-colors border-b border-white/10 pb-2"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
