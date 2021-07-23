import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  TouchableNativeFeedbackComponent,
} from "react-native";

export default function App() {
  console.log("App executed");

  const handelPress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes Pressed") },
            { text: "No", onPress: () => console.log("No Pressed") },
          ])
        }
      />
    </SafeAreaView>
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
