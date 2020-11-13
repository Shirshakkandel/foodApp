// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Category">
                <Stack.Screen name="Category" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}
                    options={{ title: 'CategoryMeals' }} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer >

    )
}
export default MealsNavigator;