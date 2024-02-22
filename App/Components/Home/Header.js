import { View, Text, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:'center',
        padding:5,
      }}
    >
      <Image
        source={require("./../../../assets/icon.png")}
        style={styles.logo}
      />

      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image
        source={require("./../../../assets/icon_motti.png")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width:Dimensions.get('screen').width*0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
