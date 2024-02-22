import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState({
    latitude: -7.1614,
    longitude: -78.5001,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });


  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{
          width: Dimensions.get("screen").width * 1,
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
