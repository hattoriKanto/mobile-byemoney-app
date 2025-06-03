import {View, Pressable, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import {useState} from 'react';
import {InputProps} from '../../types';
import {LoginSchema, SignUpSchema} from '../../validators';
import {InputError} from './input-error.ui';
import {COLORS} from '../../constants';
import styles from './input.styles';

import ShowPassword from '../../assets/password-show.svg';
import HidePassword from '../../assets/password-hide.svg';

export const PasswordInput = <T extends LoginSchema | SignUpSchema>({
  control,
  label,
  name,
  placeholder,
  error,
}: InputProps<T>) => {
  const [isPasswordVisible, setIsVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsVisible(!isPasswordVisible);
  };

  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <View
            style={[
              styles.passwordContainer,
              error && styles.errorInput,
              isFocused && styles.inputActive,
            ]}>
            <TextInput
              style={styles.passwordInput}
              value={value}
              placeholder={placeholder}
              onChangeText={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              secureTextEntry={!isPasswordVisible}
            />
            <Pressable onPress={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <HidePassword color={COLORS.ORANGE} width={24} />
              ) : (
                <ShowPassword color={COLORS.ORANGE} width={24} />
              )}
            </Pressable>
          </View>
        )}
      />
      <InputError error={error} />
    </View>
  );
};
