'use client'

import Image from "next/image";

export default function LeftImageColumn() {
  return (
    <div className="hidden lg:block w-[50%] xl:w-[45%] flex flex-col justify-center items-center space-y-4 p-4 sm:p-6 md:p-8 relative">
      <div className="h-full">
        <Image
          src="/img/1.png"
          alt="Image 1"
          width={2000}
          height={2000}
          className="hidden xl:block w-full max-w-[60vh] sm:max-w-[65vh] md:max-w-[70vh] lg:max-w-[75vh] absolute top-0 left-0 pointer-events-none"
        />
        <Image
          src="/img/2.png"
          alt="Image 2"
          width={2000}
          height={2000}
          className="w-full max-w-[45vh] sm:max-w-[50vh] md:max-w-[55vh] lg:max-w-[60vh] absolute bottom-[-10vh] left-0 pointer-events-none"
        />
        <Image
          src="/img/3.png"
          alt="Image 3"
          width={200}
          height={200}
          className="w-full max-w-[25vh] sm:max-w-[30vh] md:max-w-[32vh] lg:max-w-[35vh] absolute bottom-[-10vh] left-0 pointer-events-none"
        />
      </div>
    </div>
  );
}
