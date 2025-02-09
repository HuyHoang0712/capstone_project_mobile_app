import { Stack } from "expo-router";
import {
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import HeaderPage from "@/components/navigation/HeaderPage";
export default function NotificationLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <>
          <HeaderPage />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="notifications" />
          </Stack>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
