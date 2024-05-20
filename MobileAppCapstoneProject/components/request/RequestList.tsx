import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RequestCard from "@/components/card/RequestCard";
import { useGetCurrentEmployeeIssuesQuery } from "@/redux/features/request/requestApiSlice";
import SearchBar from "../search/SearchBar";
import { SearchFilter } from "@/utils/SearchFilter.service";
const RequestList = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useGetCurrentEmployeeIssuesQuery(undefined);
  const [search, setSearch] = useState("");
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
      </View>
      <FlatList
        key={"#"}
        data={requests && SearchFilter.searchByKey("title", search, requests)}
        renderItem={({ item }) => <RequestCard data={item} />}
        keyExtractor={(item) => "#" + item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={1}
      />
    </View>
  );
};

export default RequestList;

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
    paddingVertical: 10,
  },
  listContainer: {
    rowGap: 20,
    padding: 20,
  },
});
