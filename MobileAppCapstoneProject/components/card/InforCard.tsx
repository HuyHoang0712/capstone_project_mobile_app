import React, { type ComponentProps } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type InforCardProps = {
  label: string;
  content: string;
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
};

const InforCard = ({ label, content, icon }: InforCardProps) => {
  return (
    <View style={{ width: "100%" }}>
      <Text className="text-sm font-normal text-black-50">{label}</Text>
      <View style={styles.content}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={Colors.primary[100]}
          />
        )}
        <Text className="text-base font-medium text-black-90">{content}</Text>
      </View>
    </View>
  );
};

export default InforCard;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.primary[20],
    borderRadius: 8,
    marginTop: 8,
  },
});
