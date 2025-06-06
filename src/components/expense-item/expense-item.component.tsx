import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {ExpenseEntity, NAVIGATION_KEYS} from '../../types';
import {getStringifyDate} from '../../utils';
import {deleteExpense} from '../../api';
import {supabase} from '../../libs';
import {COLORS, TOAST_MESSAGES} from '../../constants';
import styles from './expense-item.styles';

import TrashIcon from '../../assets/trash.svg';
import EditIcon from '../../assets/edit.svg';

type ExpenseItemProps = {
  expense: ExpenseEntity;
  fetchExpenses: () => Promise<void>;
};

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  expense,
  fetchExpenses,
}) => {
  const {amount, category, date, title, id} = expense;
  const stringifyDate = getStringifyDate(new Date(date));

  const onDeletePress = async () => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    if (!userId) {
      Toast.show({type: 'error', text1: TOAST_MESSAGES.session.expired});

      // navigation.navigate(NAVIGATION_KEYS.LOG_IN);
      return;
    }

    const {success, message} = await deleteExpense(userId, id);

    if (success) {
      Toast.show({
        type: 'success',
        text1: TOAST_MESSAGES.expense.success_delete,
      });
    } else {
      Toast.show({type: 'error', text1: message});
    }

    fetchExpenses();
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
