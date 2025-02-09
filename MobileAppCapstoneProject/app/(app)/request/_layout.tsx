import { Link, Stack, router } from "expo-router";
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import HeaderPage from "@/components/navigation/HeaderPage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
export default function RequestLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <>
          <HeaderPage />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="requests" />
          </Stack>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
