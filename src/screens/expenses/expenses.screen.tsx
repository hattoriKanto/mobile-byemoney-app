import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {AppContainer, Title} from '../../ui';
import {
  NAVIGATION_KEYS,
  RootStackParamList,
  SortableExpenseColumns,
} from '../../types';
import {ExpensesList, ExpensesSort} from '../../components';
import {TOAST_MESSAGES} from '../../constants';
import {getExpensesByUserId, getValidUser} from '../../api';
import {showToast} from '../../utils';
import {useAuthStore, useExpensesStore} from '../../stores';

export const ExpensesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {setIsAuth} = useAuthStore();
  const {setExpenses, isAscending, orderBy} = useExpensesStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchExpenses = async (
    column?: SortableExpenseColumns,
    isAscending?: boolean,
  ) => {
    setIsLoading(true);

    const {success: userSuccess, data: user} = await getValidUser();

    if (!userSuccess || !user) {
      showToast('error', TOAST_MESSAGES.session.expired);
      setIsAuth(false);
      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      setIsLoading(false);
      return;
    }

    const result = (await getExpensesByUserId(user.id, column, isAscending))
      .data;

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
      fetchExpenses(orderBy, isAscending);
      return () => setExpenses([]);
    }, [orderBy, isAscending]),
  );

  useEffect(() => {
    fetchExpenses(orderBy, isAscending);
  }, [orderBy, isAscending]);

  return (
    <AppContainer>
      <View style={{flex: 1}}>
        <Title>Your Expenses</Title>
        <ExpensesSort />
        <ExpensesList fetchExpenses={fetchExpenses} isLoading={isLoading} />
      </View>
    </AppContainer>
  );
};
