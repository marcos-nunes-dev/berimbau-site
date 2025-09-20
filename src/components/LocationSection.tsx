'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

const westVillageImages = [
  "/img/couple_hero.jpg",
  "/img/DSC06146.jpg", 
  "/img/DSC08693-Enhanced-NR.jpg"
];

export default function LocationSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === westVillageImages.length - 1 ? 0 : prev + 1));
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
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-0 lg:pl-16 xl:pl-20 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="relative w-full h-64 lg:h-full max-h-[40vh] lg:max-h-[80vh]">
            {/* Carousel Container */}
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {westVillageImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`West Village Location ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>
            {/* Decorative elements overlay - positioned like in the reference */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%]">
              <Image
                src="/img/birdie-green-icon.png"
                alt="Decorative icon"
                width={150}
                height={150}
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rotate-180"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20">
          <div className="max-w-xl text-center space-y-6">
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
            <p className="text-[#004100] text-base sm:text-lg font-[family-name:var(--font-gt-america)] leading-relaxed mb-6">
              Discover the charm of the original Berimbau Brazilian Table in the West Village. Our cozy space is perfect for enjoying authentic Brazilian cuisine, from hearty lunches to delightful dinners and vibrant brunches, all in a welcoming, intimate setting.
            </p>

            {/* Address */}
            <div className="text-[#004100] text-lg sm:text-xl font-medium font-[family-name:var(--font-gt-america)] mb-6">
              43 Carmine St, New York, NY 10014
            </div>

            {/* Opening Hours */}
            <div className="text-[#004100] text-base sm:text-lg font-[family-name:var(--font-gt-america)] space-y-1 mb-20">
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
            <div className="text-[#004100] text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide">
              <a href="/reservations" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>RESERVATIONS</a>
              <span className="mx-2">|</span>
              <a href="/menus" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>MENUS</a>
              <span className="mx-2">|</span>
              <a href="/order" className="hover:underline hover:font-bold transition-all duration-300 ease-in-out" style={{ textUnderlineOffset: '6px' }}>ORDER NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
