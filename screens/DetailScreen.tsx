import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ navigation }) => {
  const title = navigation.getParam("title");
  const body = navigation.getParam("body");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  title: {
    fontSize: 32,
    paddingTop: 16,
    paddingBottom: 32,
  },
  description: {
    fontSize: 16,
  },
});
