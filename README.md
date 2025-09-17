# Berimbau

A modern, high-performance website built with Next.js 15, TypeScript, and Tailwind CSS. This project features comprehensive SEO optimization, performance best practices, and a beautiful, responsive design.

## 🚀 Features

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **SEO Optimized** with metadata, sitemaps, and structured data
- **Performance Optimized** with image optimization, font loading, and bundle analysis
- **Responsive Design** that works on all devices
- **Dark Mode Support** built-in
- **Accessibility** features and best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono (optimized loading)
- **SEO**: next-seo, next-sitemap
- **Performance**: Sharp (image optimization), Bundle Analyzer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd berimbau
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env.local
```

4. Update the environment variables in `.env.local` with your site information.

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production and generate sitemap
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🎨 Customization

### SEO Configuration

Update the SEO settings in `src/lib/seo.ts`:

```typescript
const defaultSEO = {
  title: 'Your Site Title',
  description: 'Your site description',
  keywords: ['your', 'keywords'],
  image: '/your-og-image.jpg',
  url: 'https://yoursite.com',
}
```

### Styling

The project uses Tailwind CSS. You can customize the design by:

1. Modifying the color scheme in `tailwind.config.js`
2. Updating component styles in the respective files
3. Adding custom CSS in `src/app/globals.css`

### Content

- Update the homepage content in `src/app/page.tsx`
- Modify the about page in `src/app/about/page.tsx`
- Customize the contact page in `src/app/contact/page.tsx`

## 📊 Performance Features

- **Image Optimization**: Automatic WebP/AVIF conversion and responsive images
- **Font Optimization**: Preloaded fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer for optimization
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Compression**: Gzip compression enabled
- **Security Headers**: Security headers configured

## 🔍 SEO Features

- **Metadata API**: Dynamic metadata generation
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: SEO-friendly robots.txt
- **Structured Data**: JSON-LD structured data support
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific metadata
- **Canonical URLs**: Proper canonical URL handling

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🌙 Dark Mode

Dark mode is built-in and automatically adapts to user preferences. You can customize the dark mode colors in the Tailwind configuration.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Analytics

To add analytics, update your environment variables:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform
- [Geist](https://vercel.com/font) for the beautiful fonts

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.