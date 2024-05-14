import React from "react";
import { TextInput, View, Text } from "react-native";
import { useController } from "react-hook-form";
import clsx from "clsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";
import { InputLeftIcon } from "./InputIcon";
type FormInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  required?: boolean;
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
}: FormInputProps) => {
  const { field } = useController({
    name,
    control,
    // rules: { required ?? false },
    defaultValue: "",
  });
  return (
    <View className="flex flex-1 w-full space-y-2">
      {label && <Text>{label}</Text>}
      <View className="flex items-center relative">
        {leftIcon && <InputLeftIcon name={leftIcon} />}
        <TextInput
          className={clsx(
            "w-full py-3 text-base text-black-60 rounded-lg border border-primary-30",
            {
              "pl-10": leftIcon,
              "pr-10": rightIcon,
            }
          )}
          value={field.value}
          placeholder={placeholder ?? ""}
          placeholderTextColor={"rgba(110, 112, 121, 1.0)"}
          onChangeText={field.onChange}
        />
      </View>
    </View>
  );
};

export default FormInput;
