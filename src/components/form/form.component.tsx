import React from 'react';
import {FormProvider, UseFormReturn} from 'react-hook-form';
import {EditExpenseSchema, LoginSchema, SignUpSchema} from '../../validators';

type FormProps<T extends LoginSchema | SignUpSchema | EditExpenseSchema> = {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
};

export const Form = <T extends LoginSchema | SignUpSchema | EditExpenseSchema>({
  methods,
  children,
}: FormProps<T>) => {
  return <FormProvider {...methods}>{children}</FormProvider>;
};
