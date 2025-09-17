'use client'

import Image from "next/image";

export default function CenterLogo() {
  return (
    <div className="hidden xl:flex w-[10%] mb-[-10vh] justify-center items-center">
      <Image
        src="/img/logo-green-big.png"
        alt="Logo"
        width={800}
        height={800}
        className="w-32 sm:w-40 md:w-40 lg:w-48 xl:w-56 2xl:w-64 object-contain"
      />
    </div>
  );
}
