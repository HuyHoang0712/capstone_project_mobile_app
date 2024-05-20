import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import SearchBar from "../search/SearchBar";
import { SearchFilter } from "@/utils/SearchFilter.service";
import { useGetCurrentOrdersQuery } from "@/redux/features/order/orderApiSlice";
import OrderCard from "../card/OrderCard";
import OrderEmptyList from "../emptylist/OrderEmptyList";
const OrderList = () => {
  const [search, setSearch] = useState("");
  const {
    data: orders,
    error,
    isLoading,
  } = useGetCurrentOrdersQuery(undefined);
  if (isLoading) {
    return (
      <View
        style={{ flex: 1, width: "100%" }}
        className="bg-black-10 animate-pulse"
      ></View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SearchBar search={search} setSearch={setSearch} />
        <View className="px-4 py-2 border-2 text-black-0 rounded-lg">
          <Text className="text-base font-medium text-black-40">Filter</Text>
        </View>
      </View>
      {orders && orders.length > 0 ? (
        <FlatList
          key={"#"}
          data={
            orders && SearchFilter.searchByKey("delivery_point", search, orders)
          }
          renderItem={({ item }) => <OrderCard data={item} />}
          keyExtractor={(item) => "#" + item.id.toString()}
          contentContainerStyle={styles.listContainer}
          style={{ marginTop: 10 }}
          numColumns={1}
        />
      ) : (
        <OrderEmptyList />
      )}
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  listContainer: {
    rowGap: 20,
    padding: 20,
  },
});
