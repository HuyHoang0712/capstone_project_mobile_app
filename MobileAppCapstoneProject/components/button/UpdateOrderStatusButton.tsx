import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Colors, STATUS } from "@/constants";
import clsx from "clsx";
import { useUpdateOrderStatusMutation } from "@/redux/features/order/orderApiSlice";
type UpdateOrderStatusButtonProps = {
  id: string;
  curStatus: number;
};

const UpdateOrderStatusButton = ({
  id,
  curStatus,
}: UpdateOrderStatusButtonProps) => {
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = async () => {
    // handle cancel
    await updateOrderStatus({
      id: id,
      status: curStatus + 1,
    })
      .unwrap()
      .then(() => {
        Alert.alert("Success", "Order status updated successfully");
        setModalVisible(false);
      })
      .catch((error) => {
        Alert.alert(error.data.detail);
      });
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
        disabled={curStatus === 2 || curStatus === 3}
        className={clsx("py-2 rounded-lg", {
          "bg-green": curStatus === 1 || curStatus === 2,
          "bg-primary-100": curStatus === 0,
          "bg-red": curStatus === 3,
        })}
      >
        <Text className="text-base font-medium text-white">
          {curStatus === 0 && "Delivering Order"}
          {curStatus === 1 && "Complete Order"}
          {curStatus === 2 && "Completed"}
          {curStatus === 3 && "Canceled"}
        </Text>
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
              {curStatus === 0 && "Delivering this order?"}
              {curStatus === 1 && "Completing this order?"}
              {"\n"}
              This action cannot be undo!
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
              <TouchableOpacity
                style={[styles.confirmBtn, { flex: 1 }]}
                onPress={() => handleCancel()}
              >
                <Text className="text-base font-medium text-white">
                  Confirm
                </Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={[styles.cancelBtn, { flex: 1 }]}
                onPress={() => setModalVisible(false)}
                underlayColor={Colors.primary[10]}
              >
                <Text className="text-base font-medium text-primary-100">
                  Cancel
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UpdateOrderStatusButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
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
    borderBottomRightRadius: 8,
  },
  confirmBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderBottomLeftRadius: 8,
    backgroundColor: Colors.primary[100],
  },
});
