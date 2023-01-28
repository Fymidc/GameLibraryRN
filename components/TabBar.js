import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import RBSheet from 'react-native-raw-bottom-sheet';

function TabBar({ state, descriptors, navigation }) {
    const refRBSheet = React.useRef();
    return (
        <View style={{ flexDirection: 'row' }}>
            <RBSheet
        height={150}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            elevation: 8,
          },
          wrapper: {
            backgroundColor: "rgba(153, 153, 153, 0.3)",
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{
          flex: 1,
          paddingTop: 5
        }} >

          <TouchableOpacity  activeOpacity={0.8} style={{ flexDirection: "row", paddingHorizontal: 15,paddingVertical:5 ,alignItems: "center" }} >
            <Text style={{ fontSize: 16, color: "black", paddingHorizontal: 5 }} >Contact Me</Text>
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.8} style={{ flexDirection: "row", paddingHorizontal: 15,paddingVertical:5, alignItems: "center" }} >
            <Text style={{ fontSize: 16, color: "black", paddingHorizontal: 5 }} >Privacy Policy</Text>
          </TouchableOpacity>

        </View>

      </RBSheet>


            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return label === "Home" ? (

                    <TouchableOpacity
                    activeOpacity={0.8}
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}

                        style={{ flex: 1, alignItems: "center",height:56,justifyContent:"center" }}
                    >


                        <IonIcons style={{ color: isFocused ? '#673ab7' : '#222' }}size={45}  name='home-outline' />

                    </TouchableOpacity>
                )  : label === "Settings" ? (
                    <TouchableOpacity
                    activeOpacity={0.8}
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={()=> refRBSheet?.current?.open()}

                        style={{ flex: 1, alignItems: "center" ,height:56,justifyContent:"center"}}
                    >


                        {label === "Settings" && <IonIcons  style={{ color: isFocused ? '#673ab7' : '#222' }} size={25} name='settings-outline' />}

                    </TouchableOpacity>
                ) :  (
                    <TouchableOpacity
                    activeOpacity={0.8}
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}

                        style={{ flex: 1, alignItems: "center" ,height:56,justifyContent:"center"}}
                    >
                        {label === "Search" && <IonIcons style={{ color: isFocused ? '#673ab7' : '#222' }} size={25}  name='search-outline' />}

                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default TabBar