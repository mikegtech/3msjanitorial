# API Contracts (Phase 2)

Documentation for shared contracts between the API and web application.

## Overview

The `@3msjanitorial/contracts` package contains Zod schemas that define the shape of data exchanged between the frontend and backend. This ensures type safety across the stack.

## Lead Contract

### Schema Location
`packages/contracts/src/lead.ts`

### Request: Submit Lead
```typescript
// POST /leads
import type { Lead } from '@3msjanitorial/contracts';

const requestBody: Lead = {
  firstName: "John",
  lastName: "Smith",
  email: "john@example.com",
  phone: "(903) 555-1234",
  companyName: "Smith Enterprises",
  serviceType: "office-cleaning",
  serviceFrequency: "weekly",
  squareFootage: "5000",
  address: {
    street: "123 Main St",
    city: "Greenville",
    state: "TX",
    zipCode: "75401"
  },
  preferredContactMethod: "phone",
  preferredContactTime: "morning",
  message: "Looking for weekly cleaning services",
  howDidYouHear: "google",
  agreedToTerms: true
};
```

### Response: Lead Submission
```typescript
import type { LeadSubmission } from '@3msjanitorial/contracts';

const response: LeadSubmission = {
  ...requestBody,
  id: "uuid-here",
  submittedAt: "2026-01-19T10:30:00Z",
  status: "new"
};
```

### Enums

#### ServiceType
| Value | Label |
|-------|-------|
| `office-cleaning` | Office Cleaning |
| `medical-facility` | Medical Facility |
| `retail-store` | Retail Store |
| `warehouse` | Warehouse / Industrial |
| `church` | Church / Place of Worship |
| `school` | School / Daycare |
| `restaurant` | Restaurant / Food Service |
| `post-construction` | Post-Construction Cleanup |
| `move-in-out` | Move-In / Move-Out Cleaning |
| `other` | Other Commercial Property |

#### ServiceFrequency
| Value | Label |
|-------|-------|
| `one-time` | One-Time Service |
| `daily` | Daily |
| `weekly` | Weekly |
| `bi-weekly` | Bi-Weekly (Every 2 Weeks) |
| `monthly` | Monthly |
| `custom` | Custom Schedule |

#### LeadStatus
| Value | Description |
|-------|-------------|
| `new` | Just submitted, not yet contacted |
| `contacted` | Initial contact made |
| `quoted` | Quote sent to customer |
| `won` | Customer accepted, job booked |
| `lost` | Customer declined or no response |

## Schedule Contract (Phase 3)

### Schema Location
`packages/contracts/src/schedule.ts`

### Event Structure
```typescript
import type { ScheduleEvent } from '@3msjanitorial/contracts';

const event: ScheduleEvent = {
  id: "uuid-here",
  title: "Weekly Office Cleaning - Smith Enterprises",
  description: "Standard weekly cleaning",
  start: "2026-01-20T08:00:00Z",
  end: "2026-01-20T10:00:00Z",
  allDay: false,
  location: {
    address: "123 Main St",
    city: "Greenville",
    state: "TX",
    zipCode: "75401"
  },
  clientId: "client-uuid",
  clientName: "Smith Enterprises",
  assignedTeam: ["team-member-uuid"],
  status: "scheduled",
  serviceType: "office-cleaning",
  estimatedDuration: 120, // minutes
  rrule: {
    freq: "WEEKLY",
    interval: 1,
    byweekday: ["MO"]
  },
  color: "#1565C0",
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-01-19T10:00:00Z"
};
```

### RRule Structure
Based on RFC 5545 (iCalendar):

```typescript
import type { RRule } from '@3msjanitorial/contracts';

// Weekly on Monday
const weeklyRule: RRule = {
  freq: "WEEKLY",
  interval: 1,
  byweekday: ["MO"]
};

// Every 2 weeks on Tuesday and Thursday
const biWeeklyRule: RRule = {
  freq: "WEEKLY",
  interval: 2,
  byweekday: ["TU", "TH"]
};

// Monthly on the 1st and 15th
const monthlyRule: RRule = {
  freq: "MONTHLY",
  interval: 1,
  bymonthday: [1, 15]
};

// Daily for 10 occurrences
const limitedRule: RRule = {
  freq: "DAILY",
  interval: 1,
  count: 10
};
```

### Converting RRule to String
```typescript
import { rruleToString } from '@3msjanitorial/contracts';

const rule: RRule = { freq: "WEEKLY", interval: 1, byweekday: ["MO", "WE", "FR"] };
const rruleString = rruleToString(rule);
// Result: "FREQ=WEEKLY;BYDAY=MO,WE,FR"
```

### Event Status
| Value | Color | Description |
|-------|-------|-------------|
| `scheduled` | Blue | Event is scheduled |
| `confirmed` | Green | Customer confirmed |
| `in-progress` | Orange | Currently happening |
| `completed` | Light Green | Finished |
| `cancelled` | Red | Cancelled |
| `rescheduled` | Purple | Moved to new time |

## API Validation

### NestJS Pipe
```typescript
import { PipeTransform, BadRequestException } from '@nestjs/common';
import { LeadSchema } from '@3msjanitorial/contracts';

export class LeadValidationPipe implements PipeTransform {
  transform(value: unknown) {
    const result = LeadSchema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException(result.error.flatten());
    }
    return result.data;
  }
}
```

### Usage in Controller
```typescript
@Post()
async createLead(@Body(LeadValidationPipe) lead: Lead) {
  return this.leadService.create(lead);
}
```

## Error Responses

### Validation Error
```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": {
    "email": ["Please enter a valid email address"],
    "phone": ["Please enter a valid phone number"]
  }
}
```

### Not Found
```json
{
  "statusCode": 404,
  "message": "Lead not found"
}
```

## Related Documentation

- [API Overview](./overview.md) - API architecture
- [Lead Schema Source](../../../packages/contracts/src/lead.ts)
- [Schedule Schema Source](../../../packages/contracts/src/schedule.ts)
