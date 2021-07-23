import React from "react";
import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  console.log("App executed");

  const handelPress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={[styles.container, backGroundStyle]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => Alert.alert("My Title", "My Message")}
      />
    </SafeAreaView>
  );
}

const backGroundStyle = { backgroundColor: "white" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
