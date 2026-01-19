# Web Application Overview

The public-facing website for 3MS Janitorial Services.

## Purpose

- Present company services and build trust with potential customers
- Convert visitors into leads through the Request a Quote form
- Provide information about service areas, reviews, and company background
- Serve as the foundation for future customer portal features

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| MUI v7 | Component library |
| React Router v7 | Client-side routing |
| Zod | Form validation |
| Emotion | CSS-in-JS (via MUI) |
| FullCalendar | Calendar rendering |
| rrule | Recurring event patterns |

## Architecture

```
apps/web/
├── public/              # Static assets
│   └── logo.jpeg        # Brand logo
├── src/
│   ├── components/
│   │   ├── calendar/    # Calendar-related components
│   │   │   └── CalendarThemeShell.tsx
│   │   └── layout/      # Header, Footer, MobileCTABar
│   ├── constants/       # Business info, configs
│   ├── pages/           # Route page components
│   │   └── Schedule.tsx # Schedule preview page
│   ├── utils/
│   │   └── scheduleAdapter.ts  # Transform schedule to FC events
│   ├── App.tsx          # Router setup (lazy loads Schedule)
│   ├── main.tsx         # Entry point
│   └── theme.ts         # MUI theme with brand colors
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript config
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with hero, services, reviews |
| `/services` | `Services` | Full service catalog |
| `/about` | `About` | Company story and values |
| `/reviews` | `Reviews` | Customer testimonials |
| `/gallery` | `Gallery` | Work portfolio |
| `/service-area` | `ServiceArea` | Coverage map and locations |
| `/contact` | `Contact` | Request a Quote form |
| `/schedule` | `Schedule` | Schedule Preview (internal JSON visualization) |
| `/privacy` | `Privacy` | Privacy policy |
| `/terms` | `Terms` | Terms of service |

## Key Features

### Mobile-First Design
- Responsive layout using MUI Grid
- Sticky mobile CTA bar for easy contact
- Touch-friendly navigation drawer

### Request a Quote Form
- Comprehensive lead capture form
- Zod validation using shared contracts
- localStorage persistence (API in Phase 2)
- Success state with next steps

### Trust Elements
- Trust badges (insured, bonded, background checked)
- Customer reviews with ratings
- Service-specific feature lists
- Local service area emphasis

## Theme

### Brand Colors (derived from logo)
- **Primary Navy**: #002080 - Trust, professionalism (logo main color)
- **Deep Blue**: #000040 - Gradients, dark accents
- **Accent Gold**: #A09060 - Highlights, recurring events
- **Light Wash**: #C0E0E0 - Today highlight, backgrounds
- **Background**: Light gray (#FAFAFA) - Clean, professional

### Typography
- **Headings**: Poppins (bold, impactful)
- **Body**: Inter (readable, professional)

### Components
- Rounded corners (12px radius)
- Subtle shadows on cards with hover lift
- Gradient buttons with colored shadows
- Aurora-style visual polish

## Schedule Preview (/schedule)

Internal tool for visualizing and validating schedule JSON before connecting to chat/NL scheduling.

### JSON Contract

Schedules are imported as JSON validated against `ScheduleImportSchema` from `@3msjanitorial/contracts`:

```typescript
interface ScheduleImport {
  timezone: string;           // e.g., "America/Chicago"
  events: ImportEvent[];      // One-off events
  recurring: ImportRecurringEvent[];  // RRULE-based recurring events
}
```

### Features
- **JSON Editor**: Paste or upload schedule JSON with syntax highlighting
- **Validation**: Real-time Zod validation with detailed error paths
- **Calendar View**: FullCalendar rendering with month/week/day views
- **Event Details**: Click events to view location, description, metadata
- **Persistence**: Valid schedules saved to localStorage

### How It Will Connect to Chat/NL

In Phase 4, the agent service will:
1. Parse natural language scheduling requests
2. Generate valid schedule JSON conforming to `ScheduleImportSchema`
3. Send JSON to web client for preview/confirmation
4. On confirmation, persist to database via API

### FullCalendar Integration

```tsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
```

### MUI Theme Shell

Calendar is wrapped in `CalendarThemeShell` component that:
- Derives CSS variables from MUI theme
- Scopes overrides to `.fc-mui` wrapper class
- Styles toolbar buttons to match MUI appearance
- Applies brand colors to events and highlights

```tsx
const CalendarWrapper = styled('div')(({ theme }) => ({
  '--fc-border-color': theme.palette.divider,
  '--fc-button-bg-color': brandColors.navy,
  '--fc-event-bg-color': brandColors.navy,
  '--fc-today-bg-color': alpha(brandColors.lightWash, 0.3),
  // ...
}));
```

### Calendar Views
- Month view for overview
- Week view for scheduling detail
- Day view for single-day focus
- nowIndicator shows current time

### Recurring Events
- Uses rrule.js for RFC 5545 compliance
- Client-side expansion of recurring events
- `exdate` support for excluded dates
- Styled with accent gold color

## Performance Considerations

### Bundle Size
- Tree-shaking enabled
- MUI components imported individually
- Schedule route lazy-loaded (FullCalendar + rrule add ~100KB)

### Caching
- Static assets cached via Vite
- CDN caching in production (via Cloudflare)

### Accessibility
- MUI components have built-in a11y
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliant

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Phase 2 | Backend API endpoint |
| `VITE_AUTH0_DOMAIN` | Phase 4 | Auth0 domain |
| `VITE_AUTH0_CLIENT_ID` | Phase 4 | Auth0 client ID |

## Development

```bash
# Start dev server
pnpm --filter @3msjanitorial/web dev

# Build for production
pnpm --filter @3msjanitorial/web build

# Preview production build
pnpm --filter @3msjanitorial/web preview

# Type check
pnpm --filter @3msjanitorial/web typecheck
```

## Related Documentation

- [UX Notes](./ux-notes.md) - Design decisions and user experience
- [Content](./content.md) - Copy and messaging guidelines
- [Local Dev Runbook](../../runbooks/local-dev.md) - Development setup
