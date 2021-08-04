import React from "react";
import { View, Text } from "react-native";


import AppText from "./app/components/AppText";
export default function App() {
  const handelPress = () => {
    console.log("Text Clicked");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        I love react native
      </AppText>
    </View>
  );
}

const backGroundStyle = { backgroundColor: "white" };
