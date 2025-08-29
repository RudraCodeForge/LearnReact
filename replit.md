# Overview

LearnReact is a React learning project that showcases multiple applications built with React and Vite. This repository serves as a practical learning environment containing various projects including a clock application, calculator, social media interface, and todo list. The repository is structured to support both development and deployment, with built projects available in the docs folder for GitHub Pages hosting.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The repository follows a modular React architecture using Vite as the build tool. Each project is self-contained within the Projects directory, maintaining independent configurations and dependencies. The architecture emphasizes component-based development with CSS modules for styling isolation.

### Component Structure
- **Modular Components**: Each project uses a component-based architecture with separate files for logic and styling
- **CSS Modules**: Styling is handled through CSS modules (`.module.css`) to prevent style conflicts between components
- **Responsive Design**: Bootstrap 5 is used across projects for consistent responsive layouts

### Build System
- **Vite Configuration**: Each project has its own `vite.config.js` with specific base paths for GitHub Pages deployment
- **TypeScript Support**: TypeScript configuration is available with strict type checking enabled
- **Hot Module Replacement**: Development environment supports live reloading for efficient development

## Project Organization
The repository uses a clear separation of concerns:

1. **Individual Projects**: Each application (Bharat Clock, Calculator, Social Media, TO-DO) is contained in its own directory with complete independence
2. **Shared Documentation**: A unified docs folder contains built versions of all projects for deployment
3. **Learning Topics**: Separate topics directory for exploring specific React concepts

## Development Workflow
- **ESLint Integration**: Consistent code quality enforcement across all projects
- **Development Server**: Each project can run independently on localhost with hot reloading
- **Production Builds**: Automated build process generates optimized static files for deployment

## Deployment Strategy
The repository is configured for GitHub Pages deployment with:
- **Base Path Configuration**: Each project's Vite config includes appropriate base paths for subdirectory hosting
- **Static File Generation**: Built assets are organized in the docs folder with proper routing
- **Cross-Origin Resource Sharing**: Server configurations include allowed hosts for Replit development environment

# External Dependencies

## Core Frontend Technologies
- **React 18/19**: Primary UI library for component-based development
- **React DOM**: DOM rendering library for React components
- **Vite 7**: Modern build tool providing fast development server and optimized production builds

## Styling and UI Frameworks
- **Bootstrap 5.3.7**: CSS framework for responsive design and pre-built components
- **Font Awesome 6.4.0**: Icon library for enhanced user interface elements
- **CSS Modules**: Scoped styling approach to prevent style conflicts

## Development Tools
- **TypeScript 5**: Static type checking for improved code quality and developer experience
- **ESLint 9**: Code linting and formatting with React-specific rules
- **Vite React Plugin**: Official Vite plugin for React support with fast refresh

## Build and Deployment
- **GitHub Pages**: Static site hosting for project demonstrations
- **Replit Development Environment**: Cloud-based development platform with specific host configurations

## Browser APIs and Features
- **Date/Time APIs**: Used in the Bharat Clock project for real-time clock functionality
- **Local Storage**: Potential usage for persisting application state across sessions
- **Responsive Design APIs**: Media queries and viewport meta tags for mobile compatibility