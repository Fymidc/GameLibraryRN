import { View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen'
import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator()
const HomeScreenStack = createNativeStackNavigator()
const SearchScreenStack = createNativeStackNavigator()



function SearchStack({ navigation, route }) {


  
  
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="SearchS"
        component={SearchScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <HomeScreenStack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => {
          return {
          
            animation: "slide_from_right",
            headerShown: false
          }
        }}
      />
    </HomeScreenStack.Navigator>
  )
}
function HomeStack({ navigation, route }) {

  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="HomeS"
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <SearchScreenStack.Screen
        name="Detail"
        component={DetailScreen}
        options={() => {
          return {
            
            animation: "slide_from_right",
            headerShown: false
          }
        }}
      />
    </SearchScreenStack.Navigator>
  )
}


const navigation = () => {
  const [routeName, setRouteName] = useState();
//for make the tab bar hidden
  const ref = createNavigationContainerRef();
  const Placeholder = () => { return (<View />) }
  return (
    <NavigationContainer 
    ref={ref}
    onReady={() => {
      setRouteName(ref.getCurrentRoute().name)
    }}
    onStateChange={async () => {
      const previousRouteName = routeName;
      const currentRouteName = ref.getCurrentRoute().name;
      setRouteName(currentRouteName);
    }}
    >
      
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        tabBar={props => <TabBar {...props} routeName={routeName} /> }
      // tabBar={props => <TabBar {...props} />}
      >
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen  name="Home" component={HomeStack}  />

       
        <Tab.Screen name="Settings" component={Placeholder} />
        

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default navigation