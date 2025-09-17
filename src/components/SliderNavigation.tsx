'use client'

import Image from "next/image";

interface SliderNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SliderNavigation({ onPrevious, onNext }: SliderNavigationProps) {
  return (
    <>
      {/* Previous Arrow */}
      <button
        onClick={onPrevious}
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 group"
        aria-label="Previous slide"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <Image
              src="/img/arrow-slider.png"
              alt="Previous"
              width={32}
              height={32}
              className="w-6 h-13 sm:w-7 sm:h-14 md:w-8 md:h-15 rotate-180"
            />
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-sans uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            PREVIOUS
          </span>
        </div>
      </button>

      {/* Next Arrow */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 group"
        aria-label="Next slide"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-white text-sm sm:text-base md:text-lg font-sans uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            NEXT
          </span>
          <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <Image
              src="/img/arrow-slider.png"
              alt="Next"
              width={32}
              height={32}
              className="w-6 h-13 sm:w-7 sm:h-14 md:w-8 md:h-15"
            />
          </div>
        </div>
      </button>
    </>
  );
}
