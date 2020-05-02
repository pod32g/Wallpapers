import React from 'react'
import { GridListProps } from './grid-list.props'
import { View, FlatList } from 'react-native'
import { Styles } from './grid-list.styles'
import GridItem from '../grid-item/grid-item'
import { Button } from 'react-native-paper'

export const GridList: React.FunctionComponent<GridListProps> = (props) => {

    return (
        <View style={Styles.container}>
            <FlatList numColumns={4}
                data={props.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <GridItem
                        key={index}
                        title={item.author.name}
                        image={item.preview_url}
                        onPress={() => props.navigation.navigate("Details", {
                            url: item.file_url,
                            width: item.width,
                            height: item.height
                        })}
                    />
                )}
                ListFooterComponent={
                    <View style={Styles.footer}>
                        {
                            props.showFooter &&
                            <Button
                                loading={props.footerLoading}
                                onPress={props.onFooterPressed}
                            >
                                {props.footerButtonTitle}
                            </Button>
                        }
                    </View>
                }
            />
        </View>
    )
}