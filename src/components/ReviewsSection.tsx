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
  link: string;
}

const reviewCards: ReviewCard[] = [
  {
    id: 1,
    logo: "/img/logo/The Infatuation Logo- Transparet.avif",
    logoAlt: "The Infatuation Logo",
    reviewText: "Berimbau is the best Brazilian restaurant in NYC.",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]",
    link: "https://www.theinfatuation.com/new-york/guides/the-best-brazilian-restaurants-in-nyc"
  },
  {
    id: 2,
    logo: "/img/logo/Eater Logo Transparent.avif",
    logoAlt: "Eater Logo",
    reviewText: "The national dish of Brazil is formidable at this cute, brick-walled Village Brazilian bistro",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]",
    link: "https://ny.eater.com/2019/12/16/21020639/best-dishes-nyc-2019-robert-sietsema"
  },
  {
    id: 3,
    logo: "/img/logo/The_New_York_Times_logo.avif",
    logoAlt: "The New York Times Logo",
    reviewText: "Berimbau Brazilian Kitchen in the West Village has undergone extensive renovations, including the installation of a cocktail window open to the street",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]",
    link: "https://www.nytimes.com/2020/07/28/dining/nyc-restaurant-news.html"
  },
  {
    id: 4,
    logo: "/img/logo/secretnyc_co-v_2-logo.avif",
    logoAlt: "Secret NYC Logo",
    reviewText: "This West Village outpost is a cute neighborhood spot serving up some of the best Brazilian food in the city",
    readMoreText: "+ READ MORE",
    borderColor: "border-[#225533]",
    link: "https://secretnyc.co/best-brazilian-restaurants-in-nyc/"
  }
];

export default function ReviewsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-30 w-full bg-[#faf0d2] overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-[#225533] uppercase tracking-wider text-center mb-12 sm:mb-16 md:mb-20 whitespace-pre-line">
          WHAT IS NYC{"\n"}SAYING ABOUT US
        </h2>

        {/* Four Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
          {reviewCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative bg-[#faf0d2] border-2 ${card.borderColor} p-4 sm:p-5 h-48 sm:h-56 md:h-64 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-[#faaa00] cursor-pointer`}
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
                 <div className={`absolute inset-0 p-4 sm:p-5 flex flex-col justify-between transition-opacity duration-300 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}>
                   <div className="flex-1 overflow-y-auto custom-scrollbar">
                     <p className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)] leading-relaxed text-center">
                       {card.reviewText}
                     </p>
                   </div>
                   {card.readMoreText && (
                     <div className="text-right mt-4 flex-shrink-0">
                       <span className="text-[#225533] text-sm sm:text-base font-[family-name:var(--font-gt-america)] underline">
                         {card.readMoreText}
                       </span>
                     </div>
                   )}
                 </div>
               )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
