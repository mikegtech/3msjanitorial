# AI Context Document

This document provides context for AI coding agents working on the 3MS Janitorial project. Read this first when resuming work on the codebase.

## Rehydration

**Project**: 3MS Janitorial Services - Commercial cleaning company website and business platform for Greenville, TX and Hunt County area.

**Tech Stack**: pnpm monorepo with Turborepo. Frontend uses Vite + React 19 + TypeScript + MUI v7. Validation via Zod with shared contracts in `packages/contracts`. Linting/formatting via Biome (not ESLint/Prettier). Future API will use NestJS, future agent service will use Python with uv/hatchling.

**Current State (Phase 1)**: Web app complete with all pages, routing, theming, and contact form with Zod validation. Form submissions stored in localStorage pending API. Contracts package exports Lead and Schedule schemas used across apps.

**Key Files**:
- `apps/web/src/App.tsx` - Main router with all page routes
- `apps/web/src/theme.ts` - MUI theme (primary blue, secondary green)
- `apps/web/src/pages/Contact.tsx` - Quote form with Zod validation
- `packages/contracts/src/lead.ts` - Lead/quote request schema
- `packages/contracts/src/schedule.ts` - Calendar event schema with RRULE support
- `turbo.json` - Build pipeline configuration
- `biome.json` - Lint and format rules

**Business Domain**: Commercial janitorial services. Primary CTA is "Request a Quote", secondary is "Call Now". Target customers are offices, medical facilities, retail, warehouses, churches, schools in the Greenville TX area.

---

## Phased Approach

### Phase 1: Web Application (CURRENT)
- [x] Monorepo setup with pnpm + Turborepo
- [x] Vite + React + TypeScript + MUI web application
- [x] All pages: Home, Services, About, Reviews, Gallery, Service Area, Contact, Privacy, Terms
- [x] Request a Quote form with Zod validation
- [x] Mobile-first responsive design with sticky CTA bar
- [x] Shared contracts package with Lead and Schedule schemas
- [x] Biome configuration for linting/formatting
- [x] Documentation structure

### Phase 2: API + Leads Endpoint
- [ ] NestJS API application in `apps/api`
- [ ] PostgreSQL database with Prisma ORM
- [ ] `/leads` endpoint to receive quote form submissions
- [ ] Email notifications for new leads
- [ ] Admin authentication (basic JWT)
- [ ] Connect web form to API

### Phase 3: Calendar + Scheduling
- [ ] FullCalendar integration in web app with MUI theming
- [ ] rrule plugin for recurring events
- [ ] Schedule/event API endpoints
- [ ] Client portal for viewing scheduled cleanings
- [ ] Admin dashboard for managing schedule

### Phase 4: Chatbot + Agent Service + Auth0
- [ ] Python agent service in `apps/agent` using uv/hatchling
- [ ] LLM-powered chatbot for answering customer questions
- [ ] Scheduling assistant for booking appointments
- [ ] Auth0 integration for customer/admin authentication
- [ ] Role-based access control

### Phase 5: Observability + Deployment
- [ ] Traefik reverse proxy configuration
- [ ] Cloudflare Tunnel setup
- [ ] Promtail log shipping to Loki
- [ ] Grafana dashboards for monitoring
- [ ] Deployment automation scripts
- [ ] Health checks and alerting

---

## Non-Goals for Current Phase

- **No backend API**: Form submissions go to localStorage only
- **No database**: Data persistence is client-side only
- **No authentication**: No login/signup functionality
- **No calendar UI**: Schema ready but UI is Phase 3
- **No chatbot**: Agent service is Phase 4
- **No deployment**: Local development only
- **No email sending**: Notifications come with API in Phase 2
- **No image uploads**: Gallery shows placeholders
- **No analytics**: No tracking scripts yet

---

## Decisions and Conventions

### Naming Conventions
- **Packages**: `@3msjanitorial/<name>` scoped packages
- **Components**: PascalCase, one component per file
- **Files**: kebab-case for non-component files, PascalCase for React components
- **Routes**: lowercase with hyphens (e.g., `/service-area`)
- **Zod Schemas**: PascalCase with `Schema` suffix (e.g., `LeadSchema`)
- **Types**: Inferred from Zod schemas using `z.infer<typeof Schema>`

### Package Structure
```
packages/
  contracts/     # Shared Zod schemas and types
  ui/            # Shared UI components (future)
  config/        # Shared configuration (if needed)

apps/
  web/           # Vite + React frontend
  api/           # NestJS backend (Phase 2)
  agent/         # Python AI service (Phase 4)
```

### Zod Contract Approach
- All API request/response shapes defined in `packages/contracts`
- Schemas export both validation logic and TypeScript types
- Frontend and backend import from contracts for type safety
- Helper functions (like `rruleToString`) co-located with schemas
- Label mappings (like `serviceTypeLabels`) exported for UI use

### Turborepo Usage
- `pnpm dev` - Run all apps in development mode
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages with Biome
- `pnpm typecheck` - TypeScript type checking
- Caching enabled for build, lint, typecheck tasks
- `^build` dependency ensures packages build before apps

### Biome Configuration
- Using Biome instead of ESLint + Prettier
- Single quotes, trailing commas (ES5), 2-space indent
- 100 character line width
- Import sorting enabled
- Strict rules: no unused imports/variables, use const, import types

### TypeScript Configuration
- `tsconfig.base.json` at root with shared settings
- Each package extends base config
- Strict mode enabled
- ES2022 target, ESNext modules
- Path aliases: `@/*` maps to `./src/*` in web app

### MUI Theme
- Primary: Blue (#1565C0) - trust, professionalism
- Secondary: Green (#2E7D32) - action buttons, CTAs
- Typography: Inter for body, Poppins for headings
- Border radius: 8px standard
- Button shadows for depth on primary actions

### Form Handling
- Controlled components with React state
- Zod validation on submit
- Error messages from Zod displayed per-field
- Success state shows confirmation, hides form
- localStorage used for persistence until API ready

---

## Quick Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev              # Start all apps
pnpm --filter web dev # Start only web

# Building
pnpm build            # Build all
pnpm --filter @3msjanitorial/contracts build

# Quality
pnpm lint             # Check linting
pnpm lint:fix         # Auto-fix lint issues
pnpm typecheck        # Type check
pnpm format           # Format all files

# Clean
pnpm clean            # Remove build artifacts
```

---

## Contact/Support

- Domain: 3msjanitorial.com
- Business phone (placeholder): (903) 555-1234
- Business email: info@3msjanitorial.com
- Service area: Greenville, TX and Hunt County
