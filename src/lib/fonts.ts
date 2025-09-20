import localFont from 'next/font/local'

// TAYBirdie - Default font
export const tayBirdie = localFont({
  src: [
    {
      path: '../../public/fonts/TAYBirdie.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TAYBirdie.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tay-birdie',
  display: 'swap',
  preload: true,
})

// TAYBenditos - Heading font
export const tayBenditos = localFont({
  src: [
    {
      path: '../../public/fonts/TAYBenditos.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TAYBenditos.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tay-benditos',
  display: 'swap',
  preload: true,
})

// GT America - Modern font
export const gtAmerica = localFont({
  src: [
    {
      path: '../../public/fonts/GT-America-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GT-America-Mono-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gt-america',
  display: 'swap',
  preload: true,
})