import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const {location, setLocation} = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace();
  }, [])

  const GetNearBySearchPlace = () => {
    if (location) {
      console.log("a: ",location," b:",location)
      GlobalApi.nearByPlace(location.coords.latitude,location.coords.longitude).then(resp => {
        setPlaceList(resp.data.results);
      })
    }
  }
  return (
    <FlatList
      style={{ backgroundColor: '#FFF' }}
      data={[null]} 
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Header />
          <GoogleMapView />
          <CategoryList />
          {placeList ? <PlaceList placeList={placeList} /> : null}
        </View>
      )}
    />
  );
}
