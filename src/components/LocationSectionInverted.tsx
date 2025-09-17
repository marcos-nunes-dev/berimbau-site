"use client";

import Image from "next/image";

export default function LocationSectionInverted() {
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
        {/* Image Column - Shows first on mobile, second on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-0 lg:pr-16 xl:pr-20 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 lg:order-2">
          <div className="relative w-full h-64 lg:h-full max-h-[40vh] lg:max-h-[80vh]">
            <Image
              src="/img/couple_hero.jpg" // Using existing image as placeholder - you can replace with the actual Midtown image
              alt="Midtown Location"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Text Content Column - Shows second on mobile, first on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 lg:order-1">
          <div className="max-w-md text-center space-y-6">
            {/* Title with tuc image */}
            <div className="flex flex-col items-center justify-center mb-6">
              <Image
                src="/img/tuc.png"
                alt="Tuc image"
                width={200}
                height={200}
                className="w-24 h-15 sm:w-28 sm:h-17 md:w-32 md:h-20 lg:w-36 lg:h-22 xl:w-40 xl:h-25 mb-4"
              />
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-[#004100] uppercase tracking-wider">
                MIDTOWN
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#004100] text-base sm:text-lg leading-relaxed mb-6">
              Explore the newest Berimbau Brazilian Kitchen in Midtown NYC. Our
              spacious, modern venue features a full bar and is ideal for
              savoring authentic Brazilian dishes. Experience the vibrant spirit
              of Brazil in a contemporary, warm, and inviting atmosphere. Bar
              seating is available for walk-ins only.
            </p>

            {/* Address */}
            <div className="text-[#004100] text-lg sm:text-xl font-medium mb-6">
              3 West 36th Street, New York, NY 10018
            </div>

            {/* Opening Hours */}
            <div className="text-[#004100] text-base sm:text-lg space-y-1 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                  <div>Mon-Thu:</div>
                  <div>Friday:</div>
                  <div>Saturday:</div>
                  <div>Sunday:</div>
                </div>
                <div className="text-left">
                  <div>11:30 AM - 10 PM</div>
                  <div>11:30 AM - 11 PM</div>
                  <div>11:30 AM - 11 PM</div>
                  <div>11:30 AM - 10 PM</div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-[#004100] text-base sm:text-lg md:text-xl font-medium uppercase tracking-wide">
              <a href="/reservations" className="hover:underline">
                RESERVATIONS
              </a>
              <span className="mx-2">|</span>
              <a href="/menus" className="hover:underline">
                MENUS
              </a>
              <span className="mx-2">|</span>
              <a href="/order" className="hover:underline">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
