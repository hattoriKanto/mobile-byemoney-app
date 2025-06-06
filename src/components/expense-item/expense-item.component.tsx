import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ExpenseEntity,
  NAVIGATION_KEYS,
  RootStackParamList,
  SortableExpenseColumns,
} from '../../types';
import {getStringifyDate, showToast} from '../../utils';
import {deleteExpense, getValidUser} from '../../api';
import {useAuthStore, useExpensesStore} from '../../stores';
import {COLORS, TOAST_MESSAGES} from '../../constants';
import styles from './expense-item.styles';

import TrashIcon from '../../assets/trash.svg';
import EditIcon from '../../assets/edit.svg';

type ExpenseItemProps = {
  expense: ExpenseEntity;
  fetchExpenses: (
    column?: SortableExpenseColumns,
    isAscending?: boolean,
  ) => Promise<void>;
};

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  expense,
  fetchExpenses,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {setIsAuth} = useAuthStore();
  const {isAscending, orderBy} = useExpensesStore();
  const {amount, category, date, title, id} = expense;
  const stringifyDate = getStringifyDate(new Date(date));

  const onDeletePress = async () => {
    const {success: userSuccess, data: user} = await getValidUser();

    if (!userSuccess || !user) {
      showToast('error', TOAST_MESSAGES.session.expired);
      setIsAuth(false);
      navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      return;
    }

    const {success, message} = await deleteExpense(user.id, id);
    if (!success && message) {
      showToast('error', message);
      return;
    }

    showToast('success', TOAST_MESSAGES.expense.success_delete);
    fetchExpenses(orderBy, isAscending);
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTextBold}>Category:</Text>
          <Text>{category}</Text>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTextBold}>Amount:</Text>
          <Text>${amount}</Text>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTextBold}>Date:</Text>
          <Text>{stringifyDate}</Text>
        </View>
      </View>
      <View style={styles.itemButtonContainer}>
        <TouchableOpacity style={styles.itemButton} onPress={onDeletePress}>
          <TrashIcon color={COLORS.RED} height="100%" width="100%" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemButton}>
          <EditIcon color={COLORS.ORANGE} height="100%" width="100%" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
