import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0421,
      });
    }
  }, []);

  return (
    <View style={{ marginTop: 5 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "roboto-bold",
        }}
      >
        Where do you go?
      </Text>
      <MapView
        style={{
          width: Dimensions.get("screen").width * 0.98,
          height: Dimensions.get("screen").height * 0.23,
          borderRadius: 20,
          // width: Dimensions.get('screen').width*0.89,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
    </View>
  );
}
