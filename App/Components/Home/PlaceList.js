import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'

export default function PlaceList({placeList}) {
  return (
    <View>
      <Text
      style={{
        fontSize:20,
        margin:10
    }}
      >Found {placeList ? placeList.length : 0} Places</Text>
      <FlatList 
      data = { placeList}
      renderItem={({item}) => (
        <PlaceItem place={item}/>
      )}
      />
    </View>
  )
}