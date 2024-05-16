import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
type CustomModalProps = {
  title: string;
  setShowModal: (showModal: boolean) => void;
  FormContent: any;
  formProps?: any;
};

const CustomModal = ({
  title,
  setShowModal,
  FormContent,
  formProps,
}: CustomModalProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.title}>
              <Text className="text-lg font-semibold text-primary-100">
                {title}
              </Text>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.closeBtn}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color={Colors.black[90]}
                />
              </TouchableOpacity>
            </View>
            <FormContent formProps={formProps} setShowModal={setShowModal} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomModal;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    maxHeight: "80%",
    display: "flex",
    flex: 1,
    borderRadius: 8,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black[10],
  },
  closeBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.secondary[60],
  },
});
