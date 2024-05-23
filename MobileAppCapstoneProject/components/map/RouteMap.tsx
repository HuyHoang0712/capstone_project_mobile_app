import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants";

import * as Location from "expo-location";

type RouteMapProps = {
  pickUpLocation: {
    latitude: number;
    longitude: number;
  };
  deliveryLocation: {
    latitude: number;
    longitude: number;
  };
};

const RouteMap = ({ pickUpLocation, deliveryLocation }: RouteMapProps) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const latitudeDelta =
    Math.abs(pickUpLocation.latitude - deliveryLocation.latitude) * 2;
  const longitudeDelta =
    Math.abs(pickUpLocation.longitude - deliveryLocation.longitude) * 2;
  const region = {
    latitude: (pickUpLocation.latitude + deliveryLocation.latitude) / 2,
    longitude: (pickUpLocation.longitude + deliveryLocation.longitude) / 2,
    latitudeDelta,
    longitudeDelta,
  };
  return (
    <MapView
      style={styles.mapView}
      initialRegion={region}
      provider={PROVIDER_DEFAULT}
    >
      <Marker
        coordinate={{
          latitude: pickUpLocation.latitude,
          longitude: pickUpLocation.longitude,
        }}
      >
        <FontAwesome5 name="map-marker-alt" size={40} color={Colors.red} />
      </Marker>
      <Marker
        coordinate={{
          latitude: deliveryLocation.latitude,
          longitude: deliveryLocation.longitude,
        }}
      >
        <FontAwesome5
          name="map-marker-alt"
          size={40}
          color={Colors.primary[100]}
        />
      </Marker>
      {location && (
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          <FontAwesome5
            name="truck-moving"
            size={16}
            color={Colors.primary[100]}
          />
        </Marker>
      )}

      <MapViewDirections
        origin={pickUpLocation}
        destination={deliveryLocation}
        apikey="AIzaSyCfuq0JwparJ9EgAYAk5qleY89P1w0RhjI"
        mode="DRIVING"
        strokeWidth={3}
        strokeColor={Colors.secondary[100]}
      />
    </MapView>
  );
};

export default RouteMap;
const styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
  },
});
