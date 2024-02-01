import React from 'react'
import { Text, View } from 'react-native'

export const HelloWorldScreen = () => {
  return (
    <>
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Text
      style={{
        textAlign: 'center',
        fontSize: 50
      }}>
        Hola Mundo
      </Text>
    </View>
    </>
  )
}
