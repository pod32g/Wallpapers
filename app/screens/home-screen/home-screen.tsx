import React, { FunctionComponent } from 'react';
import { View, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack/types';
import { ParamListBase } from '@react-navigation/native';
import { Styles } from './home-screen.styles';
import { GridList } from '../../components';

interface HomeScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
}

export const HomeScreen: FunctionComponent<HomeScreenProps> = (props) => {

    const data = []
    for (let x = 0; x < 10; x++) {
        data.push({
            title: `Title ${x}`,
            image: 'https://cs.sankakucomplex.com/data/30/5d/305d778cae7df335dedcac5418613699.jpg?e=1588217521&m=NfN8LHF9F0eufHXj2T-vIg'
        })
    }

    return (
        <View style={Styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
            <GridList
                data={data}
                showFooter={true}
                footerButtonTitle="Test"
                onFooterPressed={() => console.log("Pressed")}
            />
        </View>
    )
}