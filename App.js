/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from "./navigation/navigation"
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Navigation/>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  options={{headerShown:false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown:false,animation:"slide_from_right"}} name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
