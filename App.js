import React from "react";
import { View, Text } from "react-native";
import colors from "./app/config/colors";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const handelPress = () => console.log("Text Clicked");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          // font's are plat from dependent. So need to check the fonts before using
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: "600", // must be string
          color: "red",
          textTransform: "capitalize",
          textDecorationLine: "line-through",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love react native, this a is very long text... ha ha haa.. have fun
      </Text>
    </View>
  );
}

const backGroundStyle = { backgroundColor: "white" };
