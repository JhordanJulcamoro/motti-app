import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../../Shared/Colors'

export default function PlaceItem({ place }) {
    return (
        <View style={
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                gap: 15,
                marginBottom: 20
            }}>
                <Image source={{
                    uri: "https://maps.googleapis.com/maps/api/place/photo?" +
                        "maxwidth=400" +
                        "&photo_reference=" +
                        place?.photos[0]?.photo_reference +
                        "&key=AIzaSyBPJ1jwGwlcdM067zYXwd4AgzzAC_2mM8Y"
                }}
                    style={{ width: 110, height: 110, borderRadius: 15 }} />
            
            <View style={{ flex: 1 }}>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 18,
                        marginBottom: 5,
                    }}>{place.name}</Text>
                <Text style={{ fontSize: 18, marginBottom: 5 }}
                    numberOfLines={2}
                >{place.vicinity}</Text>
                <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5 }}>
                    <AntDesign name='star' size={20} color={Colors.YELLOW} />
                    <Text>{place.rating}</Text>
                </View>
            </View>
        </View>
    )
}