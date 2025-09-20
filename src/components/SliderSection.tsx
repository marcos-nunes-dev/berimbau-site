'use client'

import { useState, useEffect } from "react";
import SlideItem from "./SlideItem";
import SliderNavigation from "./SliderNavigation";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  logo: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/img/slide1.jpg",
    title: "NYC FIRST\nCAIPIRINHA BAR",
    subtitle: "",
    logo: "/img/logo-white.png"
  },
  {
    id: 2,
    image: "/img/slide1.jpg",
    title: "NYC FIRST\nCAIPIRINHA BAR",
    subtitle: "",
    logo: "/img/logo-white.png"
  },
  // {
  //   id: 2,
  //   image: "/img/slide2.jpg",
  //   title: "AUTHENTIC\nBRAZILIAN FLAVORS",
  //   subtitle: "",
  //   logo: "/img/logo-white.png"
  // },
  // {
  //   id: 3,
  //   image: "/img/couple_hero.jpg",
  //   title: "VIBRANT\nNIGHTLIFE",
  //   subtitle: "",
  //   logo: "/img/logo-white.png"
  // }
];

export default function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <SlideItem
            key={slide.id}
            image={slide.image}
            title={slide.title}
            logo={slide.logo}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <SliderNavigation onPrevious={goToPrevious} onNext={goToNext} />
    </section>
  );
}
