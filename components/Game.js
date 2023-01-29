import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'


export default function Game(props) {




  const loadpage = () => {
    console.log("laod page")

    props.sload(props.load + 1)

  }
  const loadlmpage = () => {
    console.log("laod page")

    props.lmsload(props.lmload + 1)

  }

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

  //console.log(props.data.results)
  const renderItem = ({ item }) => (
    <GameCard navigation={props.navigation} data={item} screen={props.screen} />
  );

  return (
    <View style={{
      justifyContent: "center",
      flex: 1,

      padding: 5
    }} >
      <View >
        <View style={{height:380}} >

          <Text style={{marginHorizontal:20, paddingBottom:20, color:"#FFBF00",fontSize:20 ,fontFamily:"Box Office - Demo"}} >DISCOVER All Games </Text>

          {props.data ? <FlatList
          showsHorizontalScrollIndicator={false}
         
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            horizontal={true}
            nestedScrollEnabled
            ListFooterComponent={footerIndicator}

            onEndReached={({ distanceFromEnd }) => {
              console.log("distance from end", distanceFromEnd)
              if (distanceFromEnd > 0) {
                loadpage()

              };
            }
            }
            onEndReachedThreshold={0.6}


          /> : ""
          }
        </View>

        <View style={{height:380}} >

          <Text style={{marginHorizontal:20, paddingBottom:20,color:"#FFBF00",fontSize:20,fontFamily:"Box Office - Demo"}} >LAST MONTH ReLeASeD </Text>

          {props.lmdata ? <FlatList
           showsHorizontalScrollIndicator={false}
            data={props.lmdata}
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




      </View>
    </View>
  )
}
