import React from "react"
import 'react-native-gesture-handler'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { PrimaryNavigator } from "./primary-navigator"
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper'
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from "react-native"


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
    </View>
  );
}


const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="primaryStack"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={RootStack} />
    </Drawer.Navigator>
  )
}


export const RootNavigator = (() => {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={DarkTheme}>
        <RootDrawer />
      </NavigationContainer>
    </PaperProvider>
  )
})