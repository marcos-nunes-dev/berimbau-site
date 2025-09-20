'use client'

import Image from "next/image";

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#faf0d2] overflow-hidden">
      {/* Newsletter Subscription Section */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Newsletter Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-[family-name:var(--font-gt-america)] text-[#225533] uppercase tracking-wider mb-8 sm:mb-10">
            SUBSCRIBE TO OUR NEWSLETTER<br />FOR UPDATES & SPECIAL OFFERS
          </h2>
          
          {/* Subscription Form */}
          <div className="mb-8 sm:mb-10">
            {/* Mobile/Tablet Layout - Stacked */}
            <div className="flex flex-col md:hidden space-y-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="NAME@EMAIL.COM"
                className="border-2 border-[#225533] bg-[#faf0d2] text-[#225533] px-4 py-3 text-sm font-medium uppercase tracking-wide placeholder-[#225533] focus:outline-none focus:ring-2 focus:ring-[#225533] w-full text-center"
              />
              <button 
                className="border-2 border-[#225533] bg-[#225533] text-[#faf0d2] px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#004100] transition-all duration-300 w-full"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'click_subscribe'
                    });
                  }
                }}
              >
                SUBSCRIBE
              </button>
            </div>
            
            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:flex justify-center items-center">
              <input
                type="email"
                placeholder="NAME@EMAIL.COM"
                className="border-t-2 border-b-2 border-l-2 border-[#225533] bg-[#faf0d2] text-[#225533] px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium uppercase tracking-wide placeholder-[#225533] focus:outline-none focus:ring-2 focus:ring-[#225533] min-w-[300px] lg:min-w-[400px]"
              />
              <button 
                className="border-2 border-[#225533] bg-[#faf0d2] text-[#225533] px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-bold uppercase tracking-wide hover:bg-[#225533] hover:text-[#faf0d2] transition-all duration-300 whitespace-nowrap"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'click_subscribe'
                    });
                  }
                }}
              >
                SUBSCRIBE
              </button>
            </div>
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
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-[family-name:var(--font-gt-america)] text-[#225533] uppercase tracking-wider">
                WEST VILLAGE
              </h3>
              <p className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)]">
                43 Carmine St, New York, NY 10014
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                  MENUS
                </a>
                <span className="hidden sm:inline text-[#225533]">-</span>
                <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                  RESERVATION
                </a>
              </div>
            </div>

            {/* Center - Brand Logo */}
            <div className="flex justify-center">
              <Image
                src="/img/logo-green.png"
                alt="BR/NY Logo"
                width={200}
                height={200}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
                priority
              />
            </div>

            {/* Right Column - Midtown */}
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-[family-name:var(--font-gt-america)] text-[#225533] uppercase tracking-wider">
                MIDTOWN
              </h3>
              <p className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)]">
                3 West 36th Street, New York, NY 10018
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <a href="/menus" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                  MENUS
                </a>
                <span className="hidden sm:inline text-[#225533]">-</span>
                <a href="/reservations" className="text-[#225533] text-sm sm:text-base md:text-lg font-[family-name:var(--font-gt-america)] underline hover:no-underline">
                  RESERVATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Email */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)] mb-2 sm:mb-0">
            info@berimbaurestaurant.com
          </p>
          <p className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)]">
            © 2025 by Berimbau Brazilian Table
          </p>
        </div>
      </div>
    </footer>
  );
}