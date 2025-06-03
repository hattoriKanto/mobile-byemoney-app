import React from 'react';
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
} from '../../ui';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {Form} from '../../components';
import {loginSchema, LoginSchema} from '../../validators';

export const LogInScreen: React.FC<ScreenProps> = ({navigation}) => {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  const onSignUpPress = () => {
    navigation.navigate(NAVIGATION_KEYS.SIGN_UP);
  };

  return (
    <AppContainer>
      <Form methods={methods}>
        <FormHeader>
          <Logo />
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
        </FormHeader>
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
      </Form>
    </AppContainer>
  );
};
