import React from "react";
import { router } from "expo-router";
import { TouchableHighlight, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants";
const NavigateBackButton = () => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => router.back()}
      underlayColor={Colors.primary[10]}
    >
      <MaterialIcons
        name="arrow-back-ios-new"
        size={24}
        color={Colors.primary[100]}
      />
    </TouchableHighlight>
  );
};

export default NavigateBackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,

    padding: 10,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
