# Setup Guide

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── listings/     # Listing endpoints
│   │   └── contact/      # Contact form endpoint
│   ├── buy/              # Browse listings page
│   ├── sell/             # Create listing page
│   ├── collection/       # Collection showcase
│   ├── about/            # About us page
│   ├── contact/          # Contact page
│   ├── item/[id]/        # Item detail page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── ProductCard.tsx    # Product listing card
├── lib/                   # Utilities and data
│   └── data.ts            # Sample data
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/                # Static assets
    └── images/            # Image directory
```

## Features

### Pages
- **Homepage**: Hero section, features, featured items
- **Buy Page**: Browse listings with filters and search
- **Sell Page**: Create new listings
- **Collection Page**: Showcase of curated items
- **About Page**: Company information and values
- **Contact Page**: Contact form and information
- **Item Detail Page**: Detailed view of individual items

### API Routes
- `GET /api/listings` - Fetch all listings
- `POST /api/listings` - Create new listing
- `GET /api/listings/[id]` - Fetch single listing
- `POST /api/contact` - Submit contact form

## Customization

### Adding Real Images
1. Place your coin/note images in `public/images/`
2. Update image paths in `lib/data.ts` to match your filenames

### Database Integration
Currently using sample data. To integrate a real database:
1. Install your preferred database (PostgreSQL, MongoDB, etc.)
2. Set up Prisma or your ORM
3. Update API routes to use database queries
4. Replace sample data in `lib/data.ts`

### Styling
- Tailwind CSS is configured with custom colors
- Primary color: Orange/Gold theme
- Antique color: Brown/Beige theme
- Custom fonts: Inter (sans) and Playfair Display (serif)

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

For production, you may want to add:
- Database connection strings
- Email service credentials
- Image upload service keys
- API keys for authentication

Create a `.env.local` file for local development.

