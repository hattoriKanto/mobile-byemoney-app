import {Text, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../constants';
import {NAVIGATION_KEYS} from '../../types';
import styles from './bottom-navigation-container.styles';

import ExpensesIcon from '../../assets/wallet.svg';
import CreateIcon from '../../assets/plus.svg';
import ProfileIcon from '../../assets/profile.svg';

export const BottomNavigationContainer = ({
  state,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.contentContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconFillColor = isFocused ? COLORS.ORANGE : COLORS.DARK;
        const isCreate = route.name === NAVIGATION_KEYS.EDIT_EXPENSE;
        const isCreateFocused = isFocused && isCreate;
        const createIconFillColor = COLORS.WHITE;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            disabled={isCreateFocused}
            style={[
              styles.tabContainer,
              isFocused && styles.activeTabContainer,
              isCreate && styles.createTabContainer,
              isCreateFocused && styles.activeCreateTabContainer,
            ]}
            onPress={onPress}>
            {route.name === NAVIGATION_KEYS.EXPENSES && (
              <ExpensesIcon width="100%" height="100%" color={iconFillColor} />
            )}
            {route.name === NAVIGATION_KEYS.EDIT_EXPENSE && (
              <CreateIcon
                width="100%"
                height="100%"
                color={createIconFillColor}
              />
            )}
            {route.name === NAVIGATION_KEYS.PROFILE && (
              <ProfileIcon width="100%" height="100%" color={iconFillColor} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
