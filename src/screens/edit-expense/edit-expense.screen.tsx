import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Form} from '../../components';
import {editExpenseSchema, EditExpenseSchema} from '../../validators';
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
import {NAVIGATION_KEYS, RootStackParamList} from '../../types';
import {createExpense, getValidUser, updateExpense} from '../../api';
import {TOAST_MESSAGES} from '../../constants';
import {showToast} from '../../utils';
import {useAuthStore} from '../../stores';

export const EditExpenseScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, NAVIGATION_KEYS.EDIT_EXPENSE>>();

  const {expense} = route.params ?? {};
  const isEdit = !!expense;

  const {setIsAuth} = useAuthStore();
  const methods = useForm<EditExpenseSchema>({
    resolver: zodResolver(editExpenseSchema),
    mode: 'onChange',
    defaultValues: {
      date: new Date(),
    },
  });

  const onCreatePress = async (data: EditExpenseSchema) => {
    const {success: userSuccess, data: user} = await getValidUser();

    if (!userSuccess || !user) {
      showToast('error', TOAST_MESSAGES.session.expired);
      setIsAuth(false);
      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      return;
    }

    if (isEdit) {
      const {success, error} = await updateExpense(user.id, expense.id, data);
      if (!success && error) {
        showToast('error', error.message);
        return;
      }

      showToast('success', TOAST_MESSAGES.expense.success_update);
    } else {
      const {success, error} = await createExpense(user.id, data);

      if (!success && error) {
        showToast('error', error.message);
        return;
      }

      showToast('success', TOAST_MESSAGES.expense.success);
    }

    navigation.navigate(NAVIGATION_KEYS.EXPENSES);
  };

  useFocusEffect(
    useCallback(() => {
      methods.reset(
        expense
          ? {
              ...expense,
              amount: Number(expense.amount),
              date: new Date(expense.date),
            }
          : {date: new Date()},
      );

      return () => {};
    }, [expense]),
  );

  return (
    <AppContainer hasKeyboard>
      <View style={{flex: 1, gap: 60}}>
        <Title>{isEdit ? 'Edit Expense' : 'New Expense'}</Title>
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
              {isEdit ? 'Save ' : 'Create'}
            </MainButton>
          </FormFooter>
        </Form>
      </View>
    </AppContainer>
  );
};
