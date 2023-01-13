import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Game from '../components/Game'
import axios from 'axios'
export default function HomeScreen({ navigation }) {

  const [ndata, setdata] = useState([])
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(false)
  // https://api.rawg.io/api/games?key=2a267710c3a84b7c8052c2ebbb7c7d08&page=2
  async function getData() {
    console.log("page", page)
    setloading(true)
    const response = await axios.get(`https://api.rawg.io/api/games?key=2a267710c3a84b7c8052c2ebbb7c7d08&page=${page}`)
 
    if(page === 1){
      setloading(false)
      setdata(response.data.results)
    }else{
      setloading(false)
      setdata([...ndata,...response.data.results])
    }
}

useEffect(() => {
  getData()

}, [page])
return (
  <View style={{ flex: 1 }} >
    <SearchBar />
    <Game navigation={navigation} loading={loading} sload={setpage} load={page} data={ndata} />
    <Game navigation={navigation} loading={loading} sload={setpage} load={page} data={ndata} />

  </View>
)
}