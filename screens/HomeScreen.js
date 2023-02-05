import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Game from '../components/Game'
import axios from 'axios'
import Header from '../components/Header'
export default function HomeScreen({ navigation }) {

  const [ndata, setdata] = useState([])
  const [lmndata, setlmdata] = useState([])
  const [page, setpage] = useState(1)
  const [lmpage, setlmpage] = useState(1)
  const [loading, setloading] = useState(false)

  const today = new Date().toJSON().toString().slice(0,10)
  const lastMonth = new Date();
  lastMonth.setDate(1);
  lastMonth.setMonth(lastMonth.getMonth()-1)
 const oneMonthEarlier = lastMonth.toJSON().toString().slice(0,10)


  async function getData() {
    
    setloading(true)
    const response = await axios.get(`https://api.rawg.io/api/games?key=2a267710c3a84b7c8052c2ebbb7c7d08&page=${page}`)

    if (page === 1) {
      setloading(false)
      setdata(response.data.results)
    } else {
      setloading(false)
      setdata([...ndata, ...response.data.results])
    }
  }
  async function getLastMonthData() {
    //console.log("page", page)
    setloading(true)
    const response = await axios.get(`https://api.rawg.io/api/games?dates=${oneMonthEarlier},${today}&key=2a267710c3a84b7c8052c2ebbb7c7d08&&page=${page}`)

    if (lmpage === 1) {
      setloading(false)
      setlmdata(response.data.results)
    } else {
      setloading(false)
      setlmdata([...lmndata, ...response.data.results])
    }
  }


  useEffect(() => {
    getData()

  }, [page])
  useEffect(() => {
    getLastMonthData()

  }, [lmpage])
  return (
    <View style={{ flex: 1 , backgroundColor:"black"}} >
      <Header />
      <View style={{ flex: 10 }}>

        <ScrollView  >

          <Game navigation={navigation}
            loading={loading}
            sload={setpage}
            lmsload={setlmpage}
            lmload={lmpage}
            lmdata={lmndata}
            load={page}
            data={ndata} />
        </ScrollView>
      </View>



      {/* <Game navigation={navigation} loading={loading} lmsload={setlmpage} lmload={lmpage} lmdata={lmndata} /> */}

    </View>
  )
}