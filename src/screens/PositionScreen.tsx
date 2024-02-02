import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                ...styles.blueBox,
            }}/>
            <View style={{
                ...styles.purpleBox,
                top: 0,
                right: 100
            }}/>
            <View style={{
                ...styles.orangeBox,
                bottom: 0,
                right: 0
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        position: 'absolute',
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        position: 'absolute',
        borderWidth: 10,
        borderColor: 'white',
    },
    blueBox: {
        // width: 100,
        // height: 100,
        backgroundColor: '#2BC48A',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject
    }
});
