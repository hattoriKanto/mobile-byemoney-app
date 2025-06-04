import {z} from 'zod';
import {FORM_ERROR_MESSAGES} from '../constants';

const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;

export const signUpSchema = z
  .object({
    email: z
      .string({required_error: FORM_ERROR_MESSAGES.email.required_error})
      .email(FORM_ERROR_MESSAGES.email.match_pattern_error)
      .trim(),
    password: z
      .string({required_error: FORM_ERROR_MESSAGES.password.required_error})
      .min(8, FORM_ERROR_MESSAGES.password.min_error)
      .regex(PASSWORD_REGEX, FORM_ERROR_MESSAGES.password.match_pattern_error)
      .trim(),
    confirmPassword: z
      .string({
        required_error: FORM_ERROR_MESSAGES.confirmPassword.required_error,
      })
      .trim(),
  })
  .refine(data => data.confirmPassword === data.password, {
    message: FORM_ERROR_MESSAGES.password.match_password_error,
    path: ['confirmPassword'],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
