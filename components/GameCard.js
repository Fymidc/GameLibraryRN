import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function GameCard(props) {

  return (
    <View style={{ alignItems: "center" }} >
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Detail", {
          id: props.data.id,
          name: props.data.slug,
        })}
        activeOpacity={0.8}
        style={{
         

          height: props.route === "SearchS" ? 320 : 320,
          width: props.route === "SearchS" ? 280 : 220,
          marginHorizontal: 10
        }}
      >

        <Image source={{ uri: `${props.data?.background_image}` }} style={{
          width: props.route === "SearchS" ? 280 : 220,
          height: props.route === "SearchS" ? "75%" : "75%",
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          
        }} />
        <Text style={{ textAlign: "center", padding: 5,color:"black" ,backgroundColor:"#FFBF00",fontFamily:"BillyMoney-Regular",fontSize:18}} >{props.data?.name}</Text>
      </TouchableOpacity>

    </View>
  )
}
