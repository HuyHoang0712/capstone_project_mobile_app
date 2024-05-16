import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useController } from "react-hook-form";
import clsx from "clsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";
import { InputLeftIcon, InputRightIcon } from "./InputIcon";

type FormInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  multiline?: boolean;
  leftIcon?: ComponentProps<typeof Ionicons>["name"];
  rightIcon?: ComponentProps<typeof Ionicons>["name"];
};

const FormInput = ({
  name,
  control,
  label,
  placeholder,
  required,
  leftIcon,
  rightIcon,
  type,
  multiline,
}: FormInputProps) => {
  const [isHide, setIsHide] = useState(true);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: required && `${label} is required!` },
    defaultValue: "",
  });

  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text className="text-sm font-medium text-black-100">{label}</Text>
      )}
      <View className="flex items-center relative">
        {leftIcon && <InputLeftIcon name={leftIcon} />}
        <TextInput
          className={clsx(
            "w-full py-3 px-3 text-base text-black-60 rounded-lg border border-primary-30 box-border",
            {
              "pl-10": leftIcon,
              "pr-10": rightIcon,
              "max-h-28 h-28": multiline,
            }
          )}
          value={field.value}
          placeholder={placeholder ?? ""}
          placeholderTextColor={"rgba(110, 112, 121, 1.0)"}
          onChangeText={field.onChange}
          secureTextEntry={name === "password" && isHide}
          multiline={multiline ?? false}
        />
        {rightIcon && <InputRightIcon name={rightIcon} />}
        {type === "password" && (
          <InputRightIcon
            name={isHide ? "eye-off" : "eye"}
            onPress={() => setIsHide(!isHide)}
          />
        )}
        {error && (
          <Text
            style={styles.errorText}
            className="text-xs font-medium text-red"
          >
            {error.message}
          </Text>
        )}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    rowGap: 4,
  },
  errorText: {
    position: "absolute",
    bottom: -16,
    left: 0,
  },
});
