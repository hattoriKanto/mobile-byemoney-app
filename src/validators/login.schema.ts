import {z} from 'zod';
import {FORM_ERROR_MESSAGES} from '../constants';

export const loginSchema = z.object({
  email: z
    .string({required_error: FORM_ERROR_MESSAGES.email.required_error})
    .trim(),
  password: z
    .string({
      required_error: FORM_ERROR_MESSAGES.password.required_error,
    })
    .trim(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
