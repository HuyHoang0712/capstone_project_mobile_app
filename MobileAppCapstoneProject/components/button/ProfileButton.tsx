import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants";
const ProfileButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Pressable
        style={styles.profileButton}
        onPress={() => setShowModal(!showModal)}
      >
        <Ionicons name="settings-sharp" size={24} style={styles.iconBtn} />
      </Pressable>
      {showModal && (
        <View style={styles.popUpContainer} className="shadow-xl">
          <Text className="text-lg font-medium text-primary-100">Menu</Text>
          <View style={styles.menuContent}>
            <TouchableHighlight
              underlayColor={Colors.black[10]}
              style={{ borderRadius: 8, width: "100%" }}
              onPress={() => {}}
            >
              <View style={styles.button}>
                <Ionicons name="pencil" size={20} color={Colors.black[90]} />
                <Text className="text-base font-medium text-black-90">
                  Edit Profile
                </Text>
              </View>
            </TouchableHighlight>
            <Link href="/request/requests" asChild>
              <TouchableHighlight
                underlayColor={Colors.black[10]}
                style={{ borderRadius: 8, width: "100%" }}
              >
                <View style={styles.button}>
                  <Ionicons
                    name="push-outline"
                    size={20}
                    color={Colors.black[90]}
                  />
                  <Text className="text-base font-medium text-black-90">
                    Request
                  </Text>
                </View>
              </TouchableHighlight>
            </Link>
          </View>
          <TouchableHighlight
            underlayColor={Colors["red-10"]}
            style={{ borderRadius: 8, marginTop: 8 }}
            onPress={() => {}}
          >
            <View style={styles.button}>
              <Ionicons name="log-out-outline" size={20} color={Colors.red} />
              <Text className="text-base font-medium text-red">Logout</Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
    </>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  profileButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  iconBtn: {
    color: Colors.primary[100],
  },
  popUpContainer: {
    top: 60,
    right: 20,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 100,
    width: 180,
    height: 200,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  menuContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black[10],
    borderTopWidth: 1,
    borderTopColor: Colors.black[10],
  },
  button: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    columnGap: 8,
  },
});
