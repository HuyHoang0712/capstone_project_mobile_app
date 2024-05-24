import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import CreateRequestModal from "@/components/request/CreateRequestModal";
import RequestList from "@/components/request/RequestList";
const RequestsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text className="text-xl font-semibold text-black-100">
          Request List
        </Text>
        <CreateRequestModal />
      </View>
      <RequestList />
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
