import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "./App/Context/UserLocationContext";
import { useFonts } from 'expo-font';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded, fontError] = useFonts({
    'roboto-bold': require('./assets/Fonts/RobotoCondensed-Bold.ttf'),
    'roboto-light': require('./assets/Fonts/RobotoCondensed-Light.ttf'),
    'roboto': require('./assets/Fonts/RobotoCondensed-Medium.ttf'),
    'roboto-regular': require('./assets/Fonts/RobotoCondensed-Regular.ttf'),
    'roboto-thin': require('./assets/Fonts/RobotoCondensed-Thin.ttf'),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("Location::",location)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <UserLocationContext.Provider 
      value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
