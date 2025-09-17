'use client'

import Image from "next/image";

export default function CoralEventsCateringSection() {
  return (
    <section className="h-[70vh] w-full bg-[#ff9b87] overflow-hidden relative">
      <div className="h-full flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20">
        

        {/* Three Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full max-w-7xl">
          {/* Left Column - Events */}
          <div className="flex-[2] text-center pt-8 sm:pt-12 md:pt-16">
           
          </div>

          {/* Middle Column - Logo */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/img/logo-white.png"
              alt="BR/NY Logo"
              width={200}
              height={200}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
              priority
            />
          </div>

          {/* Right Column - Catering */}
          <div className="flex-[2] text-center pt-8 sm:pt-12 md:pt-16">
            <p className="text-[#225533] mt-20 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              Our catering menu is a celebration of Brazil&apos;s rich culinary traditions, from classic dishes like Feijoada and Moqueca to innovative Brazilian-inspired creations, our menu is customizable to fit your event&apos;s theme and dietary preferences.
            </p>
            <button className="border-2 border-[#225533] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#225533] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide hover:bg-[#225533] hover:text-[#ff9b87] transition-all duration-300">
              CATERING INQUIRIES
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/img/leaf2.png"
        alt="Birdie Icon"
        width={500}
        height={500}
        className="absolute w-[20vw] bottom-0 right-0 z-10 "
      />
      <Image
        src="/img/folha08.png"
        alt="Birdie Icon"
        width={500}
        height={500}
        className="absolute w-[35vw] bottom-0 left-0 z-10 "
      />
    </section>
  );
}
