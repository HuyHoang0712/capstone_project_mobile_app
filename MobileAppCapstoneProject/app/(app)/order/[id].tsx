import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RouteMap from "@/components/map/RouteMap";
import NavigateBackButton from "@/components/button/NavigateBackButton";
import OrderDetailSlide from "@/components/order/OrderDetailSlide";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useLocalSearchParams } from "expo-router";
import { useGetOrderByIDQuery } from "@/redux/features/order/orderApiSlice";
const OrderDetail = () => {
  const { id } = useLocalSearchParams();
  const { data: order, isLoading } = useGetOrderByIDQuery(id);
  if (isLoading) return <Text>Loading...</Text>;
  console.log(order);
  
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigateBackButton />
      <RouteMap />
      <OrderDetailSlide order={order} />
    </GestureHandlerRootView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});
