import React from "react";
import { LayoutChangeEvent, StyleSheet, View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useAnimatedProps,
  useSharedValue,
  withDecay,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import UpdateOrderStatusButton from "../button/UpdateOrderStatusButton";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants";
type OrderDetailSlideProps = {
  order: any;
};

const OrderDetailSlide = ({ order }: OrderDetailSlideProps) => {
  const translateY = useSharedValue(0);
  const height = useSharedValue(200);

  const pan = Gesture.Pan()
    .onChange((event) => {
      translateY.value = event.changeY;
    })
    .onFinalize((event) => {
      if (translateY.value < 0) {
        height.value = withSpring(500);
      } else {
        height.value = withSpring(200);
      }
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });
  const animatedContentStyles = useAnimatedStyle(() => {
    return {
      display: height.value === 500 ? "flex" : "none",
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.container, animatedStyles]}
        className="rounded-t-xl"
      >
        <Text className="text-lg text-primary-100 font-bold">
          Order Tracking
        </Text>
        <View style={styles.content}>
          <View>
            <View style={styles.titleContent}>
              <View
                style={{
                  padding: 8,
                  borderRadius: 50,
                  backgroundColor: Colors.primary[10],
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker-radius-outline"
                  size={20}
                  color={Colors.primary[100]}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text className="text-xs font-medium text-black-40">
                  Delivery address:
                </Text>
                <Text
                  style={styles.titleText}
                  className="text-base font-medium text-black-90"
                >
                  {order.delivery_point.name}
                </Text>
                <Text className="text-sm font-medium text-black-60">
                  {order.delivery_point.address}
                </Text>
              </View>
            </View>
            {/* Expanded content */}
            <Animated.View
              style={[animatedContentStyles, { marginTop: 20, rowGap: 20 }]}
            >
              <View style={styles.titleContent}>
                <View
                  style={{
                    padding: 8,
                    borderRadius: 50,
                    backgroundColor: Colors.secondary[20],
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker-radius-outline"
                    size={20}
                    color={Colors.secondary[100]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="text-xs font-medium text-black-40">
                    Depot address:
                  </Text>
                  <Text
                    style={styles.titleText}
                    className="text-base font-medium text-black-90"
                  >
                    {order.pickup_point.name}
                  </Text>
                  <Text className="text-sm font-medium text-black-60">
                    {order.pickup_point.address}
                  </Text>
                </View>
              </View>
              <View style={styles.titleContent}>
                <View
                  style={{
                    padding: 8,
                    borderRadius: 50,
                    backgroundColor: Colors.primary[10],
                  }}
                >
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={20}
                    color={Colors.primary[100]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="text-xs font-medium text-black-40">
                    Pick-up time:
                  </Text>
                  <Text
                    style={styles.titleText}
                    className="text-base font-medium text-black-90"
                  >
                    {order.time_in}
                  </Text>
                </View>
              </View>

              <View style={styles.titleContent}>
                <View
                  style={{
                    padding: 8,
                    borderRadius: 50,
                    backgroundColor: Colors.primary[10],
                  }}
                >
                  <MaterialCommunityIcons
                    name="weight"
                    size={20}
                    color={Colors.primary[100]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="text-xs font-medium text-black-40">
                    Payload:
                  </Text>
                  <Text
                    style={styles.titleText}
                    className="text-base font-medium text-black-90"
                  >
                    {order.payload} kg
                  </Text>
                </View>
                {/*  */}
                <View
                  style={{
                    padding: 8,
                    borderRadius: 50,
                    backgroundColor: Colors.primary[10],
                  }}
                >
                  <MaterialCommunityIcons
                    name="barcode"
                    size={20}
                    color={Colors.primary[100]}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text className="text-xs font-medium text-black-40">
                    Shipcode:
                  </Text>
                  <Text
                    style={styles.titleText}
                    className="text-base font-medium text-black-90"
                  >
                    {order.ship_code}
                  </Text>
                </View>
              </View>
            </Animated.View>
          </View>

          <UpdateOrderStatusButton id={order.id} curStatus={order.status} />
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default OrderDetailSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    padding: 16,
    rowGap: 8,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContent: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 16,
  },
  titleText: {
    overflow: "hidden",
  },
});
