import React from 'react'
import { GridListProps } from './grid-list.props'
import { View, FlatList, Button } from 'react-native'
import { Styles } from './grid-list.styles'
import GridItem from '../grid-item/grid-item'

export const GridList: React.FunctionComponent<GridListProps> = (props) => {
    return (
        <View style={Styles.container}>
            <FlatList numColumns={2}
                data={props.data}
                keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => (
                    <GridItem
                        key={index}
                        title={item.title}
                        image={item.image}
                    />
                )}
                ListFooterComponent={
                    <View style={Styles.footer}>
                        {
                            props.showFooter &&
                            <Button title={props.footerButtonTitle} onPress={props.onFooterPressed} />
                        }
                    </View>
                }
            />
        </View>
    )
}