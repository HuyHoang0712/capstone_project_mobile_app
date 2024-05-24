import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { Colors } from "@/constants";
import { router } from "expo-router";
import dayjs from "dayjs";

import { useMaskAsReadedMutation } from "@/redux/features/notification/notificationApiSlice";

type NotificationCardProps = {
  data: any;
};
const NotificationCard = ({ data }: NotificationCardProps) => {
  const [maskAsReaded] = useMaskAsReadedMutation();

  const handlePress = async () => {
    await maskAsReaded(data.id);
    if (data.type === 1) router.push(`/order/${data.order_id}`);
    else router.push("/request/requests");
  };

  return (
    <TouchableHighlight
      style={{ width: "100%", borderRadius: 8 }}
      underlayColor={Colors.primary[10]}
      onPress={handlePress}
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/exampleAva.png")}
          style={styles.image}
          className="shadow-sm"
        />
        <View style={styles.content}>
          <Text className="text-base font-medium text-black-90">
            {data.description}
          </Text>
          <Text className="text-sm font-normal text-black-40">
            {dayjs(data.send_datetime).format("DD-MM-YYYY HH:mm")}
          </Text>
        </View>
        {!data.is_read && (
          <View className="flex h-full items-center justify-center">
            <View className="w-3 h-3 bg-primary-100 rounded-full"></View>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: 110,
    backgroundColor: "white",
    padding: 12,
    columnGap: 8,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    rowGap: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
