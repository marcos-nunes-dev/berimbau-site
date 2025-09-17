'use client'

import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="relative h-auto lg:h-screen w-full bg-[#faf0d2] overflow-hidden">
      {/* Center Logo - Positioned in the center of the entire page */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <Image
          src="/img/logo-green.png"
          alt="BR/NY Logo"
          width={200}
          height={200}
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
          priority
        />
      </div>

      <div className="h-full flex flex-col lg:flex-row">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-0 lg:pl-16 xl:pl-20 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="relative w-full h-64 lg:h-full max-h-[40vh] lg:max-h-[80vh]">
            <Image
              src="/img/couple_hero.jpg" // Using existing image as placeholder - you can replace with the actual bartender image
              alt="West Village Location"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Decorative elements overlay - positioned like in the reference */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rotate-180"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="max-w-md text-center space-y-6">
            {/* Title with decorative icons */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/img/f7.png"
                alt="Decorative icon"
                width={200}
                height={200}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
              />
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-[#004100] uppercase tracking-wider">
                WEST VILLAGE
              </h2>
              <Image
                src="/img/f3.png"
                alt="Decorative icon"
                width={200}
                height={200}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
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
            <div className="text-[#004100] text-base sm:text-lg space-y-1 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div>Monday:</div>
                  <div>Tuesday:</div>
                  <div>Wednesday:</div>
                  <div>Thursday:</div>
                  <div>Friday:</div>
                  <div>Saturday:</div>
                  <div>Sunday:</div>
                </div>
                <div className="text-left">
                  <div>11:30 AM - 10:30 PM</div>
                  <div>Closed</div>
                  <div>11:30 AM - 10:30 PM</div>
                  <div>11:30 AM - 10:30 PM</div>
                  <div>11:30 AM - 11 PM</div>
                  <div>11 AM - 11 PM</div>
                  <div>11 AM - 10:30 PM</div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-[#004100] text-base sm:text-lg md:text-xl font-medium uppercase tracking-wide">
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
