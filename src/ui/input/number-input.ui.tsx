import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {InputProps} from '../../types';
import {EditExpenseSchema} from '../../validators';
import {InputError} from './input-error.ui';
import styles from './input.styles';
import {isZeroNumberFirst} from '../../utils';

export const NumberInput = <T extends Pick<EditExpenseSchema, 'amount'>>({
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
        render={({field: {value, onChange, onBlur}}) => {
          const handleAmountChange = (text: string) => {
            let clean = text
              .replace(',', '.')
              .replace(/[^0-9.]/g, '')
              .replace(/(\..*?)\..*/g, '$1');

            if (isZeroNumberFirst(clean)) {
              clean = clean.slice(1);
            }

            onChange(clean);
          };

          return (
            <TextInput
              style={[
                styles.input,
                error && styles.errorInput,
                isFocused && styles.inputActive,
              ]}
              placeholder={placeholder}
              value={value && String(value)}
              keyboardType="decimal-pad"
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              onChangeText={handleAmountChange}
            />
          );
        }}
      />
      <InputError error={error} />
    </View>
  );
};
