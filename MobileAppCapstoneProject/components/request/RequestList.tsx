import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RequestCard from "@/components/card/RequestCard";
import { useGetCurrentEmployeeIssuesQuery } from "@/redux/features/request/requestApiSlice";
import { Colors } from "@/constants";
const RequestList = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useGetCurrentEmployeeIssuesQuery(undefined);
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  if (isLoading) {
    return (
      <View
        style={{ flex: 1, width: "100%" }}
        className="bg-black-10 animate-pulse"
      ></View>
    );
  }

  return (
    <View
      style={styles.container}
      onLayout={(event) => setLayout(event.nativeEvent.layout)}
    >
      <View style={styles.titleContainer}>
        <Text>RequestList</Text>
      </View>
      <FlatList
        key={"#"}
        data={requests}
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.black[10],
  },
  listContainer: {
    rowGap: 20,
    padding: 20,
  },
});
