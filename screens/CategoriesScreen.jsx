import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CategoriesScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text >The Categories Screen</Text>
            <Button title="CategoryMeal"
                onPress={() => navigation.navigate('CategoryMeals')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
