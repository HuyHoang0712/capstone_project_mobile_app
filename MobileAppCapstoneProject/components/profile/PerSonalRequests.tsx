import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ITEM_HEIGHT = 50;
const PerSonalRequests = () => {
  return (
    <View style={styles.container} className="shadow-sm">
      <View style={styles.header}>
        <Text className="text-lg font-semibold text-primary-100">
          Your Requests
        </Text>
      </View>
      <View style={{ width: "100%", height: 250 }}>
        <FlatList
          data={[
            { id: "1" },
            { id: "2" },
            { id: "3" },
            { id: "4" },
            { id: "5" },
            { id: "6" },
            { id: "7" },
            { id: "8" },
            { id: "9" },
            { id: "10" },
            { id: "11" },
            { id: "12" },
            { id: "13" },
            { id: "14" },
            { id: "15" },
            { id: "16" },
            { id: "17" },
            { id: "18" },
            { id: "19" },
            { id: "20" },
            { id: "21" },
            { id: "22" },
            { id: "23" },
            { id: "24" },
            { id: "25" },
            { id: "26" },
            { id: "27" },
            { id: "28" },
            { id: "29" },
            { id: "30" },
            { id: "31" },
            { id: "32" },
            { id: "33" },
            { id: "34" },
            { id: "35" },
            { id: "36" },
            { id: "37" },
            { id: "38" },
            { id: "39" },
            { id: "40" },
            { id: "41" },
            { id: "42" },
            { id: "43" },
            { id: "44" },
            { id: "45" },
            { id: "46" },
            { id: "47" },
            { id: "48" },
            { id: "49" },
            { id: "50" },
            { id: "51" },
            { id: "52" },
            { id: "53" },
            { id: "54" },
            { id: "55" },
            { id: "56" },
            { id: "57" },
            { id: "58" },
            { id: "59" },
            { id: "60" },
            { id: "61" },
            { id: "62" },
            { id: "63" },
            { id: "64" },
            { id: "65" },
            { id: "66" },
            { id: "67" },
            { id: "68" },
            { id: "69" },
            { id: "70" },
            { id: "71" },
            { id: "72" },
          ]}
          renderItem={({ item }) => (
            <View>
              <Text>Request</Text>
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          initialScrollIndex={0}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default PerSonalRequests;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    marginBottom: 40,
    rowGap: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
