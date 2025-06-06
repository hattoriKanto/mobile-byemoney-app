import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
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
import {supabase} from '../../libs';
import {createExpense} from '../../api';
import {TOAST_MESSAGES} from '../../constants';

export const CreateExpenseScreen: React.FC<ScreenProps> = ({navigation}) => {
  const methods = useForm<CreateExpenseSchema>({
    resolver: zodResolver(createExpenseSchema),
    mode: 'onChange',
    defaultValues: {
      date: new Date(),
    },
  });

  const onCreatePress = async (data: CreateExpenseSchema) => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    if (!userId) {
      Toast.show({type: 'error', text1: TOAST_MESSAGES.session.expired});

      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      return;
    }

    const {success, message} = await createExpense(userId, data);

    if (success) {
      Toast.show({type: 'success', text1: TOAST_MESSAGES.expense.success});
      navigation.navigate(NAVIGATION_KEYS.EXPENSES);
    } else {
      Toast.show({type: 'error', text1: message});
    }
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
