import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {ExpenseEntity} from '../../types';
import {Loader} from '../../ui';
import {COLORS} from '../../constants';
import {ExpenseItem} from '..';
import styles from './expenses-list.styles';

type ExpensesProps = {
  expenses: ExpenseEntity[];
  fetchExpenses: () => Promise<void>;
  isLoading: boolean;
};

export const ExpensesList: React.FC<ExpensesProps> = ({
  fetchExpenses,
  expenses,
  isLoading,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchExpenses();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <View style={styles.contentContainer}>
      {/* <CustomTextInput placeholder="Enter product name" /> */}
      {/* <SortButtons refetch={refetch} /> */}
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
        // onEndReached={handleReachEnd}
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
