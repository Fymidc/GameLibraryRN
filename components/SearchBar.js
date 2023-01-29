import { View, Text, TextInput } from 'react-native'
import React from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'

export default function SearchBar(props) {

  const searchfocus = () => {
    console.log("search focus")
    props.setsearchfocus(true)
  }



  return (
    <View style={{}} >
      <View style={{
        marginHorizontal: 20,
        marginTop: 30,
        padding:5,
        borderRadius:10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:"#222222"
      }} >
        <TextInput style={{ paddingHorizontal: 15 ,fontSize:17,color:"#FFBF00"}}
          value={props.searchtext}
          onFocus={() => searchfocus()}
          placeholder='Search...'
         placeholderTextColor={"rgba(255, 191, 0, 0.4)"}
          onChangeText={props.setsearchtext}

        />
        {props.searchfocus === true ? <IonIcons onPress={() => props.setsearchtext("")} color={"#FFBF00"} style={{ marginHorizontal: 15 }} name='close-outline' size={19} />

          :
          <IonIcons style={{ marginHorizontal: 15 }}color={"#FFBF00"} name='search-outline' size={19} />
        }


      </View>
    </View>
  )
}

//searxh icon not visible