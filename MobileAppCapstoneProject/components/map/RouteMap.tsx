import React from "react";
import { StyleSheet } from "react-native";
import { MapView, Camera } from "@rnmapbox/maps";

const defaultCamera = {
  centerCoordinate: [12.338, 45.4385],
  zoomLevel: 17.4,
};

const RouteMap = () => {
  return (
    <MapView style={styles.mapView}>
      <Camera defaultSettings={defaultCamera} />
    </MapView>
  );
};

export default RouteMap;
const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
