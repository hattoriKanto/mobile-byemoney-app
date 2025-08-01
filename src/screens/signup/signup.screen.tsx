import React, {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
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
import {NAVIGATION_KEYS, RootStackParamList} from '../../types';
import {handleUserSignUp} from '../../api';
import {TOAST_MESSAGES} from '../../constants';
import {showToast} from '../../utils';

export const SighUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);

    const {success, message, error} = await handleUserSignUp(data);

    if (!success && error) {
      showToast('error', error.message);

      if (error.code === 'invalid_credentials') {
        methods.setError('email', {message: error.message});
        methods.setError('password', {message: error.message});
        methods.setError('confirmPassword', {message: error.message});
      }
      setIsLoading(false);
      return;
    }

    if (message) {
      showToast('success', message);

      if (message === TOAST_MESSAGES.signIn.success) {
        navigation.navigate(NAVIGATION_KEYS.BOTTOM_TABS);
      }
    }

    setIsLoading(false);
  };

  const onLoginInPress = () => {
    navigation.navigate(NAVIGATION_KEYS.LOG_IN);
  };

  return (
    <AppContainer hasKeyboard>
      <Form methods={methods}>
        <FormHeader>
          <Logo />
          {isLoading ? (
            <Loader />
          ) : (
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
