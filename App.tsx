import {Text, useColorScheme, View} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text>Hello world 234</Text>
    </View>
  );
};

export default App;
