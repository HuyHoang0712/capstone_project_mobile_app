import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Modal,
} from "react-native";
import { Colors } from "@/constants";
import dayjs from "dayjs";
import StatusCard from "./StatusCard";
import RequestDetail from "../request/RequestDetail";
type RequestCardProps = {
  data: any;
};

const RequestCard = ({ data }: RequestCardProps) => {
  const date = dayjs(data.created_at).format("DD-MM-YYYY");
  const time = dayjs(data.created_at).format("HH:mm");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableHighlight
      style={{ width: "100%", borderRadius: 8 }}
      underlayColor={Colors.primary[10]}
      onPress={() => setModalVisible(true)}
    >
      <View style={styles.container} className="shadow-sm">
        <View style={styles.content}>
          <Text className="text-base font-semibold text-black-90 max-w-[70%] truncate">
            {data.title}
          </Text>
          <StatusCard label={data.status} type="issue" />
        </View>
        <View style={styles.content}>
          <Text className="text-sm font-medium text-primary-100 max-w-[70%] truncate">
            {data.label}
          </Text>
          <Text className="text-sm font-normal text-black-40">{date}</Text>
        </View>
        <View
          style={[
            styles.content,
            { justifyContent: data.vehicle_id ? "space-between" : "flex-end" },
          ]}
        >
          {data.vehicle_id && (
            <Text className="text-sm font-medium text-primary-100 max-w-[70%] truncate">
              {data.vehicle_id}
            </Text>
          )}
          <Text className="text-sm font-normal text-black-40">{time}</Text>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <RequestDetail {...data} />
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
    rowGap: 8,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
