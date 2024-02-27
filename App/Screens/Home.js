import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {
  const [ placeList, setPlaceList] = useState([]);

  useEffect(()=>{
    GetNearBySearchPlace();
  },[])

  const GetNearBySearchPlace=()=>{
    GlobalApi.nearByPlace().then(resp=>{
      console.log("data ::",resp.data.results);
      setPlaceList(resp.data.results);
    })
  }
  return (
    <View style={{ padding: 5 }}>
      <Header />
      <GoogleMapView/>
      <CategoryList/>
    </View>
  );
}
