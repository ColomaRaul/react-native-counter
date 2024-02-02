import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TaskScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxPurple}></View>
            <View style={styles.boxOrange}></View>
            <View style={styles.boxBlue}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
    },
    boxPurple: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    boxOrange: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },
    boxBlue: {
        width: 100,
        height: 100,
        backgroundColor: '#2BC4D9',
        borderWidth: 10,
        borderColor: 'white',
    },
});