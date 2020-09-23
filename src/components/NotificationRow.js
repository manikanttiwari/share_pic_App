import React from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions, TouchableNativeFeedback, Share
} from 'react-native';
const { width } = Dimensions.get("window")
export default NotificationRow = ({ item, shareImage, navigation }) => {
    return (
        // 
        <View style={styles.noti_main_row}>
            <View >
                <TouchableNativeFeedback style={styles.share_image} onPress={() => navigation.navigate("FullImage", { item })}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.url,
                        }}
                    // resizeMode="contain"
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback style={styles.share_image} onPress={() => shareImage(item.url)}>
                    <Image
                        style={styles.share_image}
                        source={{
                            uri: 'http://pngimg.com/uploads/share/share_PNG29.png',
                        }}
                    // resizeMode="contain"
                    />
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noti_main_row: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4c4c4c",
        marginBottom: 10,
        flexGrow: 1
    },
    image: {
        width: width - 20,
        height: 200
    },
    share_image: {
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 5,
        right: 5
    }

})