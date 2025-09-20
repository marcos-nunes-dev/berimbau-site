'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 relative">
      {/* About The Brazilian Table Box - Centered in middle of column */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] text-[#004100] w-full max-w-3/4 text-center space-y-4 sm:space-y-5 md:space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal uppercase tracking-wide leading-tight whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          ABOUT{"\n"}THE BRAZILIAN{"\n"}TABLE
        </motion.h3>
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-gt-america)] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The Brazilian Table is more than a place to eat, it&apos;s a cultural space we share. It&apos;s where stories unfold, bonds grow stronger, and time slows down. Around the table, flavors become feelings, moments become memories, and every dish invites you to stay a little longer.
        </motion.p>
        <motion.button 
          className="border-2 border-[#004100] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#004100] hover:text-[#faab00] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          LOCATIONS & MENUS
        </motion.button>
      </motion.div>
      <div className="h-full">
        <Image
          src="/img/f4.png"
          alt="Image 1"
          width={1000}
          height={1000}
          className="w-full max-w-[35vh] sm:max-w-[40vh] md:max-w-[42vh] lg:max-w-[38vh] xl:max-w-[45vh] absolute top-0 right-0 pointer-events-none"
        />
        <Image
          src="/img/f1.png"
          alt="Image 3"
          width={1000}
          height={1000}
          className="w-full max-w-[45vh] sm:max-w-[50vh] md:max-w-[52vh] lg:max-w-[55vh] absolute bottom-[-10vh] right-0 pointer-events-none"
        />
      </div>
    </div>
  );
}
