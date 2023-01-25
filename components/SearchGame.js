import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import GameCard from './GameCard'

const SearchGame = (props) => {
    const loadlmpage = () => {
        console.log("laod page")
    
        props.setsearchpage(props.searchload + 1)
    
      }
    const renderItem = ({ item }) => (
        <GameCard route={props.route} navigation={props.navigation} data={item} screen={props.screen} />
      );

      footerIndicator = () => {
        return props.loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center"
            }}
          >
            <ActivityIndicator style={{ alignSelf: "center" }} animating size="large" />
          </View>
        ) : null
      };


  return (
    <View style={{height:380}} >
      {props.searchdata ? <FlatList
      showsHorizontalScrollIndicator={false}
            data={props.searchdata}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            horizontal={true}
            nestedScrollEnabled
            ListFooterComponent={footerIndicator}

            onEndReached={({ distanceFromEnd }) => {
              console.log("distance from end", distanceFromEnd)
              if (distanceFromEnd > 0) {
                loadlmpage()

              };
            }
            }
            onEndReachedThreshold={0.6}


          /> : ""
          }
    </View>
  )
}

export default SearchGame