import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingScreen from '../screens/SettingScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen'
import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator()
const HomeScreenStack = createNativeStackNavigator()
const SearchScreenStack = createNativeStackNavigator()



function SearchStack({ navigation, route }) {


  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Detail") {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
  
  
  
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
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Detail") {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);
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

  const Placeholder = () => { return (<View />) }
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
        tabBar={props => <TabBar {...props} />}
      // tabBar={props => <TabBar {...props} />}
      >
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Home" component={HomeStack} />


        <Tab.Screen name="Settings" component={Placeholder} />
        

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default navigation