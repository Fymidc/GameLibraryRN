import { View, Text, TextInput } from 'react-native'
import React from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'

export default function SearchBar(props) {

  const searchfocus = () => {
    console.log("search focus")
    props.setsearchfocus(true)
  }



  return (
    <View>
      <View style={{
        marginHorizontal: 20,
        marginTop: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }} >
        <TextInput style={{ paddingHorizontal: 15 ,fontSize:17 }}
          value={props.searchtext}
          onFocus={() => searchfocus()}
          placeholder='Search...'
          onChangeText={props.setsearchtext}

        />
        {props.searchfocus === true ? <IonIcons onPress={() => props.setsearchtext("")} style={{ marginHorizontal: 15 }} name='close-outline' size={19} />

          :
          <IonIcons style={{ marginHorizontal: 15 }} name='search-outline' size={19} />
        }


      </View>
    </View>
  )
}

//searxh icon not visible