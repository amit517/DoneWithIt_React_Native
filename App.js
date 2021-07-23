import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log("App executed");

  const handelPress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handelPress}>
        Hello World - Test testing sentence
      </Text>
      <Image
        loadingIndicatorSource={true}
        source={{
          width: 300,
          height: 200,
          uri: "https://picsum.photos/seed/picsum/200/300",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
