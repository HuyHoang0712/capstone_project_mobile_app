import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants";
import ProfileButton from "@/components/button/ProfileButton";
import PersonalDetails from "@/components/profile/PersonalDetails";
import AssignedVehicle from "@/components/profile/AssignedVehicle";
const ProfilePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text className="text-3xl font-bold text-black-60">Profile</Text>
          <ProfileButton />
        </View>

        <ScrollView style={styles.scrollView}>
          <PersonalDetails />
          <AssignedVehicle />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: Colors["bg-color"],
  },
  scrollView: {
    width: "100%",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  titleContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 20,
    zIndex: 1,
  },
});
