import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {InputProps} from '../../types';
import {CreateExpenseSchema} from '../../validators';
import styles from './input.styles';
import {InputError} from './input-error.ui';
import {COLORS} from '../../constants';
import {getStringifyDate} from '../../utils';

import CalendarIcon from '../../assets/callendar.svg';

export const DateInput = <T extends Pick<CreateExpenseSchema, 'date'>>({
  control,
  label,
  name,
  error,
}: InputProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange}}) => {
          const stringifyValue = getStringifyDate(value);

          return (
            <>
              <TouchableOpacity
                style={[styles.dateInput, error && styles.errorInput]}
                onPress={() => setIsOpen(true)}>
                <Text style={styles.dateText}>{stringifyValue}</Text>
                <CalendarIcon height="100%" color={COLORS.ORANGE} />
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                date={value}
                open={isOpen}
                onConfirm={date => {
                  setIsOpen(false);
                  onChange(date);
                }}
                onCancel={() => {
                  setIsOpen(false);
                }}
              />
            </>
          );
        }}
      />
      <InputError error={error} />
    </View>
  );
};
