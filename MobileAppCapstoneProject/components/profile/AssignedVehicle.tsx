import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetAssignedVehicleQuery } from "@/redux/features/vehicle/vehicleApiSlice";
import { Colors } from "@/constants";
import StatusCard from "../card/StatusCard";
const AssignedVehicle = () => {
  const {
    data: vehicle,
    error,
    isLoading,
  } = useGetAssignedVehicleQuery(undefined);
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
      <Text className="text-lg font-semibold text-primary-100 w-full">
        Assigned Vehicle
      </Text>
      {vehicle ? (
        <View style={styles.content}>
          <View style={styles.contentRow}>
            <Text className="text-base font-bold text-black-90">
              {vehicle.license_plate}
            </Text>
            <StatusCard label={vehicle.status} type="vehicle" />
          </View>
          <View style={styles.contentRow}>
            <Text className="text-base text-black-60">
              Capacity: {vehicle.capacity} kg
            </Text>
            <Text className="text-base text-black-60">
              Brand: {vehicle.brand}
            </Text>
          </View>
        </View>
      ) : (
        <Text>No vehicle assigned</Text>
      )}

      {/* {error && <Text>{error.data.detail}</Text>} */}
    </View>
  );
};

export default AssignedVehicle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    rowGap: 16,
    marginBottom: 40,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    width: "100%",
  },
  contentRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
