import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "@/constants";
const OrderEmptyList = () => {
  return (
    <View style={styles.container}>
      <View className="p-10 bg-secondary-20 rounded-full">
        <Ionicons name="bag-remove" size={45} color={Colors.secondary[100]} />
      </View>

      <Text className="mt-5 text-black-60 font-semibold text-base">
        No Assigned Orders Yet?
      </Text>
    </View>
  );
};

export default OrderEmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
  },
});
