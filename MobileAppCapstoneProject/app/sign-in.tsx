import React from "react";
import { Text, View } from "react-native";
import LogoComponent from "@/assets/svgs/logo";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "@/components/input/FormInput";

type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <View className="flex flex-col flex-1 items-center justify-center bg-bg-color font-popins">
      <View className="flex flex-col items-center py-10 w-[90%] h-[70%] bg-white rounded-lg shadow-xl">
        <View className="flex flex-[1_1_30%] gap-2 items-center w-full">
          <LogoComponent className="w-32 h-28" />
          <Text className="text-xl font-medium text-black-100">
            Welcome back!
          </Text>
          <Text className="text-sm font-normal text-black-40">
            Login to your account
          </Text>
        </View>
        <View className="flex flex-1 h-[50%] w-full px-5 mt-10 gap-y-5">
          <FormInput
            name="username"
            control={control}
            placeholder="Username"
            leftIcon="mail"
            label="Username"
          />
          <FormInput
            name="password"
            control={control}
            placeholder="Password"
            leftIcon="key"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
