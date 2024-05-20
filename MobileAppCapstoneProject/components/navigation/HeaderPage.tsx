import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoComponent from "@/assets/svgs/logo";
const HeaderPage = () => {
  return (
    <View style={styles.titleContainer}>
      <LogoComponent className="w-12 h-12" />
      <Text className="text-3xl font-bold text-primary-100">
        Driver Application
      </Text>
    </View>
  );
};

export default HeaderPage;

const styles = StyleSheet.create({
  titleContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    columnGap: 16,
    backgroundColor: "white",
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 20,
    zIndex: 1,
  },
});
