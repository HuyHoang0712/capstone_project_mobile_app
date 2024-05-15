import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants";
type SolidButtonProps = {
  title: string;
  onPress: () => void;
};
const SolidButton = ({ title, onPress }: SolidButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.primary[60] : Colors.primary[100] },
        styles.button,
      ]}
    >
      <Text className="text-base font-medium text-white">{title}</Text>
    </Pressable>
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
});
