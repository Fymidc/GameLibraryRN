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
         
           height: 200,
            width:160 ,
            marginHorizontal:10}}
      >
      <Image source={{uri:`${props.data?.background_image}`}} style={{width:160,height:200}}/>
       <Text>{props.data?.name}</Text>
      </TouchableOpacity>

    </View>
  )
}
//image ekle ve detail sayfasını tasarla