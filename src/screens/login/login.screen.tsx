import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  AppContainer,
  FormFooter,
  Input,
  FormHeader,
  Logo,
  MainButton,
  PasswordInput,
  FormFooterText,
  Loader,
} from '../../ui';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {Form} from '../../components';
import {loginSchema, LoginSchema} from '../../validators';
import {handleUserLogIn} from '../../api';

export const LogInScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);

    const {success, response} = await handleUserLogIn(data);
    const {error} = response;

    console.log(error);

    if (success) {
      Toast.show({
        text1: 'Log In Successfully!',
        type: 'success',
      });
      navigation.navigate(NAVIGATION_KEYS.HOME);
    } else {
      Toast.show({
        text1: error?.message,
        type: 'error',
      });

      if (error?.code === 'invalid_credentials') {
        methods.setError('email', {message: error?.message});
        methods.setError('password', {message: error?.message});
      }
    }

    setIsLoading(false);
  };

  const onSignUpPress = () => {
    navigation.navigate(NAVIGATION_KEYS.SIGN_UP);
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
            </>
          )}
        </FormHeader>
        {!isLoading && (
          <FormFooter>
            <MainButton onPress={methods.handleSubmit(onSubmit)}>
              Log In
            </MainButton>
            <FormFooterText
              text="Don't have an account?"
              buttonText="Sign Up"
              handler={onSignUpPress}
            />
          </FormFooter>
        )}
      </Form>
    </AppContainer>
  );
};
