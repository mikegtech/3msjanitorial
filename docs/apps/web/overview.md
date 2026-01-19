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

## Architecture

```
apps/web/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   └── layout/   # Header, Footer, etc.
│   ├── constants/    # Business info, configs
│   ├── pages/        # Route page components
│   ├── App.tsx       # Router setup
│   ├── main.tsx      # Entry point
│   └── theme.ts      # MUI theme
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
└── tsconfig.json     # TypeScript config
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

### Colors
- **Primary**: Blue (#1565C0) - Trust, professionalism
- **Secondary**: Green (#2E7D32) - Action, nature, cleanliness
- **Background**: Light gray (#FAFAFA) - Clean, professional

### Typography
- **Headings**: Poppins (bold, impactful)
- **Body**: Inter (readable, professional)

### Components
- Rounded corners (8px radius)
- Subtle shadows on cards
- Prominent CTA buttons with shadows

## Phase 2: Calendar View (Planned)

In Phase 3, the web app will include a calendar feature for viewing scheduled cleanings.

### FullCalendar Integration

```tsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
```

### MUI Theme Integration

The calendar will be styled to match the MUI theme:

```tsx
const CalendarWrapper = styled('div')(({ theme }) => ({
  '--fc-border-color': theme.palette.divider,
  '--fc-button-bg-color': theme.palette.primary.main,
  '--fc-event-bg-color': theme.palette.primary.light,
  // ...
}));
```

### Calendar Views
- Month view for overview
- Week view for scheduling
- Day view for detail
- List view for mobile/accessibility

### Recurring Events
- Uses rrule.js for RFC 5545 compliance
- Client-side expansion of recurring events
- Edit single or all occurrences

## Performance Considerations

### Bundle Size
- Tree-shaking enabled
- MUI components imported individually
- Lazy loading for routes (future optimization)

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
