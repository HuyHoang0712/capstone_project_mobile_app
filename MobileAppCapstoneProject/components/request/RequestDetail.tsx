import React from "react";
import { View, Text, StyleSheet } from "react-native";

type RequestDetailProps = {
  data: any;
};

const RequestDetail = ({ data }: RequestDetailProps) => {
  return (
    <View style={styles.cover}>
      <View style={styles.container}>
        <Text>RequestDetail</Text>
      </View>
    </View>
  );
};

export default RequestDetail;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0 ,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
});
