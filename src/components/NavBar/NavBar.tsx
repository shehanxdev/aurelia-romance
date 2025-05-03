import { List, X } from "@phosphor-icons/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "@components";
import logoUrl from "../../assets/gold V2.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const renderLogo = () => (
    <img
      src={logoUrl}
      alt="Logo"
      className="h-8 md:h-14 w-auto cursor-pointer"
    />
  );

  return (
    <header className="w-full bg-white px-4 py-4 md:py-9 sticky top-0 z-50">
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between md:hidden">
        {renderLogo()}
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700"
          aria-label="Open menu"
        >
          <List className="cursor-pointer" size={28} />
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center">
        <nav className="flex w-full justify-center items-center gap-x-14">
          <Link variant="large" decoration="noUnderline" textColor="secondary">
            Home
          </Link>
          <Link variant="large" decoration="noUnderline" textColor="secondary">
            About
          </Link>
          {renderLogo()}
          <Link variant="large" decoration="noUnderline" textColor="secondary">
            Services
          </Link>
          <Link variant="large" decoration="noUnderline" textColor="secondary">
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay + Drawer (always mounted for animation) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={drawerRef}
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="cursor-pointer" size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              variant="large"
              decoration="noUnderline"
              textColor="secondary"
            >
              Home
            </Link>
            <Link
              variant="large"
              decoration="noUnderline"
              textColor="secondary"
            >
              About
            </Link>
            <Link
              variant="large"
              decoration="noUnderline"
              textColor="secondary"
            >
              Services
            </Link>
            <Link
              variant="large"
              decoration="noUnderline"
              textColor="secondary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
