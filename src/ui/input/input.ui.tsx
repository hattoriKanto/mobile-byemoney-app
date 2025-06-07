import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {InputProps} from '../../types';
import {EditExpenseSchema, LoginSchema, SignUpSchema} from '../../validators';
import {Controller} from 'react-hook-form';
import {InputError} from './input-error.ui';
import styles from './input.styles';

export const Input = <
  T extends
    | LoginSchema
    | SignUpSchema
    | Omit<EditExpenseSchema, 'date' | 'amount'>,
>({
  control,
  label,
  name,
  placeholder,
  error,
}: InputProps<T>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            style={[
              styles.input,
              error && styles.errorInput,
              isFocused && styles.inputActive,
            ]}
            placeholder={placeholder}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            onChangeText={onChange}
          />
        )}
      />
      <InputError error={error} />
    </View>
  );
};
