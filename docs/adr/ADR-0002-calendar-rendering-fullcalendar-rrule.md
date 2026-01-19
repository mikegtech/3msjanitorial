# ADR-0002: Calendar Rendering with FullCalendar and rrule

## Status

Accepted (implementation planned for Phase 3)

## Date

2026-01-19

## Context

The 3MS Janitorial application needs a calendar system to:

1. Display scheduled cleaning appointments
2. Allow staff to view their assignments
3. Support recurring schedules (weekly office cleaning, bi-weekly services, etc.)
4. Integrate with the existing MUI-themed interface

Commercial cleaning services typically have recurring schedules:
- Daily cleaning for medical facilities
- Weekly cleaning for offices
- Bi-weekly cleaning for smaller businesses
- Monthly deep cleaning services

The calendar must handle these patterns without storing individual events for every occurrence.

## Decision

### Calendar Library: FullCalendar (Standard License)

We will use FullCalendar Standard (free tier) for calendar rendering.

**Rationale:**
- Industry-standard calendar library for web applications
- Extensive view options (month, week, day, list)
- Good documentation and community support
- Standard license is free and sufficient for our needs
- Supports custom rendering for MUI integration

**Views to implement:**
- `dayGridMonth` - Monthly overview
- `timeGridWeek` - Weekly detailed view
- `timeGridDay` - Daily detailed view
- `listWeek` - List view for mobile/accessibility

### Recurrence: rrule Plugin + rrule.js

We will use FullCalendar's rrule plugin with the rrule.js library.

**Rationale:**
- RFC 5545 (iCalendar) compliant recurrence rules
- Handles complex patterns (every 2nd Tuesday, etc.)
- Client-side expansion of recurring events
- Well-tested library with edge case handling
- Enables import/export with standard calendar formats

**Schema design (in packages/contracts):**
```typescript
const RRuleSchema = z.object({
  freq: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']),
  interval: z.number().int().positive().default(1),
  count: z.number().int().positive().optional(),
  until: z.string().datetime().optional(),
  byweekday: z.array(z.enum(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'])).optional(),
  bymonthday: z.array(z.number().int().min(1).max(31)).optional(),
  // ... additional fields
});

const ScheduleEventSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  start: z.string().datetime(),
  end: z.string().datetime(),
  rrule: RRuleSchema.optional(),
  // ... additional fields
});
```

### MUI Integration Approach

FullCalendar will be wrapped in MUI's theming system:

1. Create a `CalendarWrapper` component that applies MUI theme colors
2. Use CSS variables to map MUI palette to FullCalendar styles
3. Custom event rendering using MUI components (Chip, Card, etc.)
4. Toolbar replaced with MUI components for view switching

**Example integration pattern:**
```tsx
const theme = useTheme();

const calendarStyles = {
  '--fc-border-color': theme.palette.divider,
  '--fc-button-bg-color': theme.palette.primary.main,
  '--fc-button-hover-bg-color': theme.palette.primary.dark,
  '--fc-event-bg-color': theme.palette.primary.light,
  // ...
};
```

## Alternatives Considered

### react-big-calendar
- Simpler API
- Less feature-rich
- Poorer TypeScript support
- Would need separate rrule handling

### Custom calendar implementation
- Full control over styling
- Significant development effort
- Many edge cases to handle
- Not recommended for MVP

### FullCalendar Premium
- Additional scheduler views
- Resource timeline features
- Significant cost
- Standard license sufficient for Phase 3

### Server-side recurrence expansion
- Would store expanded events in database
- Storage and sync complexity
- Harder to modify recurring events
- Client-side expansion is simpler

## Consequences

### Positive
- Professional calendar UI with minimal custom code
- Standard recurrence format enables future integrations (Google Calendar, Outlook)
- MUI theming ensures visual consistency
- Schema already defined, ready for Phase 3

### Negative
- FullCalendar adds ~100KB to bundle (tree-shakeable)
- Learning curve for rrule syntax
- Custom MUI styling requires CSS overrides

### Neutral
- Will need to handle timezone considerations
- Exception handling for recurring events needs careful design

## Implementation Notes (for Phase 3)

### Package installation
```bash
pnpm add @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @fullcalendar/rrule rrule
```

### Key components to create
- `Calendar.tsx` - Main calendar component
- `CalendarToolbar.tsx` - MUI-based toolbar
- `EventCard.tsx` - Custom event rendering
- `RecurrenceEditor.tsx` - UI for creating rrule patterns

### API endpoints needed (Phase 2/3)
- `GET /events` - Fetch events for date range
- `POST /events` - Create event (with optional rrule)
- `PUT /events/:id` - Update event
- `DELETE /events/:id` - Delete event (with recurrence options)

## References

- [FullCalendar Documentation](https://fullcalendar.io/docs)
- [FullCalendar React Integration](https://fullcalendar.io/docs/react)
- [rrule.js Documentation](https://github.com/jakubroztocil/rrule)
- [RFC 5545 - iCalendar](https://datatracker.ietf.org/doc/html/rfc5545)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)
