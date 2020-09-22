import React from 'react';
import {
    FlatList,
    StyleSheet,
    ToastAndroid,
    View,
    ActivityIndicator,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import Share from 'react-native-share';

import { NotFound } from '../components/Element'
import { getImages } from "../services/fetchApi"
import NotificationRow from '../components/NotificationRow'

const fs = RNFetchBlob.fs;
export default class Notifications extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: [],
            loading: true
        }
    }
    async componentDidMount() {
        this.loadImages()
    }
    loadImages = async () => {
        let response = await getImages().catch(err => console.log(err))
        if (response.status == true) {
            this.setState({
                loading: false,
                notifications: response.data
            })
        } else {
            this.setState({ loading: false })
            ToastAndroid.show("Could not fetch data at the moment", ToastAndroid.SHORT);
        }
    }
    shareImage = (url) => {
        ToastAndroid.show("Downloading...", ToastAndroid.SHORT);
        RNFetchBlob.fetch('GET', url).then((res) => {
            return res.base64()
        }).then(base64Str => {
            console.log("hello", base64Str)
            let options = {
                type: 'image/png',
                title: 'Share via',
                message: 'See this pic',
                url: `data:image/png;base64,${base64Str}`,
            };
            Share.open(options)
                .then((res) => {
                    console.log(res)

                })
                .catch((err) => { err && console.log(err); });
        })
            .catch((errorMessage, statusCode) => {
                ToastAndroid.show("Error uploading the image", ToastAndroid.SHORT);
            })
    }
    render() {
        let { notifications, loading } = this.state
        if (loading) {
            return <View style={styles.main_container}>
                <ActivityIndicator size="large" color="#4c4c4c" />
            </View>
        }
        return (
            <View style={styles.main_container}>
                {/* <StatusBar barStyle="dark-content" /> */}
                {notifications.length ? <FlatList
                    data={notifications}
                    renderItem={({ item, index }) => <NotificationRow key={index} item={item} shareImage={this.shareImage} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ marginTop: 10, paddingBottom: 10 }}
                /> : <NotFound txt={"Notification not found"} onPress={() => this.setState({ loading: true }, this.loadImages)} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})