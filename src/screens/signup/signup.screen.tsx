import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {signUpSchema, SignUpSchema} from '../../validators';
import {Form} from '../../components';
import {
  AppContainer,
  FormHeader,
  FormFooter,
  Logo,
  Input,
  PasswordInput,
  MainButton,
  FormFooterText,
  Loader,
} from '../../ui';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {handleUserSignUp} from '../../api';
import {TOAST_MESSAGES} from '../../constants';

export const SighUpScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);

    const {success, message, error} = await handleUserSignUp(data);

    if (success) {
      if (message === TOAST_MESSAGES.signIn.success) {
        navigation.navigate(NAVIGATION_KEYS.BOTTOM_TABS);
      }

      Toast.show({
        text1: message,
        type: 'success',
      });
    } else {
      Toast.show({
        text1: error?.message,
        type: 'error',
      });

      if (error?.code === 'invalid_credentials') {
        methods.setError('email', {message: error?.message});
        methods.setError('password', {message: error?.message});
        methods.setError('confirmPassword', {message: error?.message});
      }
    }

    setIsLoading(false);
  };

  const onLoginInPress = () => {
    navigation.navigate(NAVIGATION_KEYS.LOG_IN);
  };

  return (
    <AppContainer>
      <Form methods={methods}>
        <FormHeader>
          <Logo />
          {isLoading && <Loader />}
          {!isLoading && (
            <>
              <Input
                control={methods.control}
                name="email"
                label="Email"
                placeholder="Enter your email address"
                error={methods.formState.errors.email}
              />
              <PasswordInput
                control={methods.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                error={methods.formState.errors.password}
              />
              <PasswordInput
                control={methods.control}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                error={methods.formState.errors.confirmPassword}
              />
            </>
          )}
        </FormHeader>
        {!isLoading && (
          <FormFooter>
            <MainButton onPress={methods.handleSubmit(onSubmit)}>
              Sign Up
            </MainButton>
            <FormFooterText
              text="Have an account?"
              buttonText="Log In"
              handler={onLoginInPress}
            />
          </FormFooter>
        )}
      </Form>
    </AppContainer>
  );
};
