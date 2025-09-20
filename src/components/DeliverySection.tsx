'use client'

import Image from "next/image";

export default function DeliverySection() {
  return (
    <section className="min-h-[60vh] h-auto lg:h-screen w-full overflow-hidden relative">
      {/* Mobile/Tablet Layout - Stacked */}
      <div className="flex flex-col lg:hidden">
        {/* Image Section */}
        <div className="h-[40vh] bg-[#faaa00] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="relative w-full h-full max-w-md rounded-lg">
            <Image
              src="/img/pastel.jpg"
              alt="Brazilian Food"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Birdie Icons - Hidden on mobile/tablet */}
            <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              />
            </div>
            
            <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rotate-180"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-[#004100] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          <div className="text-center max-w-lg">
            {/* Main Heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-[family-name:var(--font-gt-america)] text-[#faaa00] uppercase tracking-wider leading-tight mb-4 sm:mb-6">
              GET BERIMBAU DELIVERED TO YOUR DOORSTEP
            </h2>
            
            {/* Description */}
            <p className="text-[#faaa00] text-xs sm:text-sm md:text-base font-normal font-[family-name:var(--font-gt-america)] leading-relaxed mb-6 sm:mb-8">
              Craving our food, but fancy a night in? Berimbau Brazilian Kitchen has you covered. Order your favorite dishes online and enjoy the vibrant tastes of Brazil from the comfort of your home. Quick, convenient, and irresistibly delicious - it&apos;s dining out, in.
            </p>
            
            {/* Call to Action */}
            <h3 className="text-sm sm:text-base md:text-lg font-medium font-[family-name:var(--font-gt-america)] text-[#faaa00] uppercase tracking-wide mb-4 sm:mb-6">
              ORDER YOUR DELIVERY
            </h3>
            
            {/* Location Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <button className="border-2 border-[#faaa00] px-6 sm:px-8 py-3 text-[#faaa00] text-sm sm:text-base font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
                MIDTOWN
              </button>
              <button className="border-2 border-[#faaa00] px-6 sm:px-8 py-3 text-[#faaa00] text-sm sm:text-base font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
                WEST VILLAGE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex h-screen">
        {/* Left Column - Orange Background with Image */}
        <div className="w-1/2 h-full bg-[#faaa00] flex items-center justify-center">
          {/* Image Container with Padding */}
          <div className="relative w-full h-full p-8 lg:p-16 xl:p-20">
            {/* Main Food Image */}
            <div className="relative w-full h-full rounded-lg">
              <Image
                src="/img/pastel.jpg"
                alt="Brazilian Food"
                fill
                className="object-cover"
                priority
              />
              {/* Top Birdie Icon - positioned relative to image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%]">
                <Image
                  src="/img/birdie-green-icon.png"
                  alt="Decorative icon"
                  width={150}
                  height={150}
                  className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                />
              </div>
              
              {/* Bottom Birdie Icon - positioned relative to image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]">
                <Image
                  src="/img/birdie-green-icon.png"
                  alt="Decorative icon"
                  width={150}
                  height={150}
                  className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rotate-180"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Dark Green Background with Text */}
        <div className="w-1/2 h-full bg-[#004100] flex flex-col justify-center items-center px-8 lg:px-16 xl:px-20">
          <div className="text-center max-w-lg">
            {/* Main Heading */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium font-[family-name:var(--font-gt-america)] text-[#faaa00] uppercase tracking-wider leading-tight mb-6 lg:mb-8">
              GET BERIMBAU DELIVERED TO YOUR DOORSTEP
            </h2>
            
            {/* Description */}
            <p className="text-[#faaa00] text-sm lg:text-base xl:text-lg font-normal font-[family-name:var(--font-gt-america)] leading-relaxed mb-8 lg:mb-10">
              Craving our food, but fancy a night in? Berimbau Brazilian Kitchen has you covered. Order your favorite dishes online and enjoy the vibrant tastes of Brazil from the comfort of your home. Quick, convenient, and irresistibly delicious - it&apos;s dining out, in.
            </p>
            
            {/* Call to Action */}
            <h3 className="text-base lg:text-lg xl:text-xl font-medium font-[family-name:var(--font-gt-america)] text-[#faaa00] uppercase tracking-wide mb-6 lg:mb-8">
              ORDER YOUR DELIVERY
            </h3>
            
            {/* Location Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center">
              <button className="border-2 border-[#faaa00] px-8 lg:px-12 xl:px-16 py-3 lg:py-4 text-[#faaa00] text-sm lg:text-base xl:text-lg font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
                MIDTOWN
              </button>
              <button className="border-2 border-[#faaa00] px-8 lg:px-12 xl:px-16 py-3 lg:py-4 text-[#faaa00] text-sm lg:text-base xl:text-lg font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wide hover:bg-[#faaa00] hover:text-[#004100] transition-all duration-300">
                WEST VILLAGE
              </button>
            </div>
          </div>
        </div>

        {/* Center Logo - Desktop Only */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/img/logo-white.png"
            alt="BR/NY Logo"
            width={350}
            height={350}
            className="w-32 lg:w-40 xl:w-48 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
