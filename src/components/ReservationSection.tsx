'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReservationSection() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-6xl items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Reservation Button */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.button 
            className="w-full lg:w-auto border-2 border-white text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 uppercase font-sans tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            RESERVATIONS WEST VILLAGE
          </motion.button>
        </motion.div>

        {/* Center BR/NY Logo */}
        <motion.div 
          className="flex items-center justify-center order-first lg:order-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/img/logo-white.png"
            alt="BR/NY Logo"
            width={200}
            height={200}
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
            priority
          />
        </motion.div>

        {/* Right Reservation Button */}
        <motion.div 
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.button 
            className="w-full lg:w-auto border-2 border-white text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 uppercase font-sans tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            RESERVATIONS MIDTOWN
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
