'use client'

import { useState } from "react";
import Image from "next/image";

interface ReviewCard {
  id: number;
  logo: string;
  logoAlt: string;
  reviewText: string;
  readMoreText: string;
  borderColor: string;
}

const reviewCards: ReviewCard[] = [
  {
    id: 1,
    logo: "/img/the-infatuation-logo.png",
    logoAlt: "The Infatuation Logo",
    reviewText: "Berimbau brings authentic Brazilian flavors to NYC with their expertly crafted dishes and vibrant atmosphere.",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]"
  },
  {
    id: 2,
    logo: "/img/eater-logo.png",
    logoAlt: "Eater Logo",
    reviewText: "A standout addition to the NYC dining scene, offering genuine Brazilian cuisine that transports you to São Paulo.",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]"
  },
  {
    id: 3,
    logo: "/img/nytimes-logo.png",
    logoAlt: "The New York Times Logo",
    reviewText: "The West Village location captures the essence of Brazilian dining with exceptional food and warm hospitality.",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]"
  },
  {
    id: 4,
    logo: "/img/nytimes-logo.png",
    logoAlt: "The New York Times Logo",
    reviewText: "This West Village outpost is a cute neighborhood spot serving up some of the best Brazilian food in the city",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]"
  }
];

export default function ReviewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-30 w-full bg-[#faf0d2] overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-[#225533] uppercase tracking-wider text-center mb-12 sm:mb-16 md:mb-20">
          WHAT IS NYC SAYING ABOUT US
        </h2>

        {/* Four Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
          {reviewCards.map((card) => (
            <div
              key={card.id}
               className={`relative bg-[#faf0d2] border-2 ${card.borderColor} p-6 sm:p-8 h-48 sm:h-56 md:h-64 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-[#faaa00] cursor-pointer`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
               {/* Logo Display (default state) */}
               <div className={`transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-0' : 'opacity-100'}`}>
                 <Image
                   src={card.logo}
                   alt={card.logoAlt}
                   width={200}
                   height={100}
                   className="max-w-full max-h-20 sm:max-h-24 object-contain"
                 />
               </div>

               {/* Review Text Display (hover state) */}
               {card.reviewText && (
                 <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                   <p className="text-[#225533] text-sm sm:text-base leading-relaxed">
                     {card.reviewText}
                   </p>
                   {card.readMoreText && (
                     <div className="text-right">
                       <span className="text-[#225533] text-sm sm:text-base underline">
                         {card.readMoreText}
                       </span>
                     </div>
                   )}
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
