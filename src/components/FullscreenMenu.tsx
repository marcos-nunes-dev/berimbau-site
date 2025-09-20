'use client'

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#004100] flex flex-col justify-between items-center text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Top Section */}
          <div className="flex flex-col items-center">
            {/* Close Button */}
            <motion.button
              className="absolute top-8 right-8 text-[#faab00] text-xl font-normal font-[family-name:var(--font-gt-america)] uppercase tracking-wider hover:font-bold transition-all duration-300 ease-in-out cursor-pointer"
              onClick={onClose}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              [×] CLOSE
            </motion.button>

            {/* BERIMBAU Logo */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Image
                src="/img/logo-head-yellow.png"
                alt="Berimbau Logo"
                width={400}
                height={150}
                className="w-48 h-18 sm:w-56 sm:h-21 md:w-64 md:h-24 lg:w-72 lg:h-27 xl:w-80 xl:h-30 object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Center Section - Navigation + Reservations */}
          <div className="flex flex-col items-center">
            {/* Navigation Menu */}
            <motion.nav
              className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
            <motion.a
              href="/"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              HOME
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>
            
            <motion.a
              href="#locations"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              LOCATIONS & MENUS
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#private-events"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              PRIVATE EVENTS & CATERING
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#second-floor"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              SECOND FLOOR
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#delivery"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              DELIVERY
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              CONTACT US
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#careers"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              JOIN OUR TEAM
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>

            <motion.a
              href="#giftcard"
              className="text-[#faab00] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide hover:underline transition-all duration-300 ease-in-out flex items-center gap-2 group"
              style={{ textUnderlineOffset: '8px' }}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              GIFTCARD
              <Image
                src="/img/birdie-yellow-icon.png"
                alt="Birdie icon"
                width={20}
                height={20}
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-180"
              />
            </motion.a>
            </motion.nav>

            {/* Reservation Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="/reservations/west-village"
                className="border-2 border-[#faab00] text-[#faab00] px-8 py-3 text-lg font-normal font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faab00] hover:text-[#004100] transition-all duration-300"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'click_reservation',
                      location: 'west_village'
                    });
                  }
                  onClose();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RESERVATIONS WEST VILLAGE
              </motion.a>
              
              <motion.a
                href="/reservations/midtown"
                className="border-2 border-[#faab00] text-[#faab00] px-8 py-3 text-lg font-normal font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faab00] hover:text-[#004100] transition-all duration-300"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'click_reservation',
                      location: 'midtown'
                    });
                  }
                  onClose();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RESERVATIONS MIDTOWN
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Section - Location Information */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* Location Information and Logo - All on same line */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              {/* West Village */}
              <div className="text-center">
                <h3 className="text-[#faab00] text-lg sm:text-xl font-bold uppercase tracking-wide mb-1">
                  WEST VILLAGE
                </h3>
                <p className="text-[#faab00] text-xs sm:text-sm">
                  43 Carmine St, New York, NY 10014
                </p>
              </div>

              {/* Logo in center */}
              <div className="flex justify-center">
                <Image
                  src="/img/logo-yellow.png"
                  alt="BR/NY Logo"
                  width={300}
                  height={300}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain opacity-80"
                />
              </div>

              {/* Midtown */}
              <div className="text-center">
                <h3 className="text-[#faab00] text-lg sm:text-xl font-bold uppercase tracking-wide mb-1">
                  MIDTOWN
                </h3>
                <p className="text-[#faab00] text-xs sm:text-sm">
                  3 West 36th Street, New York, NY 10018
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
