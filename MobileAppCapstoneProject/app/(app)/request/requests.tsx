import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetCurrentEmployeeIssuesQuery } from "@/redux/features/request/requestApiSlice";
import CreateRequestModal from "@/components/request/CreateRequestModal";
const RequestsPage = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useGetCurrentEmployeeIssuesQuery(undefined);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text className="text-xl font-semibold text-black-100">Request List</Text>
        <CreateRequestModal />
      </View>
    </View>
  );
};

export default RequestsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    display: "flex",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
