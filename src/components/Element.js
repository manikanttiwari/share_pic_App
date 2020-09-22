import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export const NotFound = ({ txt, onPress }) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", }}>
            <Text >
                {txt}
            </Text>
            <Image
                style={styles.image}
                source={require('../assets/err.png')}
            />
            <Text style={styles.txt} onPress={onPress}>
                Refresh
                    </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    image: { width: 140, height: 140, alignSelf: "center", marginBottom: 10 },
    txt: { fontWeight: "bold", fontSize: 15, color: "#4c4c4c", alignSelf: "center", textDecorationLine: "underline", }
})