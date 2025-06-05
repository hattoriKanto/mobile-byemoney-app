import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
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
import {ScreenProps} from '../../types';

export const CreateExpenseScreen: React.FC<ScreenProps> = ({navigation}) => {
  const methods = useForm<CreateExpenseSchema>({
    resolver: zodResolver(createExpenseSchema),
    mode: 'onChange',
    defaultValues: {
      date: new Date(),
    },
  });

  const onCreatePress = async (data: CreateExpenseSchema) => {
    console.log(data);
  };

  return (
    <AppContainer>
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
