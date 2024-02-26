import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {
    const categoryList = [
        {
            id: 1,
            name: 'Gas Station',
            value: 'gas_station',
            icon: require('./../../../assets/mototaxi_2.png')
        },
        {
            id: 2,
            name: 'Blue Station',
            value: 'blue_station',
            icon: require('./../../../assets/mototaxi_2.png')
        },
        {
            id: 3,
            name: 'Next Station',
            value: 'next_station',
            icon: require('./../../../assets/mototaxi_2.png')
        },
        {
            id: 4,
            name: 'Other Station',
            value: 'other_station',
            icon: require('./../../../assets/mototaxi_2.png')
        }
    ]

    return (
        <View style={{ marginTop: 15 }}>
            <Text
                style={{
                    fontSize: 20
                }}>Select Top Category</Text>

        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> console.log(item.name)}>
                    <CategoryItem category={item}/>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}