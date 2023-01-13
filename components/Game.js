import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'


export default function Game(props) {


  

  const loadpage = () => {
    console.log("laod page")
   
    props.sload(props.load + 1)
    
  }

  footerIndicator = () => {
    return props.loading ? (
      <View
        style={{
          flex:1,
          justifyContent:"center"
        }}
      >
        <ActivityIndicator style={{alignSelf:"center"}} animating  size="large"/>
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
      flex: 4,

      padding: 5
    }} >
      <View  >

        {props.screen === "search"
          ? <View />
          : <Text style={{ paddingVertical: 25 }} >The props define the card </Text>
        }

        {props.data ? <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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


        /> : <ActivityIndicator  />
        }

        {/* { props.data.results == undefined ? <Text>Loading</Text> : props.data.results.map((val,index)=>
          <GameCard navigation={props.navigation}  data={val} screen={props.screen} />
      
         )}
           */}


      </View>
    </View>
  )
}

//images load slow make it faster and make the end reach a bit earlier 
