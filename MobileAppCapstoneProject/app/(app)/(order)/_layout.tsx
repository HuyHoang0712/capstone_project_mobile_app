import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
export default function AppLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
