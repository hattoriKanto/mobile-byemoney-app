import "react-native-reanimated";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import "./src/styles/globals.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
