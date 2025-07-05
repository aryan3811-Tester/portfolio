# Aryan Garg Portfolio - Full Stack Application

## Overview

This is a modern full-stack portfolio application built for Aryan Garg, a Quality Engineer with 3+ years of experience. The application showcases professional experience, skills, projects, and provides a contact form for potential employers or clients. It uses a modern tech stack with React for the frontend, Express.js for the backend, and is designed with a beautiful dark theme and animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Express sessions with PostgreSQL store

### Build and Development Tools
- **Build Tool**: Vite for frontend bundling
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild for backend bundling
- **Deployment**: Optimized for Replit environment

## Key Components

### Frontend Components
1. **Hero Section**: Landing page with animated introduction
2. **About Section**: Professional summary and journey
3. **Skills Section**: Technical skills categorized by domain
4. **Experience Section**: Detailed work history with achievements
5. **Projects Section**: Key projects with descriptions and visuals
6. **Education Section**: Academic background
7. **Contact Section**: Contact form with validation and submission
8. **Navigation**: Sticky navigation with smooth scrolling
9. **Floating Particles**: Animated background elements

### Backend Components
1. **API Routes**: RESTful endpoints for contact form submission
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Database Schema**: Drizzle schema for contacts table
4. **Validation**: Zod schemas for request validation
5. **Error Handling**: Centralized error handling middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form (name, email, message)
2. Frontend validates data using Zod schema
3. React Query mutation sends POST request to `/api/contact`
4. Backend validates request data against shared schema
5. Contact data is stored in database (currently in-memory)
6. Success/error response sent back to frontend
7. User receives toast notification about submission status

### Contact Data Retrieval
1. Admin endpoint `/api/contacts` retrieves all submitted contacts
2. Data is sorted by creation date (newest first)
3. Response includes all contact submissions for administrative purposes

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation resolvers
- **wouter**: Lightweight routing
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Backend Dependencies
- **express**: Web framework
- **drizzle-orm**: Database ORM
- **@neondatabase/serverless**: Neon database client
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Schema validation
- **drizzle-zod**: Zod integration for Drizzle

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution
- **esbuild**: JavaScript bundler
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs with tsx for TypeScript execution
- Database migrations managed with Drizzle Kit
- Replit-specific plugins for development experience

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served from Express server
4. Database migrations applied before deployment

### Database Configuration
- PostgreSQL database hosted on Neon (serverless)
- Connection string provided via `DATABASE_URL` environment variable
- Drizzle migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for type safety

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)
- `REPL_ID`: Replit environment identifier (if applicable)

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```