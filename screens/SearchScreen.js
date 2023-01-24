import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchGame from '../components/SearchGame'
import axios from 'axios'

const SearchScreen = ({ navigation }) => {
    const [searchfocus, setsearchfocus] = useState(false)

    const [searchdata, setsearchdata] = useState([])
    const [page, setpage] = useState(1)
    const [searchpage, setsearchpage] = useState(1)
    const [loading, setloading] = useState(false)

    async function getSearchData() {
        //console.log("page", page)
        setloading(true)
        const response = await axios.get(`https://api.rawg.io/api/games/the-witcher?key=2a267710c3a84b7c8052c2ebbb7c7d08&`)

        console.log(response.data)
        if (searchpage === 1) {
            setloading(false)
            setsearchdata(response.data)
        } else {
            setloading(false)
            setsearchdata([...searchdata, ...response.data])
        }
    }

    useEffect(() => {
        getSearchData()

    }, [searchdata])

console.log(searchdata)

    return (
        <View style={{flex:1}} >
            <SearchBar searchfocus={searchfocus} setsearchfocus={setsearchfocus} />
            <View style={{backgroundColor:"red" ,flex:1 }} >

                <SearchGame navigation={navigation}
                    loading={loading}

                    setsearchpage={setsearchpage}
                    searchload={searchpage}
                    searchdata={searchdata}
                />
            </View>
        </View>
    )
}

export default SearchScreen

//out of range hatasını çöz