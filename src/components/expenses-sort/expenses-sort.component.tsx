import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useExpensesStore} from '../../stores';
import {SortableExpenseColumns} from '../../types';
import {COLORS} from '../../constants';
import {MainButton} from '../../ui';
import styles from './expenses-sort.styles';

import SortIcon from '../../assets/sort.svg';

export const ExpensesSort = () => {
  const {orderBy, setIsAscending, isAscending, setOrderBy} = useExpensesStore();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOrderByChange = (orderOption: SortableExpenseColumns) => {
    setOrderBy(orderOption);
    setIsModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Order by:</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.orderOption}>{orderBy}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sort by:</Text>
          <TouchableOpacity onPress={() => setIsAscending(!isAscending)}>
            <SortIcon
              style={[isAscending && styles.sortIconReversed]}
              color={COLORS.ORANGE}
              height={36}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={{backgroundColor: COLORS.DARK}}
        animationType="slide"
        transparent
        visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalOverlay} />
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => handleOrderByChange('date')}>
                <Text style={styles.modalText}>By Date</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOrderByChange('title')}>
                <Text style={styles.modalText}>By Title</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOrderByChange('amount')}>
                <Text style={styles.modalText}>By Amount</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOrderByChange('category')}>
                <Text style={styles.modalText}>By Category</Text>
              </TouchableOpacity>
            </View>
            <MainButton onPress={() => setIsModalVisible(false)}>
              Cancel
            </MainButton>
          </View>
        </View>
      </Modal>
    </>
  );
};
