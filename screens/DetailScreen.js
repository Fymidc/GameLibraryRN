import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
  }

  useEffect(() => {
    getData()

  }, [])
  console.log("detailden gelen", data)
  const Genres = (props) => {
    return (<View style={{ flex: 1, backgroundColor: "red" }} >
      <Text style={{ flexDirection: "row", color: "white", paddingLeft: 20, backgroundColor: "orange" }}>{props.data.name}</Text>
    </View>)
  }
  

  return (
    <View style={{ flex: 1 }} >
      <Image style={{ width: "100%", height: 250, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} source={{ uri: data.background_image }} />
      <View style={{
        backgroundColor: "red",
        position: "absolute",
        right: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: "80%",
        height: 75,
        flexDirection: "row",
        justifyContent: "space-around",
        top: 225
      }} >
        <Text>rating</Text>
        <Text>Star</Text>
        <Text>Released</Text>
      </View>

      <View style={{ flex: 1, marginTop: 100, justifyContent: "space-around" }} >
        <View style={{ flex: 1, backgroundColor: "grey" }} >
          <Text style={{ fontSize: 22, fontWeight: "800", paddingHorizontal: 10 }} >{data.name}</Text>
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }} >

            <Text>{data.released?.slice(0, 4)}</Text>
            <Text style={{ paddingHorizontal: 10 }} >website</Text>
          </View>
          {data.genres?.map((val, index) => <Genres key={index} data={val} />)}

        </View>
        <View style={{ backgroundColor: "yellow", flex: 2 }} >

          <ScrollView alwaysBounceVertical contentContainerStyle={{ padding: 10 }} >
            {full ?
              <Text style={{ fontSize: 15 }} >{data.description}</Text>
              :
              <Text style={{ fontSize: 15 }}>{data.description?.slice(0, 450)}</Text>
            }

            <Pressable onPress={() => setfull(!full)} ><Text style={{ color: "blue" }} >{full ? "Less" : "More"}</Text></Pressable>
          </ScrollView>
        </View>

        <View style={{ flex: 1, backgroundColor: "blue" }} >
          <Text>Platform Logos</Text>
        </View>

      </View>
    </View>
  )
}