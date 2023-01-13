import { View, Text, TextInput } from 'react-native'
import React from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
  return (
    <View>
      <View style={{marginHorizontal:20,marginTop:30,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}} >
        <TextInput style={{paddingHorizontal:15}} placeholder='Search...'  />
        <IonIcons style={{marginHorizontal:15}} name='search-outline' size={18}  />
        
      </View>
    </View>
  )
}