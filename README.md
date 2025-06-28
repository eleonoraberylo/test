# Ella Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful design, accessibility-first approach, and optimized for GitHub Pages deployment.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Dark/Light Mode**: Toggle between themes with user preference persistence
- **Blog Functionality**: MDX-powered blog with reading time and tags
- **Contact Form**: Validated contact form with React Hook Form and Zod
- **Performance Optimized**: Static site generation for fast loading
- **SEO Friendly**: Proper meta tags and structured data
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Content**: MDX for blog posts
- **Deployment**: Static export for GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ella-portfolio.git
cd ella-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   └── Projects.tsx       # Projects showcase
└── lib/                   # Utility functions
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx** - Name, title, and social links
2. **src/components/About.tsx** - Your story, skills, and experience
3. **src/components/Projects.tsx** - Your projects and portfolio pieces
4. **src/components/Contact.tsx** - Contact information
5. **src/app/layout.tsx** - Site metadata and SEO information

### Styling

The site uses a design system based on CSS custom properties. You can customize the theme by modifying:

1. **src/app/globals.css** - Color scheme and design tokens
2. **tailwind.config.ts** - Tailwind CSS configuration

### Blog Content

Add your blog posts by:

1. Creating MDX files in a `content/blog` directory
2. Updating the blog data in `src/app/blog/page.tsx`
3. Creating individual blog post pages in `src/app/blog/[slug]/page.tsx`

## 📱 Responsive Design

The site is built with a mobile-first approach and includes:

- Fluid typography and spacing
- Responsive navigation menu
- Optimized images for different screen sizes
- Touch-friendly interactive elements

## ♿ Accessibility

Accessibility features include:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color scheme
- Screen reader optimization
- Focus management

## 🚀 Deployment

### GitHub Pages

1. Update `next.config.js` with your GitHub repository name
2. Enable GitHub Pages in your repository settings
3. Push to the main branch
4. GitHub Actions will automatically build and deploy

### Manual Deployment

```bash
npm run build
npm run export
```

This creates an `out` directory with static files ready for deployment.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

### Code Quality

The project includes:

- ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting (recommended)

## 📊 Performance

The site is optimized for performance with:

- Static site generation
- Image optimization
- Code splitting
- Minimal JavaScript bundles
- CSS optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Note**: This is a template portfolio. Please replace placeholder content with your own information, projects, and branding.
