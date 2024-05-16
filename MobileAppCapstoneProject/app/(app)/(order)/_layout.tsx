import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
export default function OrderLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="orders" />
    </Stack>
  );
}
