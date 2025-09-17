'use client'

import LeftImageColumn from './LeftImageColumn';
import CenterLogo from './CenterLogo';
import AboutSection from './AboutSection';

export default function YellowSection() {
  return (
    <section className="relative h-screen w-full bg-[#faab00] text-[#004100]">
      <div className="h-full flex translate-y-[-10vh]">
        {/* Left Column - 45% width */}
        <LeftImageColumn />

        {/* Middle Column - 10% width */}
        <CenterLogo />

        {/* Right Column - 45% width */}
        <AboutSection />
      </div>
    </section>
  );
}
