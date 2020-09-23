import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get("window")
export default class FullImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        nextState["item"] = nextProps.route.params.item
        return nextState
    }
    render() {
        let { item } = this.state
        return (
            // 
            <View style={styles.noti_main_row}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.url,
                    }}
                // resizeMode="contain"
                />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    noti_main_row: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        flexGrow: 1
    },
    image: {
        width: "90%",
        height: "98%"
    },
    share_image: {
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 5,
        right: 5
    }

})