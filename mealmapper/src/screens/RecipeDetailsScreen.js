import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';

export default function RecipeDetailsScreen() {
    return (
        <ScrollView
            style={{
                flex: 1,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 20,
            }} 
        >
            <StatusBar style='white'/>

            {/*Recipe Details Here */}
            <Text>RecipeDetails</Text>
        </ScrollView>
    );
}

