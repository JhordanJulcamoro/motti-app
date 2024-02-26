import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState(null);

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0421,
      });
      console.log("mapRegion::", mapRegion);
    }
  }, [location]);

  return (
    <View style={{ marginTop: 5 }}>
      <MapView
        style={{
          width: Dimensions.get("screen").width * 0.98,
          height: Dimensions.get("screen").height * 0.23,
          borderRadius: 20,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={false} //muestra el boton azul de la ubicacion actual
        region={mapRegion}
      >
        {mapRegion && (
          <Marker
            title="You are here"
            description="This is your current location"
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
          >
            <Image
              source={require("../../../assets/persona.png")}
              style={{
                width: 32,
                height: 32,
              }}
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
}
