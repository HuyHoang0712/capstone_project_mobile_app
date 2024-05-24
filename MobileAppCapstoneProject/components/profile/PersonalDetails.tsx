import React from "react";
import dayjs from "dayjs";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useGetUserProfileQuery } from "@/redux/features/profile/profileApiSlice";
import InforCard from "../card/InforCard";
const PersonalDetails = () => {
  const { data, error, isLoading } = useGetUserProfileQuery("");
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container} className="shadow-sm">
      <Image
        source={require("@/assets/images/exampleAva.png")}
        style={styles.image}
        className="shadow-sm"
      />
      <View style={styles.content}>
        <Text className="text-lg font-semibold text-primary-100">
          Personal Details
        </Text>
        <InforCard label="Full Name:" content={data.name} />
        <InforCard
          label="Date of Birth:"
          content={dayjs(data.date_of_birth).format("DD-MM-YYYY")}
          icon="cake-variant"
        />
        <InforCard label="Email:" content={data.email} icon="email" />
        <InforCard label="Phone Number:" content={data.phone} icon="phone" />
        <InforCard label="Role:" content={data.role} />
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingTop: 50,
    paddingBottom: 20,
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: 16,
    marginTop: 20,
    width: "100%",
    padding: 20,
  },
});
