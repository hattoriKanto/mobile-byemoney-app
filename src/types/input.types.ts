import {Path, FieldError, Control} from 'react-hook-form';
import {EditExpenseSchema, LoginSchema, SignUpSchema} from '../validators';

export type InputProps<
  T extends
    | LoginSchema
    | SignUpSchema
    | Omit<EditExpenseSchema, 'date' | 'amount'>
    | Pick<EditExpenseSchema, 'amount'>
    | Pick<EditExpenseSchema, 'date'>,
> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  error?: FieldError;
};
