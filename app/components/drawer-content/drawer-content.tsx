import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import { DrawerStyle } from './drawer-content.styles'
import { Text, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerItem } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const DrawerContent: FunctionComponent = () => {
    const navigation = useNavigation();
    const [safe, setSafe] = useState<boolean>(false);

    return (
        <ScrollView style={DrawerStyle.scroll}>
            <View style={DrawerStyle.drawerContent}>
                <Drawer.Section style={DrawerStyle.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="tune" color={color} size={size} />
                        )}
                        label="Preferences"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="bookmark"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Bookmarks"
                        onPress={() => { }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {
                        setSafe(!safe)
                        navigation.replace("Home", { safe: !safe })
                    }}>
                        <View style={DrawerStyle.preference}>
                            <Text>Safe Mode</Text>
                            <View pointerEvents="none">
                                <Switch value={safe} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </ScrollView>
    )
}