import { Link, Stack, router } from "expo-router";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
export default function RequestLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="requests"
        options={{
          title: "Your Requests",
          presentation: "modal",
          headerLeft: () => (
            <Link href="/profile">
              <MaterialCommunityIcons
                name="arrow-left-bold"
                size={30}
                color={Colors.primary[100]}
              />
            </Link>
          ),
        }}
      />
      <Stack.Screen name="[requestID]" />
    </Stack>
  );
}
