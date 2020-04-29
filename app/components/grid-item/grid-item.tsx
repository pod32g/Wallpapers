import React from 'react';
import { ActivityIndicator, View, Text, ActionSheetIOS, Platform, Alert } from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from './grid-item.styles';
import { GridItemProps } from './grid-item.props';

export default function GridItem(props: GridItemProps) {

    const callActionSheetOnHome = () => {
        if (!props.home) return;
        if (Platform.OS != 'ios') return;
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title: "Options",
                message: "These are the options for " + props.title,
                options: ['Cancel', 'Download'],
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 1:
                        if (props.onReDownload) {
                            props.onReDownload(props.data);
                        }
                        break;
                }
            },
        );
    }

    const callActionSheetOnDownloads = () => {
        if (!props.downloads) return;
        if (Platform.OS != 'ios') return;
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title: "Options",
                message: "These are the options for " + props.title,
                options: ['Cancel', 'Download Again', 'Delete'],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 1:
                        if (props.onReDownload) {
                            props.onReDownload(props.data);
                        }
                        break;
                    case 2:
                        Alert.alert(
                            "Delete",
                            `Are you sure you want to delete ${props.title}?`,
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "Confirm", onPress: () => {
                                        if (props.onDelete) {
                                            props.onDelete(props.data);
                                        }
                                    }, style: 'destructive'
                                }
                            ],
                            { cancelable: false }
                        );
                        break;
                }
            },
        );
    }

    return (
        <View style={Styles.container}>

            <TouchableOpacity
                onPress={() => {
                    props.onPress ? props.onPress(props.data) : console.log("pressed")
                }}
                onLongPress={() => {
                    props.home ? callActionSheetOnHome() : callActionSheetOnDownloads()
                }}
            >
                <Image
                    source={{ uri: props.image }}
                    style={{ width: 200, height: 200 }}
                    PlaceholderContent={<ActivityIndicator color="black" />}
                />
                <View style={Styles.textContainer}>
                    <Text style={Styles.textStyle}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}