import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const handelPress = () => console.log("Text Clicked");

  return <WelcomeScreen />;
}

const backGroundStyle = { backgroundColor: "white" };
