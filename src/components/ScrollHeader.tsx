'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FullscreenMenu from './FullscreenMenu';

interface ScrollHeaderProps {
  isVisible: boolean;
  useBorder?: boolean;
}

export default function ScrollHeader({ isVisible, useBorder = false }: ScrollHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <>
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#faf0d2] transition-all duration-300 ease-in-out ${useBorder ? 'border-b-2 border-[#004100]' : 'shadow-md'}`}>
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/img/logo-head.png"
              alt="Berimbau logo"
              width={620}
              height={620}
              className="w-42 object-contain hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Right Menu Button */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Image
              src="/img/birdie-green-icon.png"
              alt="Menu icon"
              width={50}
              height={50}
              className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse"
              style={{
                animation: "birdieMove 3s ease-in-out infinite",
              }}
              priority
            />
            <span className="text-[#004100] text-sm sm:text-base font-[family-name:var(--font-gt-america)] uppercase tracking-wide font-medium">MENU</span>
            <Image
              src="/img/birdie-green-icon.png"
              alt="Menu icon"
              width={50}
              height={50}
              className="w-4 h-4 sm:w-5 sm:h-5 rotate-180"
              style={{
                animation: "birdieMove 3s ease-in-out infinite reverse",
              }}
              priority
            />
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
