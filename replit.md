# Overview

This is a full-stack coding education platform called "KodingKu" - an Indonesian language learning platform for programming. The application provides tutorials, courses, and an interactive code playground for various programming languages including Python, JavaScript, and web development technologies. The platform features a modern React frontend with a Node.js/Express backend, offering a comprehensive learning experience with user roles (students, mentors, admins), course management, and interactive features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library following the "new-york" style
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with custom styling via class-variance-authority
- **Theme System**: Custom dark/light theme provider with localStorage persistence

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API following conventional HTTP methods
- **Database ORM**: Drizzle ORM with PostgreSQL as the target database
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot reload with Vite middleware integration in development mode

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon Database serverless
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development Fallback**: In-memory storage implementation for development/testing

## Database Schema Design
The application uses a multi-table structure with the following entities:
- **Users**: Authentication and role management (student, mentor, admin)
- **Courses**: Course catalog with categories, difficulty levels, and pricing
- **Tutorials**: Educational content with categorization and publishing status
- **Code Snippets**: User-generated code examples with language-specific organization
- **Enrollments**: Student course enrollment tracking

## Authentication and Authorization
- **Session-based Authentication**: Traditional server-side sessions stored in PostgreSQL
- **Role-based Access Control**: Three distinct user roles with different permissions
- **Security**: Planned 3FA integration and Google OAuth for sign-up processes

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **express**: Web application framework for Node.js
- **react**: Frontend UI library with TypeScript support
- **@tanstack/react-query**: Server state management and caching

### UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant handling for components
- **lucide-react**: Modern icon library for React applications

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking and enhanced development experience
- **drizzle-kit**: Database schema management and migration tools
- **wouter**: Lightweight client-side routing solution

### Planned Integrations
- **Payment Processing**: Xendit integration for premium course payments
- **Communication**: Real-time chat system for mentor-student interactions
- **Authentication**: Google OAuth and 3FA implementation
- **Deployment**: Production optimization with static asset serving