import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Colors } from "@/constants";
import { useUpdateIssueStatusMutation } from "@/redux/features/request/requestApiSlice";

type CancelRequestProps = {
  id: string;
  type: string;
};

const CancelRequest = ({ id, type }: CancelRequestProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updateIssueStatus] = useUpdateIssueStatusMutation();
  const handleCancel = async () => {
    await updateIssueStatus({ id, status: 4, type })
      .unwrap()
      .then(() => {
        Alert.alert("Request is canceled!");
        setModalVisible(false);
      })
      .catch((error) => Alert.alert(error.data.detail));
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-base font-medium text-white">Cancel</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View style={styles.modalContainer} className="shadow-lg">
            <Text
              style={{ textAlign: "center" }}
              className="text-base font-medium text-black-90 p-5"
            >
              Do you want to cancel this request?{"\n"} This action cannot be
              undone.
            </Text>
            <View
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                borderTopWidth: 1,
                borderColor: Colors.black[10],
              }}
            >
              <TouchableHighlight
                style={[styles.cancelBtn, { flex: 1 }]}
                onPress={() => setModalVisible(false)}
                underlayColor={Colors.primary[10]}
              >
                <Text className="text-base font-medium text-primary-100">
                  Cancel
                </Text>
              </TouchableHighlight>
              <TouchableOpacity
                style={[styles.confirmBtn, { flex: 1 }]}
                onPress={() => handleCancel()}
              >
                <Text className="text-base font-medium text-white">
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CancelRequest;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.red,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
  },
  cancelBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderBottomLeftRadius: 8,
  },
  confirmBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.red,
  },
});
