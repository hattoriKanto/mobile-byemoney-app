import {View} from 'react-native';
import {AppContainer, Loader, Logo} from '../../ui';

export const LoadingScreen = () => {
  return (
    <AppContainer>
      <View style={{flex: 1}}>
        <Logo />
        <Loader />
      </View>
    </AppContainer>
  );
};
