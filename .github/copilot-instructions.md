# Copilot Instructions for Ella Portfolio

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. The site features:
- Static site generation for GitHub Pages hosting
- Modern, accessible design with dark/light mode
- Blog functionality with MDX support
- Framer Motion animations
- React Hook Form with Zod validation
- Responsive design following modern web standards

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Static export for GitHub Pages

## Code Style Guidelines
- Use TypeScript for all components and utilities
- Follow Next.js 14 App Router conventions
- Use Tailwind CSS for styling with semantic class names
- Implement proper accessibility features (ARIA labels, semantic HTML, keyboard navigation)
- Use Framer Motion for smooth animations and micro-interactions
- Follow React best practices with hooks and modern patterns
- Ensure responsive design for all screen sizes

## Component Structure
- All components are in `src/components/`
- Use 'use client' directive for client-side components
- Export components as named exports
- Keep components focused and reusable
- Use proper TypeScript interfaces for props

## Accessibility Requirements
- Always include proper ARIA labels
- Ensure keyboard navigation works
- Use semantic HTML elements
- Maintain proper color contrast
- Include alt text for images
- Support screen readers

## Performance Considerations
- Optimize images using Next.js Image component
- Use dynamic imports for code splitting when appropriate
- Minimize bundle size
- Implement proper loading states
- Use Next.js built-in optimizations

## Security Best Practices
- Validate all form inputs with Zod schemas
- Sanitize user content
- Use proper CSP headers where applicable
- Follow OWASP guidelines for web security
