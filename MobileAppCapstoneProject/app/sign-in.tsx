import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import LogoComponent from "@/assets/svgs/logo";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "@/components/input/FormInput";
import { Colors } from "@/constants";
import SolidButton from "@/components/button/SolidButton";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { router } from "expo-router";
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
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data)
      .unwrap()
      .then((res) => {
        router.replace("home");
      })
      .catch((err) => {
        Alert.alert("Login Failed!", err.data.error_message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.pageContainer}>
          <View style={styles.contentContainer} className="shadow-xl">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.titleContainer}>
                <LogoComponent className="w-32 h-28" />
                <Text className="text-xl font-medium text-black-100">
                  Welcome back!
                </Text>
                <Text className="text-sm font-normal text-black-40">
                  Login to your account
                </Text>
              </View>
              <View style={styles.formContainer}>
                <FormInput
                  name="username"
                  control={control}
                  placeholder="Username"
                  leftIcon="mail"
                  label="Username"
                  required={true}
                />
                <FormInput
                  name="password"
                  control={control}
                  placeholder="Password"
                  leftIcon="key"
                  type="password"
                  label="Password"
                  required={true}
                />
              </View>
              <SolidButton title="Sign In" onPress={handleSubmit(onSubmit)} />
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors["bg-color"],
  },
  contentContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 40,
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 40,
    paddingHorizontal: 20,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },
});
