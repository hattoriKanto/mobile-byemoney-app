import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {AppContainer, Logo, TextButton, Title} from '../../ui';
import {ExpenseEntity, NAVIGATION_KEYS, ScreenProps} from '../../types';
import {ExpensesList} from '../../components';
import {TOAST_MESSAGES} from '../../constants';
import {getExpensesByUserId, getValidUser} from '../../api';
import {showToast} from '../../utils';
import {useAuthStore} from '../../stores';

export const ExpensesScreen: React.FC<ScreenProps> = ({navigation}) => {
  const {setIsAuth} = useAuthStore();
  const [expenses, setExpenses] = useState<ExpenseEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchExpenses = async () => {
    setIsLoading(true);

    const {success: userSuccess, data: user} = await getValidUser();

    if (!userSuccess || !user) {
      showToast('error', TOAST_MESSAGES.session.expired);
      setIsAuth(false);
      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      setIsLoading(false);
      return;
    }

    const result = (await getExpensesByUserId(user.id)).data;

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
      return () => setExpenses([]);
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
