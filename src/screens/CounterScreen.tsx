import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: { contador }
            </Text>
            <Fab title="+1" onPress={ () => setContador(contador + 1) } position='br' />
            <Fab title="-1" onPress={ () => setContador(contador - 1) } position='bl' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
})