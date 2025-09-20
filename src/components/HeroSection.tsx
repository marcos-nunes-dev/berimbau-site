'use client'

import Navigation from './Navigation';
import ReservationSection from './ReservationSection';
import HeroHeadline from './HeroHeadline';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
          <iframe
            className="absolute pointer-events-none"
            src="https://www.youtube.com/embed/_IpmG9sNjqM?si=68Djn88hpC8eQT3N&autoplay=1&mute=1&loop=1&playlist=_IpmG9sNjqM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&origin=https://berimbaurestaurant.com"
            title="Berimbau Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              top: '50%',
              left: '50%',
              width: '177.77777778vh', // 16:9 aspect ratio
              height: '56.25vw', // 16:9 aspect ratio
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
          />
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
