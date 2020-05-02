import React from "react"

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from "../screens"
import { Text, TouchableOpacity } from 'react-native'
import { theme } from "../theme/customTheme"
import { DarkTheme as PaperDarkTheme, Appbar } from 'react-native-paper'
import { PrimaryNavigatorParams } from "./primary-navigator.params";


const Stack = createStackNavigator<PrimaryNavigatorParams>();

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
    <Appbar.Header dark theme={PaperDarkTheme} >
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.pop()}
          color={theme.colors.accent}
        />
      ) : options.headerLeft ? (<options.headerLeft></options.headerLeft>) : (
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.openDrawer()}
        />

      )}
      <Appbar.Content
        title={title}
        subtitle="Beta"
      />
      {options.headerRight ? <options.headerRight></options.headerRight> : <Text></Text>}
    </Appbar.Header>
  );
};



export function PrimaryNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      header: ({ scene, previous, navigation }) => (
        <Header scene={scene} previous={previous} navigation={navigation} />
      ),
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Booru client" }} initialParams={{ safe: false }} />
      <Stack.Screen name="Details" component={DetailScreen} options={{ title: "Image" }} />
    </Stack.Navigator>
  )
}
