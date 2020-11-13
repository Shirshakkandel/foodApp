import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FiltersScreen() {
    return (
        <View style={styles.screen}>
            <Text >The FiltersScreen Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    }
})
