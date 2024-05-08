import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export  default function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenopptions={{
                    headerShown: false,
                }}
            
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

