import React from "react"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { HomeScreen } from "../screens"
import { PrimaryParamList } from "./types"
import { Text } from 'react-native'
import { theme } from "../theme/customTheme"
import { DarkTheme as PaperDarkTheme, Appbar } from 'react-native-paper'


const Stack = createNativeStackNavigator<PrimaryParamList>()

//Custom Material design HeadBar
const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;

  return (
    <Appbar.Header dark theme={PaperDarkTheme}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.pop()}
          color={theme.colors.accent}
        />
      ) : options.headerLeft ? (<options.headerLeft></options.headerLeft>) : <Text></Text>}
      <Appbar.Content
        title={title}
      />
      {options.headerRight ? <options.headerRight></options.headerRight> : <Text></Text>}
    </Appbar.Header>
  );
};

export function PrimaryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={HomeScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["welcome"]
