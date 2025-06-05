import {Path, FieldError, Control} from 'react-hook-form';
import {CreateExpenseSchema, LoginSchema, SignUpSchema} from '../validators';

export type InputProps<
  T extends
    | LoginSchema
    | SignUpSchema
    | Omit<CreateExpenseSchema, 'date' | 'amount'>
    | Pick<CreateExpenseSchema, 'amount'>
    | Pick<CreateExpenseSchema, 'date'>,
> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  error?: FieldError;
};
