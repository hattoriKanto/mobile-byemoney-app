import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useFocusEffect} from '@react-navigation/native';
import {AppContainer, Logo, TextButton, Title} from '../../ui';
import {supabase} from '../../libs';
import {ExpenseEntity, NAVIGATION_KEYS, ScreenProps} from '../../types';
import {ExpensesList} from '../../components';
import {TOAST_MESSAGES} from '../../constants';
import {getExpensesByUserId} from '../../api';

export const ExpensesScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [expenses, setExpenses] = useState<ExpenseEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchExpenses = async () => {
    setIsLoading(true);

    const userId = (await supabase.auth.getUser()).data.user?.id;
    if (!userId) {
      Toast.show({type: 'error', text1: TOAST_MESSAGES.session.expired});

      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      setIsLoading(false);
      return;
    }

    const result = (await getExpensesByUserId(userId)).data;
    if (!result) {
      setExpenses([]);
      setIsLoading(false);
      return;
    }

    setExpenses(result);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchExpenses();
    }, []),
  );

  return (
    <AppContainer>
      <View style={{flex: 1}}>
        <Logo />
        <Title>Your Expenses</Title>
        <ExpensesList
          expenses={expenses}
          setExpenses={setExpenses}
          fetchExpenses={fetchExpenses}
          isLoading={isLoading}
        />
      </View>
    </AppContainer>
  );
};
