import {z} from 'zod';
import {FORM_ERROR_MESSAGES} from '../constants';

export const editExpenseSchema = z.object({
  title: z
    .string({required_error: FORM_ERROR_MESSAGES.title.required_error})
    .min(2, FORM_ERROR_MESSAGES.title.min_error)
    .max(64, FORM_ERROR_MESSAGES.title.max_error)
    .trim(),
  amount: z.coerce
    .number({
      required_error: FORM_ERROR_MESSAGES.amount.required_error,
      invalid_type_error: FORM_ERROR_MESSAGES.amount.required_error,
    })
    .positive(FORM_ERROR_MESSAGES.amount.postive_error)
    .refine(
      val => {
        const str = val.toString();
        const [, decimals] = str.split('.');
        return !decimals || decimals.length <= 2;
      },
      {
        message: FORM_ERROR_MESSAGES.amount.decimal_error,
      },
    ),
  category: z
    .string({required_error: FORM_ERROR_MESSAGES.category.required_error})
    .min(2, FORM_ERROR_MESSAGES.category.min_error)
    .max(64, FORM_ERROR_MESSAGES.category.max_error)
    .trim(),
  date: z.date({required_error: FORM_ERROR_MESSAGES.category.required_error}),
});

export type EditExpenseSchema = z.infer<typeof editExpenseSchema>;
