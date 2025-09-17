'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#faf0d2] overflow-hidden">
      {/* Newsletter Subscription Section */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Newsletter Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#225533] uppercase tracking-wider mb-8 sm:mb-10">
            SUBSCRIBE TO OUR NEWSLETTER FOR UPDATES & SPECIAL OFFERS
          </h2>
          
          {/* Subscription Form */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 sm:mb-10">
            <input
              type="email"
              placeholder="NAME@EMAIL.COM"
              className="border-2 border-[#225533] bg-[#faf0d2] text-[#225533] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide placeholder-[#225533] focus:outline-none focus:ring-2 focus:ring-[#225533] w-full sm:w-auto sm:min-w-[400px]"
            />
            <button className="border-2 border-[#225533] bg-[#faf0d2] text-[#225533] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide hover:bg-[#225533] hover:text-[#faf0d2] transition-all duration-300 whitespace-nowrap w-full sm:w-auto">
              SUBSCRIBE
            </button>
          </div>
          
          {/* Social Media */}
          <p className="text-[#225533] text-sm sm:text-base md:text-lg font-medium">
            follow us @berimbau_nyc
          </p>
        </div>
      </div>

      {/* Locations & Copyright Section */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left Column - West Village */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#225533] uppercase tracking-wider mb-4 sm:mb-6">
                WEST VILLAGE
              </h3>
              <p className="text-[#225533] text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                43 Carmine St, New York, NY 10014
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
                <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg underline hover:no-underline">
                  MENUS
                </a>
                <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg underline hover:no-underline">
                  RESERVATION
                </a>
              </div>
              <p className="text-[#225533] text-sm sm:text-base md:text-lg">
                info@berimbaurestaurant.com
              </p>
            </div>

            {/* Center - Brand Logo */}
            <div className="flex justify-center">
              <Image
                src="/img/logo-white.png"
                alt="BR/NY Logo"
                width={200}
                height={200}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                priority
              />
            </div>

            {/* Right Column - Midtown */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#225533] uppercase tracking-wider mb-4 sm:mb-6">
                MIDTOWN
              </h3>
              <p className="text-[#225533] text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                3 West 36th Street, New York, NY 10018
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-end mb-4 sm:mb-6">
                <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg underline hover:no-underline">
                  MENUS
                </a>
                <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg underline hover:no-underline">
                  RESERVATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto text-right">
          <p className="text-[#225533] text-sm sm:text-base">
            © 2025 by Berimbau Brazilian Table
          </p>
        </div>
      </div>
    </footer>
  );
}