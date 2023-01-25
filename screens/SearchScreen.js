import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchGame from '../components/SearchGame'
import axios from 'axios'

const SearchScreen = ({ navigation, route }) => {
    const [searchfocus, setsearchfocus] = useState(false)
    const [searchtext, setsearchtext] = useState("")

    const [searchdata, setsearchdata] = useState([])
    const [page, setpage] = useState(1)
    const [searchpage, setsearchpage] = useState(1)
    const [loading, setloading] = useState(false)

    //const searchtext = "the witcher"
    const newsearchtext = searchtext.replace(" ", "%20")

    async function getSearchData() {
        //console.log("page", page)
        setloading(true)
        const response = await axios.get(`https://api.rawg.io/api/games?search=${newsearchtext}&key=2a267710c3a84b7c8052c2ebbb7c7d08&&page=${searchpage}`)

        // console.log(response.data)
        if (searchpage === 1) {
            setloading(false)
            setsearchdata(response.data.results)
        } else {
            setloading(false)
            setsearchdata([...searchdata, ...response.data.results])
        }
    }

    useEffect(() => {
        getSearchData()

    }, [searchtext,searchpage])

    //console.log(searchdata)

    return (
        <View style={{ flex: 1 }} >
            <SearchBar setsearchtext={setsearchtext} searchtext={searchtext} searchfocus={searchfocus} setsearchfocus={setsearchfocus} />
            <View style={{ flex: 1, justifyContent: "center" ,paddingHorizontal:5}} >
                {searchtext.length === 0 ? <Text
                    style={{textAlign:"center" , fontSize:18,color:"grey"}} >
                    Search some fun
                </Text>

                    :

                    <SearchGame navigation={navigation}
                        route={route.name}
                        loading={loading}

                        setsearchpage={setsearchpage}
                        searchload={searchpage}
                        searchdata={searchdata}
                    />
                }
            </View>
        </View>
    )
}

export default SearchScreen

//out of range hatasını çöz