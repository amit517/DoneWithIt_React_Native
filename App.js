import React from "react";
import {
  Dimensions,
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(useDeviceOrientation());
  console.log(useDimensions());

  const handelPress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={[styles.container, backGroundStyle]}>
      <View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const backGroundStyle = { backgroundColor: "white" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
