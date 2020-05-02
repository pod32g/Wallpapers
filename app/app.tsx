// Welcome to the main entry point of the app.
//
// In this file, we'll be kicking off our app or storybook.

import React from "react"
import { YellowBox, View, Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrimaryNavigator } from "./navigation"
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper'
import { DrawerContent } from "./components";


YellowBox.ignoreWarnings([
  "componentWillMount is deprecated",
  "componentWillReceiveProps is deprecated",
  "Require cycle:",
])

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

// const RootStack = () => {
//   return (

//   )
// }

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={PrimaryNavigator} />
    </Drawer.Navigator>
  )
}


/**
 * This is the root component of our app.
 */
const App: React.FunctionComponent<{}> = () => {

  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}
        >
          <Stack.Screen
            name="primaryStack"
            component={RootDrawer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  )
}

export default App
