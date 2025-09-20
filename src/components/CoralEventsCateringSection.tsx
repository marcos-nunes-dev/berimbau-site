'use client'

import Image from "next/image";

export default function CoralEventsCateringSection() {
  return (
    <section className="min-h-[30vh] h-auto sm:min-h-[35vh] md:min-h-[40vh] lg:h-[70vh] w-full bg-[#ff9b87] overflow-hidden relative">
      <div className="h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-6 sm:space-y-8 w-full max-w-2xl">
          {/* Logo */}
          <Image
            src="/img/logo-green.png"
            alt="BR/NY Logo"
            width={200}
            height={200}
            className="w-24 sm:w-32 md:w-40 object-contain"
            priority
          />
          
          {/* Title and Text */}
          <div>
            <h2 className="text-[#004100] text-xl sm:text-2xl md:text-3xl font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wider leading-tight mb-4 sm:mb-6 whitespace-pre-line">
              BRAZILIAN{"\n"}LISTENING BAR
            </h2>
            <p className="text-[#004100] text-sm sm:text-base md:text-lg leading-relaxed">
              The Brazilian Table is more than a place to eat, it&apos;s a cultural space we share. It&apos;s where stories unfold, bonds grow stronger, and time slows down. Around the table, flavors become feelings, moments become memories, and every dish invites you to stay a little longer.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Three Columns */}
        <div className="hidden lg:flex flex-row gap-8 xl:gap-20 w-full max-w-7xl">
          {/* Left Column - Empty for balance */}
          <div className="flex-[2] text-center">
            
          </div>

          {/* Middle Column - Logo */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/img/logo-green.png"
              alt="BR/NY Logo"
              width={200}
              height={200}
              className="w-40 xl:w-48 object-contain"
              priority
            />
          </div>

          {/* Right Column - Title and Text */}
          <div className="flex-[2] text-center">
            <h2 className="text-[#004100] text-3xl xl:text-4xl font-medium font-[family-name:var(--font-gt-america)] uppercase tracking-wider leading-tight mb-6 xl:mb-8 whitespace-pre-line">
              BRAZILIAN{"\n"}LISTENING BAR
            </h2>
            <p className="text-[#004100] text-lg xl:text-xl leading-relaxed whitespace-pre-line">
              The Brazilian Table is more than a place{"\n"}to eat, it&apos;s a cultural space we share.{"\n"}It&apos;s where stories unfold, bonds grow{"\n"}stronger, and time slows down.{"\n"}Around the table, flavors become feelings,{"\n"}moments become memories, and every dish{"\n"}invites you to stay a little longer.
            </p>
          </div>
        </div>
      </div>
      {/* Decorative Images - Hidden on mobile and tablet, visible on desktop only */}
      <Image
        src="/img/leaf2.png"
        alt="Decorative leaf"
        width={500}
        height={500}
        className="hidden lg:block absolute w-[20vw] bottom-0 right-0 z-10"
      />
      <Image
        src="/img/folha08.png"
        alt="Decorative leaf"
        width={500}
        height={500}
        className="hidden lg:block absolute w-[35vw] bottom-0 left-0 z-10"
      />
    </section>
  );
}
