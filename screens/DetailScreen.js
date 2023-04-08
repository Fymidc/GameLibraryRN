import { View, Text, Image, Pressable, ScrollView, Linking, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


export default function DetailScreen({ route }) {
  const {
    id,
    name,
  } = route.params

  const [data, setdata] = useState([])


  const [loading, setloading] = useState(false)
  const [full, setfull] = useState(false)
  // https://api.rawg.io/api/games?key=2a267710c3a84b7c8052c2ebbb7c7d08&page=2
  async function getData() {
    // console.log("page", page)
    setloading(true)
    const response = await axios.get(`https://api.rawg.io/api/games/${name}?key=2a267710c3a84b7c8052c2ebbb7c7d08&`)

    setdata(response.data)
    setloading(false)
  }

  useEffect(() => {
    getData()

  }, [])

  const cleanDescription = data.description?.replace(/<\/?[^>]+(>|$)/g, "")

  return (

    <View style={{ flex: 1, backgroundColor: "black" }} >
      {loading === false ?
        <View style={{flex: 1,}}>

          <Image style={{ width: "100%", height: 250, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} source={{ uri: data.background_image }} />
          <View style={{
            backgroundColor: "white",
            elevation: 4,
            position: "absolute",
            right: 0,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            width: "70%",
            height: "9%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            top: 225,
            zIndex:22
          }} >

            <View style={{ alignItems: "center",position:"relative" }} >
              <Fontisto name='star' color={"yellow"} size={16} />
              <Text style={{ paddingTop: 10 }} >{data?.rating}/5</Text>
            </View>

            <View style={{ alignItems: "center" ,position:"relative" }} >
              <MaterialIcons name='developer-mode' size={18} />
              <Text style={{ paddingTop: 10 }} >{data?.creators_count}</Text>
            </View>

            <View style={{ alignItems: "center",position:"relative"  }} >
              <MaterialIcons name='update' color={"green"} size={18} />
              <Text style={{ paddingTop: 10 }} >{data?.updated?.slice(0, 4)}</Text>

            </View>
          </View>

          <View style={{
            flex: 1,
            marginTop: 80,
            justifyContent: "space-around",
            paddingHorizontal: 10
          }} >
            <View style={{flex:2 }} >
              <Text style={{ fontSize: 32, fontWeight: "800", paddingHorizontal: 10, color: "#FFBF00" }} >{data?.name}</Text>
              <View style={{ flexDirection: "row", paddingHorizontal: 10, marginVertical: 5 ,alignItems:"center"}} >

                <Text style={{ color: "#eceded" }} >{data.released?.slice(0, 4)}</Text>
                <MaterialCommunityIcons onPress={() => Linking.openURL(`${data?.website}`)} style={{ paddingHorizontal: 10 }} color={"#eceded"} name='web' size={18} />
                
              </View>
              <View style={{ flexDirection: "row" }} >

                {data.genres?.map((val, index) =>
                  <Text style={{
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: "#eceded",
                    paddingHorizontal: 5,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    color: "#eceded"
                  }} key={index}
                  > {val.name} </Text>)}
              </View>

            </View>
            <View style={{ flex: 6, marginVertical: 5 }} >
              <Text style={{ paddingTop: 10, paddingHorizontal: 10, fontSize: 18, color: "#FFBF00" }} >Plot Summary</Text>
              <ScrollView alwaysBounceVertical contentContainerStyle={{ padding: 10 }} >
                {full ?
                  <Text style={{ fontSize: 15, color: "#eceded" }} >{cleanDescription}</Text>
                  :
                  <Text style={{ fontSize: 15, color: "#eceded" }}>{cleanDescription?.slice(0, 450)}</Text>
                }

                <Pressable onPress={() => setfull(!full)} ><Text style={{ color: "grey" }} >{full ? "Less" : "... more"}</Text></Pressable>
              </ScrollView>
            </View>

            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }} >
              {data.parent_platforms?.map((val, index) => (
                <Fontisto
                  key={index}
                  name={val.platform?.slug === "nintendo" ? "airplay" : val.platform?.slug === "pc" ? "windows" : val.platform?.slug === "mac" ? "apple" : val.platform?.slug}
                  color={"#FFBF00"} size={19} />
              ))}
            </View>

          </View>
        </View>
        :
        <View style={{flex:1,justifyContent:"center"}} >


          <ActivityIndicator size={30} />
        </View>
      }

    </View>
  )
}