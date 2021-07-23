import React from "react";
import { View } from "react-native";

export default function App() {
  const handelPress = () => console.log("Text Clicked");

  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const backGroundStyle = { backgroundColor: "white" };

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
}); */
