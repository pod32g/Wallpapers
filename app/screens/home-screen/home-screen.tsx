import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Styles } from './home-screen.styles';
import { GridList } from '../../components';
import { Sankaku, Api, Meta } from '../../services/api';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrimaryNavigatorParams } from 'app/navigation';

interface HomeScreenProps {
    navigation: StackNavigationProp<PrimaryNavigatorParams>
    route: RouteProp<PrimaryNavigatorParams, "Home">
}

const api = new Api();
api.setup();

export const HomeScreen: FunctionComponent<HomeScreenProps> = (props) => {

    const [posts, setPosts] = useState<Sankaku[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [searching, setSearching] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [more, setMore] = useState<boolean>(false);
    const [meta, setMeta] = useState<Meta>();

    const reload = () => {
        setLoading(true);
        setSearching(false);
        api.getAllPosts(props.route.params.safe ? true : false).then(posts => {
            setPosts(posts.data);
            setMeta(posts.meta)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            if (err.temporary) {
                reload()
            } else {
                Alert.alert("Error", err.kind, [
                    { text: "Retry", onPress: () => reload() }
                ])
            }
        });
    }

    useEffect(() => {
        reload()
    }, [])

    const paginate = (_page: number) => {
        console.log("THIS " + _page)
        if (meta?.next == null) {
            return
        }
        if (!searching) {
            setMore(true)
            api.getAllPosts(props.route.params.safe ? true : false, _page, meta.next).then(value => {
                const aux = posts
                value.data.forEach((item: any) => aux.push(item))
                setMeta(value.meta)

                setPosts(aux)
                setMore(false)
            }).catch(err => {
                console.log(err)
                if (err.temporary) {
                    reload()
                } else {
                    Alert.alert("Error", err.kind, [
                        { text: "Retry", onPress: () => reload() }
                    ])
                }
            });
        } else {
            setMore(true)
            api.searchPost(search, props.route.params.safe ? true : false, _page, meta.next).then(value => {
                const aux = posts
                value.data.forEach((item: any) => aux.push(item))
                setMeta(value.meta)
                setPosts(aux)
                setMore(false)
            }).catch(err => {
                console.log(err)
                if (err.temporary) {
                    reload()
                } else {
                    Alert.alert("Error", err.kind, [
                        { text: "Retry", onPress: () => reload() }
                    ])
                }
            });
        }
    }

    useEffect(() => {
        if (search.length == 0) {
            reload()
        };
    }, [search])

    const startSearch = () => {
        setLoading(true)
        setSearching(true)
        setPosts([])
        api.searchPost(search, props.route.params.safe ? true : false).then(posts => {
            setPosts(posts.data);
            setMeta(posts.meta)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            if (err.temporary) {
                reload()
            } else {
                Alert.alert("Error", err.kind, [
                    { text: "Retry", onPress: () => reload() }
                ])
            }
        });
    }

    return (
        <View style={Styles.container}>
            <Searchbar
                value={search}
                placeholder="Search"
                onChangeText={setSearch}
                onSubmitEditing={startSearch}
            />
            {
                loading ?
                    <ActivityIndicator style={Styles.loading} /> :
                    <View style={Styles.container}>
                        <GridList
                            data={posts}
                            showFooter={true}
                            footerButtonTitle="Load more"
                            onFooterPressed={() => paginate(page + 1)}
                            navigation={props.navigation}
                            footerLoading={more}
                        />
                    </View>
            }
        </View>
    )
}