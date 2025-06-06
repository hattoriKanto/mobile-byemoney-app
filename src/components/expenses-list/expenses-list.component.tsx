import React, {useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {Loader} from '../../ui';
import {COLORS} from '../../constants';
import {ExpenseItem} from '..';
import styles from './expenses-list.styles';
import {useExpensesStore} from '../../stores';
import {SortableExpenseColumns} from '../../types';

type ExpensesListProps = {
  fetchExpenses: (
    column?: SortableExpenseColumns,
    isAscending?: boolean,
  ) => Promise<void>;
  isLoading: boolean;
};

export const ExpensesList: React.FC<ExpensesListProps> = ({
  fetchExpenses,
  isLoading,
}) => {
  const {expenses, setExpenses, isAscending, orderBy} = useExpensesStore();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setExpenses([]);
    setRefreshing(true);
    await fetchExpenses(orderBy, isAscending);
    setRefreshing(false);
  };

  return (
    <View style={styles.contentContainer}>
      <FlatList
        bounces={false}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={itemData => itemData.id}
        data={expenses}
        renderItem={itemData => (
          <ExpenseItem expense={itemData.item} fetchExpenses={fetchExpenses} />
        )}
        ListFooterComponent={() => isLoading && <Loader />}
        refreshControl={
          <RefreshControl
            colors={[COLORS.ORANGE]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={() =>
          !isLoading && (
            <Text style={styles.notFoundText}>No expenses were found</Text>
          )
        }
      />
    </View>
  );
};
