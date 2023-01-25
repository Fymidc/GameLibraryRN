import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function GameCard(props) {
  //console.log("gamecard",props.data)
  return (
    <View style={{alignItems:"center"}} >
      <TouchableOpacity 
      onPress={()=>props.navigation.navigate("Detail",{
                  id:props.data.id,
                  name:props.data.slug,
                  })}
        activeOpacity={0.8}
        style={{
          right: 60 ,
         
           height: props.route === "SearchS" ? 320 : 260,
            width:props.route === "SearchS" ? 280 : 220 ,
            marginHorizontal:10}}
      >
      <Image source={{uri:`${props.data?.background_image}`}} style={{width:props.route === "SearchS" ? 280 : 220,height:props.route === "SearchS" ? 320 :260}}/>
       <Text style={{textAlign:"center",padding:5}} >{props.data?.name}</Text>
      </TouchableOpacity>

    </View>
  )
}
//image ekle ve detail sayfasını tasarla