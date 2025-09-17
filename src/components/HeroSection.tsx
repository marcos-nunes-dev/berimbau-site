'use client'

import Navigation from './Navigation';
import ReservationSection from './ReservationSection';
import HeroHeadline from './HeroHeadline';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://drive.google.com/uc?export=download&id=1QkQkvqzyudldNFpghZMOmw_OHvYDmY5E" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage: "url('/img/couple_hero.jpg')",
            }}
          ></div>
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Navigation */}
        <Navigation />

        {/* Middle Section - Reservation Buttons */}
        <ReservationSection />

        {/* Bottom Section - Main Headline */}
        <HeroHeadline />

      </div>
    </section>
  );
}
