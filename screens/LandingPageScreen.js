import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LandingPageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LandingPageScreen</Text>
    </View>
  );
};

export default LandingPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
