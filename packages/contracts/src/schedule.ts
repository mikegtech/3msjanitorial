import { z } from 'zod';

export const RecurrenceFrequencySchema = z.enum([
  'DAILY',
  'WEEKLY',
  'MONTHLY',
  'YEARLY',
]);

export type RecurrenceFrequency = z.infer<typeof RecurrenceFrequencySchema>;

export const WeekdaySchema = z.enum(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']);

export type Weekday = z.infer<typeof WeekdaySchema>;

export const RRuleSchema = z.object({
  freq: RecurrenceFrequencySchema,
  interval: z.number().int().positive().default(1),
  count: z.number().int().positive().optional(),
  until: z.string().datetime().optional(),
  byweekday: z.array(WeekdaySchema).optional(),
  bymonthday: z.array(z.number().int().min(1).max(31)).optional(),
  bymonth: z.array(z.number().int().min(1).max(12)).optional(),
  byhour: z.array(z.number().int().min(0).max(23)).optional(),
  byminute: z.array(z.number().int().min(0).max(59)).optional(),
  wkst: WeekdaySchema.default('MO'),
});

export type RRule = z.infer<typeof RRuleSchema>;

export const EventStatusSchema = z.enum([
  'scheduled',
  'confirmed',
  'in-progress',
  'completed',
  'cancelled',
  'rescheduled',
]);

export type EventStatus = z.infer<typeof EventStatusSchema>;

export const ScheduleEventSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, 'Event title is required').max(200),
  description: z.string().max(2000).optional(),
  start: z.string().datetime(),
  end: z.string().datetime(),
  allDay: z.boolean().default(false),
  location: z
    .object({
      address: z.string(),
      city: z.string(),
      state: z.string(),
      zipCode: z.string(),
      notes: z.string().optional(),
    })
    .optional(),
  clientId: z.string().uuid().optional(),
  clientName: z.string().optional(),
  assignedTeam: z.array(z.string().uuid()).default([]),
  status: EventStatusSchema.default('scheduled'),
  serviceType: z.string().optional(),
  estimatedDuration: z.number().int().positive().optional(),
  notes: z.string().max(2000).optional(),
  rrule: RRuleSchema.optional(),
  recurrenceId: z.string().uuid().optional(),
  isRecurrenceException: z.boolean().default(false),
  originalStart: z.string().datetime().optional(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type ScheduleEvent = z.infer<typeof ScheduleEventSchema>;

export const CreateScheduleEventSchema = ScheduleEventSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CreateScheduleEvent = z.infer<typeof CreateScheduleEventSchema>;

export const UpdateScheduleEventSchema = CreateScheduleEventSchema.partial();

export type UpdateScheduleEvent = z.infer<typeof UpdateScheduleEventSchema>;

export const CalendarViewSchema = z.enum([
  'dayGridMonth',
  'timeGridWeek',
  'timeGridDay',
  'listWeek',
  'listMonth',
]);

export type CalendarView = z.infer<typeof CalendarViewSchema>;

export const CalendarQuerySchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  clientId: z.string().uuid().optional(),
  teamMemberId: z.string().uuid().optional(),
  status: z.array(EventStatusSchema).optional(),
  serviceType: z.string().optional(),
});

export type CalendarQuery = z.infer<typeof CalendarQuerySchema>;

export function rruleToString(rrule: RRule): string {
  const parts: string[] = [`FREQ=${rrule.freq}`];

  if (rrule.interval && rrule.interval !== 1) {
    parts.push(`INTERVAL=${rrule.interval}`);
  }
  if (rrule.count) {
    parts.push(`COUNT=${rrule.count}`);
  }
  if (rrule.until) {
    parts.push(`UNTIL=${rrule.until.replace(/[-:]/g, '').replace('.000', '')}`);
  }
  if (rrule.byweekday?.length) {
    parts.push(`BYDAY=${rrule.byweekday.join(',')}`);
  }
  if (rrule.bymonthday?.length) {
    parts.push(`BYMONTHDAY=${rrule.bymonthday.join(',')}`);
  }
  if (rrule.bymonth?.length) {
    parts.push(`BYMONTH=${rrule.bymonth.join(',')}`);
  }
  if (rrule.wkst && rrule.wkst !== 'MO') {
    parts.push(`WKST=${rrule.wkst}`);
  }

  return parts.join(';');
}

export const eventStatusLabels: Record<EventStatus, string> = {
  scheduled: 'Scheduled',
  confirmed: 'Confirmed',
  'in-progress': 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
  rescheduled: 'Rescheduled',
};

export const eventStatusColors: Record<EventStatus, string> = {
  scheduled: '#2196F3',
  confirmed: '#4CAF50',
  'in-progress': '#FF9800',
  completed: '#8BC34A',
  cancelled: '#F44336',
  rescheduled: '#9C27B0',
};

// =============================================================================
// SCHEDULE IMPORT SCHEMAS
// Simplified schemas for JSON import/export (Schedule Preview feature)
// =============================================================================

/**
 * Schema for one-off (non-recurring) events in imported schedules
 */
export const ImportEventSchema = z.object({
  id: z.string().min(1, 'Event ID is required'),
  title: z.string().min(1, 'Event title is required').max(200),
  start: z.string().refine(
    (val) => !Number.isNaN(Date.parse(val)),
    'Start must be a valid date/time string (ISO 8601 preferred)'
  ),
  end: z
    .string()
    .refine(
      (val) => !Number.isNaN(Date.parse(val)),
      'End must be a valid date/time string (ISO 8601 preferred)'
    )
    .optional(),
  allDay: z.boolean().optional().default(false),
  location: z.string().max(500).optional(),
  description: z.string().max(2000).optional(),
  metadata: z.record(z.unknown()).optional(),
});

export type ImportEvent = z.infer<typeof ImportEventSchema>;

/**
 * Schema for recurring events in imported schedules
 * Uses RFC 5545 RRULE strings for maximum flexibility
 */
export const ImportRecurringEventSchema = z.object({
  id: z.string().min(1, 'Event ID is required'),
  title: z.string().min(1, 'Event title is required').max(200),
  rrule: z.string().min(1, 'RRULE string is required'),
  dtstart: z
    .string()
    .refine(
      (val) => !Number.isNaN(Date.parse(val)),
      'dtstart must be a valid date/time string (ISO 8601 preferred)'
    )
    .optional(),
  durationMinutes: z.number().int().positive().optional(),
  exdate: z
    .array(
      z.string().refine(
        (val) => !Number.isNaN(Date.parse(val)),
        'Each exdate must be a valid date/time string'
      )
    )
    .optional(),
  location: z.string().max(500).optional(),
  description: z.string().max(2000).optional(),
  metadata: z.record(z.unknown()).optional(),
});

export type ImportRecurringEvent = z.infer<typeof ImportRecurringEventSchema>;

/**
 * Main schema for importing schedule JSON
 * This is the top-level structure validated when pasting/uploading
 */
export const ScheduleImportSchema = z.object({
  timezone: z.string().default('America/Chicago'),
  events: z.array(ImportEventSchema).default([]),
  recurring: z.array(ImportRecurringEventSchema).default([]),
});

export type ScheduleImport = z.infer<typeof ScheduleImportSchema>;

/**
 * Example schedule for demonstration purposes
 */
export const exampleScheduleImport: ScheduleImport = {
  timezone: 'America/Chicago',
  events: [
    {
      id: 'walkthrough-001',
      title: 'On-site walkthrough - ABC Corp',
      start: '2026-01-20T10:00:00-06:00',
      end: '2026-01-20T10:30:00-06:00',
      allDay: false,
      location: '123 Main St, Greenville, TX',
      description: 'Initial walkthrough to assess cleaning needs and provide quote.',
      metadata: { type: 'consultation', clientName: 'ABC Corp' },
    },
  ],
  recurring: [
    {
      id: 'evening-clean-001',
      title: 'Evening Cleaning - XYZ Office',
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
      dtstart: '2026-01-06T18:00:00-06:00',
      durationMinutes: 90,
      exdate: ['2026-01-20T18:00:00-06:00'], // MLK Day - office closed
      location: '456 Commerce Blvd, Greenville, TX',
      description: 'Regular evening cleaning service. Includes vacuuming, trash, restrooms.',
      metadata: { type: 'regular', serviceType: 'office-cleaning' },
    },
  ],
};
