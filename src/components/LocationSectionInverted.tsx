"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const midtownImages = [
  "/img/couple_hero.jpg",
  "/img/DSC06146.jpg", 
  "/img/DSC08693-Enhanced-NR.jpg"
];

export default function LocationSectionInverted() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === midtownImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-auto lg:h-screen w-full bg-[#faf0d2] overflow-hidden">
      {/* Center Logo - Positioned in the center of the entire page */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <Image
          src="/img/logo-green.png"
          alt="BR/NY Logo"
          width={200}
          height={200}
          className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 object-contain"
          priority
        />
      </div>

      <div className="h-full flex flex-col lg:flex-row">
        {/* Image Column - Shows first on mobile, second on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-0 lg:pr-16 xl:pr-20 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 lg:order-2">
          <div className="relative w-full h-64 lg:h-full max-h-[40vh] lg:max-h-[80vh]">
            {/* Carousel Container */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {midtownImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Midtown Location ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text Content Column - Shows second on mobile, first on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 lg:order-1">
          <div className="max-w-xl text-center space-y-6">
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
            <p className="text-[#004100] text-base sm:text-lg font-[family-name:var(--font-gt-america)] leading-relaxed mb-6">
              Explore the newest Berimbau Brazilian Kitchen in Midtown NYC. Our
              spacious, modern venue features a full bar and is ideal for
              savoring authentic Brazilian dishes. Experience the vibrant spirit
              of Brazil in a contemporary, warm, and inviting atmosphere. Bar
              seating is available for walk-ins only.
            </p>

            {/* Address */}
            <div className="text-[#004100] text-lg sm:text-xl font-medium font-[family-name:var(--font-gt-america)] mb-6">
              3 West 36th Street, New York, NY 10018
            </div>

            {/* Opening Hours */}
            <div className="text-[#004100] text-base sm:text-lg font-[family-name:var(--font-gt-america)] space-y-1 mb-20">
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
            <div className="text-[#004100] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide">
              <a href="/reservations" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>
                RESERVATIONS
              </a>
              <span className="mx-2">|</span>
              <a href="/menus" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>
                MENUS
              </a>
              <span className="mx-2">|</span>
              <a href="/order" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
