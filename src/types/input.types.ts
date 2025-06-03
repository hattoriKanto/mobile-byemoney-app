import {Path, FieldError, Control} from 'react-hook-form';
import {LoginSchema, SignUpSchema} from '../validators';

export type InputProps<T extends LoginSchema | SignUpSchema> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  error?: FieldError;
};
