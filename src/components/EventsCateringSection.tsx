'use client'

import Image from "next/image";

export default function EventsCateringSection() {
  return (
    <section className="h-auto lg:h-screen w-full bg-[#F7A800] overflow-hidden">
      <div className="h-auto lg:h-full flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-0">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-[#225533] uppercase tracking-wider text-center mb-8 sm:mb-12 md:mb-16">
          LET US HOST YOUR<br/>NEXT EVENT, OR CATERING
        </h2>

        {/* Three Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 w-full max-w-7xl">
          {/* Left Column - Events */}
          <div className="flex-1 lg:flex-[2] text-center lg:pt-0">
            <p className="text-[#225533] mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              Plan your private event in our intimate venues, where Brazilian warmth meets New York City elegance. Indulge in authentic flavors and crafted cocktails for any celebration. Let our attentive team ensure a seamless, memorable experience for you and your guests.
            </p>
            <button className="border-2 border-[#225533] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#225533] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide hover:bg-[#225533] hover:text-[#F7A800] transition-all duration-300">
              EVENTS INQUIRIES
            </button>
          </div>

          {/* Middle Column - Logo */}
          <div className="flex-1 flex justify-center items-center hidden lg:flex">
            <Image
              src="/img/logo-green-big.png"
              alt="BR/NY Logo"
              width={200}
              height={200}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
              priority
            />
          </div>

          {/* Right Column - Catering */}
          <div className="flex-1 lg:flex-[2] text-center lg:pt-0">
            <p className="text-[#225533] mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              Our catering menu is a celebration of Brazil&apos;s rich culinary traditions, from classic dishes like Feijoada and Moqueca to innovative Brazilian-inspired creations, our menu is customizable to fit your event&apos;s theme and dietary preferences.
            </p>
            <button className="border-2 border-[#225533] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#225533] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide hover:bg-[#225533] hover:text-[#F7A800] transition-all duration-300">
              CATERING INQUIRIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
