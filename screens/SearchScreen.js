import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchGame from '../components/SearchGame'
import axios from 'axios'
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, AdEventType, BannerAdSize } from 'react-native-google-mobile-ads';


AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

RewardedAd.createForAdRequest(TestIds.REWARDED);

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2976719493824952~7681507297';

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

    }, [searchtext, searchpage])

    //console.log(searchdata)

    return (
        <View style={{ flex: 1, backgroundColor: "black" }} >
            <SearchBar setsearchtext={setsearchtext} searchtext={searchtext} searchfocus={searchfocus} setsearchfocus={setsearchfocus} />
            <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 5 }} >
                {searchtext.length === 0 ? <Text
                    style={{ textAlign: "center", fontSize: 18, fontWeight: "300", color: "rgba(255, 191, 0, 0.4)" }} >
                    Search some fun..
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
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    )
}

export default SearchScreen

//out of range hatasını çöz