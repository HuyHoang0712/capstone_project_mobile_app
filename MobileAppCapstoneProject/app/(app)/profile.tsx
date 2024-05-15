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

const ProfilePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, borderStartColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.titleContaine}>
          <Text className="text-3xl font-bold text-black-60">Profile</Text>
          <ProfileButton />
        </View>
        <ScrollView style={styles.scrollView}>
          <PersonalDetails />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors["bg-color"],
    padding: 20,
  },
  scrollView: {},
  titleContaine: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
