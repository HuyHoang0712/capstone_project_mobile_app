import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGetOrderByIDQuery } from "@/redux/features/order/orderApiSlice";
const OrderDetail = () => {
  const { id } = useLocalSearchParams();
  const { data: order, isLoading } = useGetOrderByIDQuery(id);
  console.log("order", order);
  
  return <Text>OrderDetail</Text>;
};

export default OrderDetail;
