import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NotificationEmptyList = () => {
  return (
    <View style={styles.container}>
      <Text className="text-xl font-semibold text-primary-100">No Notifications!</Text>
    </View>
  );
};

export default NotificationEmptyList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
