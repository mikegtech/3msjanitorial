import type { EventInput } from '@fullcalendar/core';
import type {
  ImportEvent,
  ImportRecurringEvent,
  ScheduleImport,
} from '@3msjanitorial/contracts';

/**
 * Extended properties attached to FullCalendar events
 */
export interface ScheduleEventExtendedProps {
  location?: string;
  description?: string;
  metadata?: Record<string, unknown>;
  isRecurring: boolean;
  originalId: string;
}

/**
 * Convert a one-off ImportEvent to a FullCalendar EventInput
 */
function convertOneOffEvent(event: ImportEvent): EventInput {
  return {
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay ?? false,
    extendedProps: {
      location: event.location,
      description: event.description,
      metadata: event.metadata,
      isRecurring: false,
      originalId: event.id,
    } satisfies ScheduleEventExtendedProps,
  };
}

/**
 * Convert a recurring ImportRecurringEvent to a FullCalendar EventInput
 * Uses the rrule plugin format
 */
function convertRecurringEvent(event: ImportRecurringEvent): EventInput {
  const fcEvent: EventInput = {
    id: event.id,
    title: event.title,
    rrule: event.rrule,
    extendedProps: {
      location: event.location,
      description: event.description,
      metadata: event.metadata,
      isRecurring: true,
      originalId: event.id,
    } satisfies ScheduleEventExtendedProps,
  };

  // Add dtstart if provided (required for rrule plugin if not in RRULE string)
  if (event.dtstart) {
    fcEvent.rrule = {
      freq: extractFreqFromRRule(event.rrule),
      dtstart: event.dtstart,
      ...parseRRuleOptions(event.rrule),
    };
  }

  // Add duration if specified
  if (event.durationMinutes) {
    fcEvent.duration = { minutes: event.durationMinutes };
  }

  // Add excluded dates
  if (event.exdate && event.exdate.length > 0) {
    fcEvent.exdate = event.exdate;
  }

  return fcEvent;
}

/**
 * Extract FREQ value from RRULE string
 */
function extractFreqFromRRule(rrule: string): string {
  const match = rrule.match(/FREQ=(\w+)/);
  return match ? match[1].toLowerCase() : 'weekly';
}

/**
 * Parse additional RRULE options from string
 */
function parseRRuleOptions(rrule: string): Record<string, unknown> {
  const options: Record<string, unknown> = {};

  // Parse INTERVAL
  const intervalMatch = rrule.match(/INTERVAL=(\d+)/);
  if (intervalMatch) {
    options.interval = Number.parseInt(intervalMatch[1], 10);
  }

  // Parse BYDAY
  const bydayMatch = rrule.match(/BYDAY=([A-Z,]+)/);
  if (bydayMatch) {
    options.byweekday = bydayMatch[1].split(',').map((d) => d.toLowerCase());
  }

  // Parse COUNT
  const countMatch = rrule.match(/COUNT=(\d+)/);
  if (countMatch) {
    options.count = Number.parseInt(countMatch[1], 10);
  }

  // Parse UNTIL
  const untilMatch = rrule.match(/UNTIL=([0-9TZ]+)/);
  if (untilMatch) {
    options.until = untilMatch[1];
  }

  return options;
}

/**
 * Transform a validated ScheduleImport into FullCalendar EventInput array
 *
 * @param schedule - The validated schedule import object
 * @returns Array of FullCalendar-compatible event inputs
 */
export function scheduleToFullCalendarEvents(
  schedule: ScheduleImport
): EventInput[] {
  const events: EventInput[] = [];

  // Convert one-off events
  for (const event of schedule.events) {
    events.push(convertOneOffEvent(event));
  }

  // Convert recurring events
  for (const recurring of schedule.recurring) {
    events.push(convertRecurringEvent(recurring));
  }

  return events;
}

/**
 * Type guard to check if extendedProps matches our expected shape
 */
export function isScheduleEventExtendedProps(
  props: unknown
): props is ScheduleEventExtendedProps {
  if (typeof props !== 'object' || props === null) {
    return false;
  }
  const obj = props as Record<string, unknown>;
  return (
    typeof obj.isRecurring === 'boolean' && typeof obj.originalId === 'string'
  );
}
