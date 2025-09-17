'use client'

import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="relative h-screen w-full bg-[#faf0d2] overflow-hidden">
      {/* Center Logo - Positioned in the center of the entire page */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image
          src="/img/logo-white.png"
          alt="BR/NY Logo"
          width={200}
          height={200}
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
          priority
        />
      </div>

      <div className="h-full flex">
        {/* Left Column - Image */}
        <div className="w-1/2 flex items-center justify-center px-0 pl-16 py-16">
          <div className="relative w-full h-full max-h-[80vh]">
            <Image
              src="/img/couple_hero.jpg" // Using existing image as placeholder - you can replace with the actual bartender image
              alt="West Village Location"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Decorative elements overlay - positioned like in the reference */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <Image
                src="/img/birdie-icon.png"
                alt="Decorative icon"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Image
                src="/img/birdie-icon.png"
                alt="Decorative icon"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="max-w-md text-center space-y-6">
            {/* Title with decorative icons */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/img/birdie-icon.png"
                alt="Decorative icon"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#004100] uppercase tracking-wider">
                WEST VILLAGE
              </h2>
              <Image
                src="/img/birdie-icon.png"
                alt="Decorative icon"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12 rotate-180"
              />
            </div>

            {/* Description */}
            <p className="text-[#004100] text-base sm:text-lg leading-relaxed mb-6">
              Discover the charm of the original Berimbau Brazilian Table in the West Village. Our cozy space is perfect for enjoying authentic Brazilian cuisine, from hearty lunches to delightful dinners and vibrant brunches, all in a welcoming, intimate setting.
            </p>

            {/* Address */}
            <div className="text-[#004100] text-lg sm:text-xl font-medium mb-6">
              43 Carmine St, New York, NY 10014
            </div>

            {/* Opening Hours */}
            <div className="text-[#004100] text-sm sm:text-base space-y-1 mb-6">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>11:30AM-10:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>11:30AM-10:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>11:30AM-10:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>11:30AM-11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>11AM-11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11AM-10:30PM</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-[#004100] text-sm sm:text-base font-medium uppercase tracking-wide">
              <a href="/reservations" className="hover:underline">RESERVATIONS</a>
              <span className="mx-2">|</span>
              <a href="/menus" className="hover:underline">MENUS</a>
              <span className="mx-2">|</span>
              <a href="/order" className="hover:underline">ORDER NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
