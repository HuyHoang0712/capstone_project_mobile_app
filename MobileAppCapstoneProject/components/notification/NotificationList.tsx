import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApiSlice";
import NotificationCard from "@/components/notification/NotificationCard";
import NotificationEmptyList from "../emptylist/NotificationEmptyList";
const NotificationList = () => {
  const {
    data: notifications,
    error,
    isLoading,
  } = useGetNotificationsQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: false,
  });
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
      {notifications && notifications.length > 0 ? (
        <FlatList
          key={"#"}
          data={notifications}
          renderItem={({ item }) => <NotificationCard data={item} />}
          keyExtractor={(item) => "#" + item.id.toString()}
          contentContainerStyle={styles.listContainer}
          // style={{ marginTop: 10 }}
          numColumns={1}
        />
      ) : (
        <NotificationEmptyList />
      )}
    </View>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  listContainer: {
    rowGap: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
