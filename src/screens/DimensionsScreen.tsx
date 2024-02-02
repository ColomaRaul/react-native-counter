import React from 'react'
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native'

export const DimensionsScreen = () => {
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;

    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5
                }}></View>
                <View style={styles.orangeBox}></View>
            </View>
            <Text style={styles.titile}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
    },
    titile: {
        fontSize: 30,
        textAlign: 'center'
    }
});
