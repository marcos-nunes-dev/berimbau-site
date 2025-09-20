'use client'

import Image from "next/image";
import { useState } from "react";

interface SlideItemProps {
  image: string;
  title: string;
  subtitle: string;
  logo: string;
  isActive: boolean;
}

export default function SlideItem({ image, title, logo, isActive }: Omit<SlideItemProps, 'subtitle'>) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`absolute inset-0 h-screen w-full transition-opacity duration-500 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority={isActive}
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.error(`Failed to load image: ${image}`);
              setImageError(true);
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg mb-2">Image failed to load</p>
              <p className="text-sm opacity-70">{image}</p>
            </div>
          </div>
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Main Text */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-normal text-white tracking-wider whitespace-pre-line" style={{ lineHeight: '0.8' }}>
            {title}
          </h2>
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
