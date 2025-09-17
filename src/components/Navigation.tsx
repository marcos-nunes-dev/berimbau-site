'use client'

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FullscreenMenu from './FullscreenMenu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    <div className="relative flex justify-between items-start p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Left Navigation */}
      <div className="text-white uppercase text-xs sm:text-sm font-sans tracking-wide flex-1 max-w-[120px] sm:max-w-none">
        <div className="mb-1 md:mb-2 text-xs sm:text-sm leading-tight">
          <motion.a
            href="/reservation"
            className="hover:text-amber-300 transition-colors duration-300 ease-in-out"
            whileHover={{ 
              scale: 1.05, 
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            RESERVATION
          </motion.a>
          <span className="mx-2">|</span>
          <motion.a
            href="/private-events"
            className="hover:text-amber-300 transition-colors duration-300 ease-in-out"
            whileHover={{ 
              scale: 1.05, 
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            PRIVATE EVENTS & CATERING
          </motion.a>
        </div>
        <div className="mb-1">
          <motion.a
            href="/midtown"
            className="underline text-sm sm:text-base hover:text-amber-300 hover:no-underline transition-all duration-300 ease-in-out"
            whileHover={{ 
              scale: 1.08, 
              y: -3,
              rotateX: 5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            MIDTOWN
          </motion.a>
        </div>
        <div>
          <motion.a
            href="/west-village"
            className="text-sm sm:text-base hover:text-amber-300 hover:underline transition-all duration-300 ease-in-out"
            whileHover={{ 
              scale: 1.08, 
              y: -3,
              rotateX: 5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            WEST VILLAGE
          </motion.a>
        </div>
      </div>

      {/* Center Logo - Absolutely positioned for perfect centering */}
      <div className="absolute left-1/2 top-4 md:top-6 lg:top-8 transform -translate-x-1/2 text-center text-white hidden lg:block">
        <Image
          src="/img/main-logo-white.png"
          alt="Berimbau logo"
          width={280}
          height={74}
          className="w-70"
          priority
        />
      </div>

      {/* Right Navigation */}
      <div className="text-white uppercase text-xs sm:text-sm font-sans tracking-wide flex items-center gap-1 sm:gap-2 md:gap-4 flex-1 justify-end max-w-[80px] sm:max-w-none">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-1 sm:gap-4 hover:text-amber-300 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Image
            src="/img/birdie-icon.png"
            alt="Menu icon"
            width={40}
            height={40}
            className="w-4 h-4 animate-pulse"
            style={{
              animation: "birdieMove 3s ease-in-out infinite",
            }}
            priority
          />
          <span className="text-xs sm:text-sm">MENU</span>
          <Image
            src="/img/birdie-icon.png"
            alt="Menu icon"
            width={40}
            height={40}
            className="w-4 h-4 rotate-180"
            style={{
              animation: "birdieMove 3s ease-in-out infinite reverse",
            }}
            priority
          />
        </button>
      </div>
    </div>
    </>
  );
}
