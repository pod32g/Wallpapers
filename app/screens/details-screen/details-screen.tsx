import React, { FunctionComponent } from 'react'
import { View, ActivityIndicator, Alert } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { PrimaryNavigatorParams } from 'app/navigation'
import { DetailStyles } from './details-screen.styles'
import { Image } from 'react-native-elements'
import { FAB } from 'react-native-paper'
import CameraRoll from "@react-native-community/cameraroll";


interface DetailScreenProps {
    navigation: StackNavigationProp<ParamListBase>
    route: RouteProp<PrimaryNavigatorParams, "Details">
}


export const DetailScreen: FunctionComponent<DetailScreenProps> = (props) => {

    const save = () => {
        CameraRoll.saveToCameraRoll(props.route.params.url)
            .then(() => Alert.alert('Done', 'Photo added to camera roll!'))
            .catch(err => Alert.alert('Error saving image', err))
    }


    return (
        <View style={DetailStyles.container} >
            <Image
                PlaceholderContent={<ActivityIndicator color="white" size={30} />}
                source={{ uri: props.route.params.url }}
                style={{ width: "100%", height: "100%", resizeMode: "center" }}

            />
            <FAB
                style={DetailStyles.FAB}
                icon="content-save"
                onPress={() => save()}
            />
        </View>
    )
}