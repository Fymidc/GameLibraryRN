import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{flexDirection:"row",flex:1,padding:10,height:30,alignItems:"center"}} >
     
      <Text style={{paddingHorizontal:20,fontSize:20,fontWeight:"700",color:"#ECEDED"}} >V Game Library</Text>
    </View>
  )
}