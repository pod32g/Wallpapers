import React from "react"
import { NavigationContainer, NavigationContainerRef, DarkTheme } from "@react-navigation/native"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { RootParamList } from "./types"
import { PrimaryNavigator } from "./primary-navigator"
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper'

const Stack = createNativeStackNavigator<RootParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,

        stackPresentation: "modal",
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

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer theme={DarkTheme} {...props} ref={ref}>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  )
})

RootNavigator.displayName = "RootNavigator"
