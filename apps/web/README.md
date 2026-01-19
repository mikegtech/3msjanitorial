# 3MS Janitorial - Web Application

The public-facing website for 3MS Janitorial Services, a commercial cleaning company serving Greenville, TX and surrounding Hunt County communities.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v7
- **Routing**: React Router v7
- **Validation**: Zod (shared schemas from `@3msjanitorial/contracts`)
- **Styling**: Emotion (via MUI)

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Development

From the monorepo root:

```bash
pnpm install
pnpm dev
```

Or from this directory:

```bash
pnpm dev
```

The development server will start at `http://localhost:3000`.

### Building

```bash
pnpm build
```

Build output is in the `dist/` directory.

### Linting & Type Checking

```bash
pnpm lint        # Run Biome linter
pnpm lint:fix    # Auto-fix linting issues
pnpm typecheck   # Run TypeScript type checking
```

## Project Structure

```
src/
├── components/
│   └── layout/       # Header, Footer, MobileCTABar
├── constants/        # Business info, service areas
├── pages/            # Route page components
├── App.tsx           # Main app with routing
├── main.tsx          # Entry point
└── theme.ts          # MUI theme configuration
```

## Pages

| Route          | Description                              |
|----------------|------------------------------------------|
| `/`            | Home page with hero, services, reviews   |
| `/services`    | Full list of commercial cleaning services |
| `/about`       | Company information and values           |
| `/reviews`     | Customer testimonials                    |
| `/gallery`     | Photo gallery of completed work          |
| `/service-area`| Service coverage map and locations       |
| `/contact`     | Request a Quote form                     |
| `/privacy`     | Privacy policy                           |
| `/terms`       | Terms of service                         |

## Form Validation

The Request a Quote form uses Zod schemas from `@3msjanitorial/contracts` for validation. Currently, form submissions are stored in localStorage (API integration comes in Phase 2).

## Environment Variables

None required for development. Future phases will add:

- `VITE_API_URL` - Backend API endpoint
- `VITE_AUTH0_DOMAIN` - Auth0 domain (Phase 4)
- `VITE_AUTH0_CLIENT_ID` - Auth0 client ID (Phase 4)
