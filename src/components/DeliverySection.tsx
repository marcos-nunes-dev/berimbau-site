'use client'

import Image from "next/image";

export default function DeliverySection() {
  return (
    <section className="h-screen w-full overflow-hidden relative">
      {/* Left Column - Orange Background with Image */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#faaa00] flex items-center justify-center">
        {/* Image Container with Padding */}
        <div className="relative w-full h-full p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Main Food Image */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/img/pastel.jpg"
              alt="Brazilian Food"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Top Birdie Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%]">
            <Image
              src="/img/birdie-icon.png"
              alt="Decorative icon"
              width={150}
              height={150}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
          
          {/* Bottom Birdie Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[50%]">
            <Image
              src="/img/birdie-icon.png"
              alt="Decorative icon"
              width={150}
              height={150}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rotate-180"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Dark Green Background with Text */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#004100] flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="text-center max-w-lg">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-[#faaa00] uppercase tracking-wider leading-tight mb-6 sm:mb-8">
            GET BERIMBAU DELIVERED TO YOUR DOORSTEP
          </h2>
          
          {/* Description */}
          <p className="text-[#faaa00] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10">
            Craving our food, but fancy a night in? Berimbau Brazilian Kitchen has you covered. Order your favorite dishes online and enjoy the vibrant tastes of Brazil from the comfort of your home. Quick, convenient, and irresistibly delicious - it&apos;s dining out, in.
          </p>
          
          {/* Call to Action */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading text-[#faaa00] uppercase tracking-wide mb-6 sm:mb-8">
            ORDER YOUR DELIVERY
          </h3>
          
          {/* Location Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="border-2 border-[#faaa00] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#faaa00] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
              MIDTOWN
            </button>
            <button className="border-2 border-[#faaa00] px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#faaa00] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
              WEST VILLAGE
            </button>
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image
          src="/img/logo-white.png"
          alt="BR/NY Logo"
          width={200}
          height={200}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
          priority
        />
      </div>
    </section>
  );
}
