import React from "react";
import { View, Text } from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from "./app/components/AppText/AppText";

export default function App() {
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
