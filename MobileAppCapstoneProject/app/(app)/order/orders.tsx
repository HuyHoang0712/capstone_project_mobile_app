import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Colors } from "@/constants";
import HeaderPage from "@/components/navigation/HeaderPage";
import OrderList from "@/components/order/OrderList";
const OrderPage = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        className="text-xl font-semibold text-black-60"
      >
        Assigned Orders
      </Text>
      <OrderList />
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: Colors["bg-color"],
  },
  title: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
