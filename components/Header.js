import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{flexDirection:"row",flex:1,padding:10,backgroundColor:"red",height:70,alignItems:"center"}} >
      <Text>İCON</Text>
      <Text style={{paddingHorizontal:20,fontSize:18}} >Hello Fatih Welcome</Text>
    </View>
  )
}