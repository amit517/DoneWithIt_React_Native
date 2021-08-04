import React from "react";
import { View, Text } from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function App() {
  return (
    <View>
      <MaterialCommunityIcons name = 'email' size = {60} color = 'dodgerblue'/>
    </View>
  );
}

const backGroundStyle = { backgroundColor: "white" };
