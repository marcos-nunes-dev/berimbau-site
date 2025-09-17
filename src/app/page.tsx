'use client'

import { useState, useEffect } from "react";
import { ScrollHeader, HeroSection, YellowSection, SliderSection, LocationSection, LocationSectionInverted, EventsCateringSection, CoralSliderSection, CoralEventsCateringSection, DeliverySection, ReviewsSection, Footer } from "@/components";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Change header after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <ScrollHeader isVisible={isScrolled} />
      <HeroSection />
      <YellowSection />
      <SliderSection />
      <LocationSection />
      <LocationSectionInverted />
      <EventsCateringSection />
      <CoralSliderSection />
      <CoralEventsCateringSection />
      <DeliverySection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}