import { z } from 'zod';

export const ServiceTypeSchema = z.enum([
  'office-cleaning',
  'medical-facility',
  'retail-store',
  'warehouse',
  'church',
  'school',
  'restaurant',
  'post-construction',
  'move-in-out',
  'other',
]);

export type ServiceType = z.infer<typeof ServiceTypeSchema>;

export const ServiceFrequencySchema = z.enum([
  'one-time',
  'daily',
  'weekly',
  'bi-weekly',
  'monthly',
  'custom',
]);

export type ServiceFrequency = z.infer<typeof ServiceFrequencySchema>;

export const LeadSourceSchema = z.enum([
  'google',
  'facebook',
  'referral',
  'repeat-customer',
  'other',
]);

export type LeadSource = z.infer<typeof LeadSourceSchema>;

export const LeadSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be 50 characters or less'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be 50 characters or less'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  companyName: z.string().max(100, 'Company name must be 100 characters or less').optional(),
  serviceType: ServiceTypeSchema,
  serviceFrequency: ServiceFrequencySchema,
  squareFootage: z
    .string()
    .max(20, 'Square footage must be 20 characters or less')
    .optional(),
  address: z.object({
    street: z.string().min(1, 'Street address is required').max(200, 'Address is too long'),
    city: z.string().min(1, 'City is required').max(100, 'City name is too long'),
    state: z.string().length(2, 'Please use 2-letter state code'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
  }),
  preferredContactMethod: z.enum(['phone', 'email', 'text']),
  preferredContactTime: z.enum(['morning', 'afternoon', 'evening', 'anytime']).optional(),
  message: z.string().max(2000, 'Message must be 2000 characters or less').optional(),
  howDidYouHear: LeadSourceSchema.optional(),
  agreedToTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and privacy policy' }),
  }),
});

export type Lead = z.infer<typeof LeadSchema>;

export const LeadSubmissionSchema = LeadSchema.extend({
  id: z.string().uuid().optional(),
  submittedAt: z.string().datetime().optional(),
  status: z.enum(['new', 'contacted', 'quoted', 'won', 'lost']).default('new'),
});

export type LeadSubmission = z.infer<typeof LeadSubmissionSchema>;

export const serviceTypeLabels: Record<ServiceType, string> = {
  'office-cleaning': 'Office Cleaning',
  'medical-facility': 'Medical Facility',
  'retail-store': 'Retail Store',
  warehouse: 'Warehouse / Industrial',
  church: 'Church / Place of Worship',
  school: 'School / Daycare',
  restaurant: 'Restaurant / Food Service',
  'post-construction': 'Post-Construction Cleanup',
  'move-in-out': 'Move-In / Move-Out Cleaning',
  other: 'Other Commercial Property',
};

export const serviceFrequencyLabels: Record<ServiceFrequency, string> = {
  'one-time': 'One-Time Service',
  daily: 'Daily',
  weekly: 'Weekly',
  'bi-weekly': 'Bi-Weekly (Every 2 Weeks)',
  monthly: 'Monthly',
  custom: 'Custom Schedule',
};

export const leadSourceLabels: Record<LeadSource, string> = {
  google: 'Google Search',
  facebook: 'Facebook',
  referral: 'Referral from Friend/Business',
  'repeat-customer': 'Returning Customer',
  other: 'Other',
};
