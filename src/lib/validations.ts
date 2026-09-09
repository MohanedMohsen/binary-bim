import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  country: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
