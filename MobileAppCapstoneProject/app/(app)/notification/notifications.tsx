import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NotificationList from "@/components/notification/NotificationList";
const NotificationsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text className="text-2xl font-semibold text-black-100">
          Notifications
        </Text>
      </View>
      <NotificationList />
    </View>
  );
};

export default NotificationsPage;

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
