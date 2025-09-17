"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  logo: string;
}

const coralSlides: Slide[] = [
  {
    id: 1,
    image: "/img/couple_hero.jpg",
    title: "EXPERIENCE",
    subtitle: "BRAZILIAN CULTURE",
    logo: "/img/logo-white.png",
  },
  {
    id: 2,
    image: "/img/DSC06146.jpg",
    title: "AUTHENTIC",
    subtitle: "FLAVORS",
    logo: "/img/logo-white.png",
  },
  {
    id: 3,
    image: "/img/DSC08693-Enhanced-NR.jpg",
    title: "VIBRANT",
    subtitle: "ATMOSPHERE",
    logo: "/img/logo-white.png",
  },
];

interface CoralSlideItemProps {
  image: string;
  title: string;
  subtitle: string;
  logo: string;
  isActive: boolean;
}

function CoralSlideItem({
  image,
  title,
  subtitle,
  logo,
  isActive,
}: CoralSlideItemProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority={isActive}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Main Text */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-normal text-white tracking-wider leading-tight mb-4">
            {title}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-normal text-white tracking-wider leading-tight">
            {subtitle}
          </h3>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={200}
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain"
            priority={isActive}
          />
        </div>
      </div>
    </div>
  );
}

interface CoralSliderNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

function CoralSliderNavigation({
  onPrevious,
  onNext,
}: CoralSliderNavigationProps) {
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

export default function CoralSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? coralSlides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === coralSlides.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full bg-[#ff9b87] relative">
      {/* Safe area with padding */}
      <div className="h-full p-8 sm:p-12 md:p-16 lg:p-20">
        {/* Slider container with rounded corners */}
        <div className="relative h-full w-full rounded-lg ">
          {/* Slides Container */}
          <div className="relative h-full w-full">
            {coralSlides.map((slide, index) => (
              <CoralSlideItem
                key={slide.id}
                image={slide.image}
                title={slide.title}
                subtitle={slide.subtitle}
                logo={slide.logo}
                isActive={index === currentSlide}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <CoralSliderNavigation onPrevious={goToPrevious} onNext={goToNext} />
          <Image
            src="/img/pass.png"
            alt="Birdie Icon"
            width={500}
            height={500}
            className="absolute w-[30vw] bottom-0 left-1/2 z-10 translate-y-1/2 -translate-x-4/5"
          />
        </div>
      </div>
      <Image
        src="/img/leaf1.png"
        alt="Birdie Icon"
        width={500}
        height={500}
        className="absolute w-[20vw] bottom-0 right-0 z-10 translate-y-1/2"
      />
    </section>
  );
}
