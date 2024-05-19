import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Modal, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
import CustomModal from "../Modal/CustomModal";
import CreateRequestForm from "./CreateRequestForm";
import { useGetAssignedVehicleQuery } from "@/redux/features/vehicle/vehicleApiSlice";
const CreateRequestModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: vehicle } = useGetAssignedVehicleQuery(undefined);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowModal(true)}
    >
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={24}
        color="white"
      />
      <Text className="text-base font-medium text-white">Add Request</Text>
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <CustomModal
          title="Add Request"
          setShowModal={setShowModal}
          FormContent={CreateRequestForm}
          formProps={vehicle && vehicle.license_plate}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export default CreateRequestModal;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
    borderRadius: 8,
    alignItems: "center",
    padding: 8,
    backgroundColor: Colors.primary[100],
  },
});
