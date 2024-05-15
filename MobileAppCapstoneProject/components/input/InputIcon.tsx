// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { Colors } from "@/constants/Colors";
export function InputLeftIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return <Ionicons {...rest} style={styles.leftIcon} size={24} />;
}

export function InputRightIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return <Ionicons {...rest} style={styles.rightIcon} size={24} />;
}

const styles = StyleSheet.create({
  leftIcon: {
    position: "absolute",
    left: 8,
    top: 14,
    color: Colors.primary[100],
  },
  rightIcon: {
    position: "absolute",
    right: 8,
    top: 14,
    color: Colors.black[60],
  },
});
