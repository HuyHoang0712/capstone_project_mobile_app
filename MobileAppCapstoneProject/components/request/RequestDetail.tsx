import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
import StatusCard from "../card/StatusCard";
import CancelRequest from "./CancelRequest";
import dayjs from "dayjs";
type RequestDetailProps = {
  data: any;
  setModalVisible: (showModal: boolean) => void;
};

const RequestDetail = ({ data, setModalVisible }: RequestDetailProps) => {
  return (
    <View style={styles.cover}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text className="text-lg font-medium text-primary-100">
            Request Details
          </Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeBtn}
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={Colors.black[90]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View
            style={[styles.contentRow, { justifyContent: "space-between" }]}
          >
            <Text className="text-xl font-semibold text-black-90 max-w-[70%] text-wrap">
              {data.title}
            </Text>
            <StatusCard label={data.status} type="issue" />
          </View>
          <View style={styles.contentRow}>
            <Text className="text-sm font-normal text-black-40">Label:</Text>
            <Text className="text-base font-medium text-black-60">
              {data.label}
            </Text>
          </View>
          <View
            style={[styles.contentRow, { flexDirection: "column", rowGap: 8 }]}
          >
            <Text className="text-sm font-normal text-black-40">
              Description:
            </Text>
            <TextInput
              className="text-base font-normal text-black-60 border-2 w-full max-h-24 p-2 rounded-lg border-primary-10"
              multiline={true}
              editable={false}
              value={data.description}
            />
          </View>

          {data.vehicle_id && (
            <>
              <View style={styles.contentRow}>
                <Text className="text-sm font-normal text-black-40">
                  Vehicle:
                </Text>
                <Text className="text-base font-medium text-black-60">
                  {data.vehicle_id}
                </Text>
              </View>
              <View style={styles.contentRow}>
                <Text className="text-sm font-normal text-black-40">Cost:</Text>
                <Text className="text-base font-medium text-black-60">
                  {data.cost} VND
                </Text>
              </View>
            </>
          )}

          <View style={styles.contentRow}>
            <Text className="text-sm font-normal text-black-40">
              Create At:
            </Text>
            <Text className="text-base font-medium text-black-60">
              {dayjs(data.date_time).format("DD-MM-YYYY HH:mm")}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <CancelRequest
            id={data.id}
            type={data.vehicle_id ? "issue-vehicle" : "issue-employee"}
          />
        </View>
      </View>
    </View>
  );
};

export default RequestDetail;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0 ,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    marginTop: 16,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 40,
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    columnGap: 8,
  },
  closeBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.secondary[60],
  },
});
