'use client'

import Image from "next/image";

interface SlideItemProps {
  image: string;
  title: string;
  subtitle: string;
  logo: string;
  isActive: boolean;
}

export default function SlideItem({ image, title, subtitle, logo, isActive }: SlideItemProps) {
  return (
    <div className={`absolute inset-0 h-screen w-full transition-opacity duration-500 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
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
