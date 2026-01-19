# API Application Overview (Phase 2)

The backend API for 3MS Janitorial Services. This application will be implemented in Phase 2.

## Purpose

- Receive and store lead submissions from the web form
- Send email notifications for new leads
- Provide endpoints for future features (calendar, auth, etc.)
- Serve as the data layer for all client applications

## Planned Tech Stack

| Technology | Purpose |
|------------|---------|
| NestJS | API framework |
| TypeScript | Type safety |
| Prisma | Database ORM |
| PostgreSQL | Database |
| Zod | Runtime validation |
| Nodemailer | Email sending |

## Planned Architecture

```
apps/api/
├── src/
│   ├── modules/
│   │   ├── leads/          # Lead management
│   │   ├── schedule/       # Calendar events (Phase 3)
│   │   ├── auth/           # Authentication (Phase 4)
│   │   └── health/         # Health checks
│   ├── common/
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   └── pipes/
│   ├── app.module.ts
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── test/
└── package.json
```

## Planned Endpoints

### Phase 2: Leads

| Method | Path | Description |
|--------|------|-------------|
| POST | `/leads` | Submit new lead |
| GET | `/leads` | List leads (admin) |
| GET | `/leads/:id` | Get lead by ID |
| PATCH | `/leads/:id` | Update lead status |

### Phase 3: Schedule

| Method | Path | Description |
|--------|------|-------------|
| GET | `/events` | Get events for date range |
| POST | `/events` | Create event |
| PUT | `/events/:id` | Update event |
| DELETE | `/events/:id` | Delete event |

### Phase 4: Authentication

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/callback` | Auth0 callback |
| GET | `/auth/me` | Get current user |
| POST | `/auth/logout` | Logout |

## Contract Integration

The API will use Zod schemas from `@3msjanitorial/contracts`:

```typescript
import { LeadSchema, ScheduleEventSchema } from '@3msjanitorial/contracts';

// Validate incoming request
const validated = LeadSchema.parse(request.body);

// Type safety guaranteed
const lead: Lead = validated;
```

## Database Schema (Planned)

### Leads Table
```prisma
model Lead {
  id                    String   @id @default(uuid())
  firstName             String
  lastName              String
  email                 String
  phone                 String
  companyName           String?
  serviceType           String
  serviceFrequency      String
  squareFootage         String?
  street                String
  city                  String
  state                 String
  zipCode               String
  preferredContactMethod String
  preferredContactTime  String?
  message               String?
  howDidYouHear         String?
  status                String   @default("new")
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
}
```

### Events Table (Phase 3)
```prisma
model Event {
  id                   String   @id @default(uuid())
  title                String
  description          String?
  start                DateTime
  end                  DateTime
  allDay               Boolean  @default(false)
  location             Json?
  clientId             String?
  clientName           String?
  status               String   @default("scheduled")
  serviceType          String?
  rrule                Json?
  recurrenceId         String?
  isRecurrenceException Boolean @default(false)
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}
```

## Email Notifications

When a new lead is submitted:
1. Store lead in database
2. Send notification email to business
3. Send confirmation email to customer (optional)

Email provider options:
- SendGrid
- AWS SES
- Postmark
- SMTP server

## Authentication (Phase 4)

Auth0 integration for:
- Customer portal access
- Admin dashboard access
- Role-based permissions (admin, staff, customer)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | JWT signing secret |
| `SMTP_HOST` | Email server host |
| `SMTP_PORT` | Email server port |
| `SMTP_USER` | Email username |
| `SMTP_PASS` | Email password |
| `FROM_EMAIL` | Sender email address |
| `AUTH0_DOMAIN` | Auth0 domain (Phase 4) |
| `AUTH0_AUDIENCE` | Auth0 API audience (Phase 4) |

## Related Documentation

- [Contracts](./contracts.md) - Shared schemas and types
- [ADR-0001](../../adr/ADR-0001-monorepo-tooling.md) - Tooling decisions
