# Components Structure

This directory contains all the reusable components for the Berimbau website, organized for better maintainability and reusability.

## Component Hierarchy

### Main Page Components
- **`ScrollHeader`** - Fixed header that appears on scroll with logo and menu button
- **`HeroSection`** - Full-screen hero section with background image and navigation
- **`YellowSection`** - About section with three-column layout

### Hero Section Components
- **`Navigation`** - Top navigation with reservation links and menu button
- **`ReservationSection`** - Middle section with reservation buttons and BR/NY logo
- **`HeroHeadline`** - Bottom section with "BRAZIL IS A FEELING" headline

### Yellow Section Components
- **`LeftImageColumn`** - Left column with decorative images
- **`CenterLogo`** - Middle column with the main logo
- **`AboutSection`** - Right column with about text and call-to-action

### Shared Components
- **`Header`** - General header component (if needed)
- **`Footer`** - Footer component

## Usage

```tsx
import { ScrollHeader, HeroSection, YellowSection } from "@/components";

// Or import individual components
import ScrollHeader from "@/components/ScrollHeader";
```

## Benefits of This Structure

1. **Maintainability** - Each component has a single responsibility
2. **Reusability** - Components can be easily reused across pages
3. **Testability** - Individual components can be tested in isolation
4. **Readability** - Main page is now clean and easy to understand
5. **Scalability** - Easy to add new sections or modify existing ones

## Component Props

### ScrollHeader
- `isVisible: boolean` - Controls header visibility based on scroll position

### Other Components
- Most components are self-contained and don't require props
- All components are responsive and follow the design system
