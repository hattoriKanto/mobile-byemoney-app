import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
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
import {showToast} from '../../utils';
import {TOAST_MESSAGES} from '../../constants';

export const LogInScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);

    const {success, error} = await handleUserLogIn(data);

    if (!success && error) {
      showToast('error', error.message);

      if (error.code === 'invalid_credentials') {
        methods.setError('email', {message: error.message});
        methods.setError('password', {message: error.message});
      }
      setIsLoading(false);
      return;
    }

    showToast('success', TOAST_MESSAGES.logIn.success);
    navigation.navigate(NAVIGATION_KEYS.BOTTOM_TABS);

    setIsLoading(false);
  };

  const onSignUpPress = () => {
    navigation.navigate(NAVIGATION_KEYS.SIGN_UP);
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
