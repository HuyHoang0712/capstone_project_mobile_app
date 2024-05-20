import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import StatusCard from "./StatusCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
type OrderCardProps = {
  data: any;
};

const OrderCard = ({ data }: OrderCardProps) => {
  return (
    <TouchableHighlight
      style={{ width: "100%", borderRadius: 8 }}
      underlayColor={Colors.primary[10]}
      onPress={() => {}}
    >
      <View style={styles.container} className="shadow-sm">
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <MaterialCommunityIcons
              name="map-marker"
              size={16}
              color={Colors.secondary[100]}
              style={{ padding: 4 }}
            />
            <Text
              style={styles.titleText}
              className="w-[85%] h-[24px] text-base font-medium text-black-90"
            >
              {data.pickup_point}
            </Text>
          </View>
          <StatusCard label={data.status} type="order" />
        </View>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={16}
          color={Colors.primary[90]}
          style={{ padding: 4 }}
        />
        <View style={styles.content}>
          <View style={[styles.titleContent, { width: "100%" }]}>
            <MaterialCommunityIcons
              name="map-marker"
              size={16}
              color={Colors.primary[100]}
              style={{ padding: 4 }}
            />
            <Text
              style={styles.titleText}
              className="w-[90%] h-[24px] text-base font-medium text-black-90"
            >
              {data.delivery_point}
            </Text>
          </View>
        </View>
        <View style={[styles.content, { paddingHorizontal: 8, marginTop: 8 }]}>
          <Text className="text-sm font-medium text-black-40">
            Payload: {data.payload} kg
          </Text>
          <Text className="text-sm font-medium text-black-40">
            Time in: {data.time_in}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
  },
  titleContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4,
    width: "60%",
  },
  titleText: {
    overflow: "hidden",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
