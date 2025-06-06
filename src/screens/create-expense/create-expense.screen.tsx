import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useFocusEffect} from '@react-navigation/native';
import {Form} from '../../components';
import {createExpenseSchema, CreateExpenseSchema} from '../../validators';
import {
  AppContainer,
  DateInput,
  FormFooter,
  FormHeader,
  Input,
  MainButton,
  NumberInput,
  Title,
} from '../../ui';
import {NAVIGATION_KEYS, ScreenProps} from '../../types';
import {createExpense, getValidUser} from '../../api';
import {TOAST_MESSAGES} from '../../constants';
import {showToast} from '../../utils';
import {useAuthStore} from '../../stores';

export const CreateExpenseScreen: React.FC<ScreenProps> = ({navigation}) => {
  const {setIsAuth} = useAuthStore();
  const methods = useForm<CreateExpenseSchema>({
    resolver: zodResolver(createExpenseSchema),
    mode: 'onChange',
    defaultValues: {
      date: new Date(),
    },
  });

  const onCreatePress = async (data: CreateExpenseSchema) => {
    const {success: userSuccess, data: user} = await getValidUser();

    if (!userSuccess || !user) {
      showToast('error', TOAST_MESSAGES.session.expired);
      setIsAuth(false);
      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      return;
    }

    const {success, error} = await createExpense(user.id, data);

    if (!success && error) {
      showToast('error', error.message);
      return;
    }

    showToast('success', TOAST_MESSAGES.expense.success);
    navigation.navigate(NAVIGATION_KEYS.EXPENSES);
  };

  useFocusEffect(
    useCallback(() => {
      return () => methods.reset();
    }, []),
  );

  return (
    <AppContainer hasKeyboard>
      <View style={{flex: 1, gap: 60}}>
        <Title>New Expense</Title>
        <Form methods={methods}>
          <FormHeader>
            <Input
              control={methods.control}
              label="Title"
              name="title"
              placeholder="Enter your title"
              error={methods.formState.errors.title}
            />
            <Input
              control={methods.control}
              label="Category"
              name="category"
              placeholder="Enter your category"
              error={methods.formState.errors.category}
            />
            <NumberInput
              control={methods.control}
              label="Amount ($)"
              name="amount"
              placeholder="Enter spent amount"
              error={methods.formState.errors.amount}
            />
            <DateInput
              control={methods.control}
              label="Date"
              name="date"
              placeholder="Choose date"
              error={methods.formState.errors.date}
            />
          </FormHeader>
          <FormFooter>
            <MainButton onPress={methods.handleSubmit(onCreatePress)}>
              Create
            </MainButton>
          </FormFooter>
        </Form>
      </View>
    </AppContainer>
  );
};
