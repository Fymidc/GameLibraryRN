import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'

const SearchGame = (props) => {
    const loadlmpage = () => {
        console.log("laod page")
    
        props.setsearchpage(props.searchload + 1)
    
      }
    const renderItem = ({ item }) => (
        <GameCard navigation={props.navigation} data={item} screen={props.screen} />
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
    <View>
      {props.searchdata ? <FlatList
            data={props.searchdata}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
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