import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const RouteMap = () => {
  return (
    <MapView
      style={styles.mapView}
      initialRegion={{
        latitude: 10.773499642948758, 
        longitude: 106.6597660950705,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default RouteMap;
const styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
  },
});
