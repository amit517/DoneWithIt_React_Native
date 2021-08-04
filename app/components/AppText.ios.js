import React from "react";
import { Text, StyleSheet } from "react-native";
/* Heading component */

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

//Platform.select return an object. so we will copy that with our other params

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
