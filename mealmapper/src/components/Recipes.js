import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import RecipesCard from './RecipesCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import MasonryList from '@react-native-seoul/masonry-list';

export default function Recipes ({meals, categories}) {

        const navigation = useNavigation();
    return (
        <View className="mx-4 space-y-4">
            <Text 
                style = {{
                fontSize: hp(2.5),
                fontWeight: 'font-semibold',
                marginVertical: hp(2),      
                }}
            >
                {meals.length } Recipes
            </Text>
            <View>
                {
                    categories.length == 0 || meals.length == 0 ? (
                        <Loading size = "large" className="mt-20"/>
                    ) : (
                        <MasonryList
                            data={meals}
                        />
                    )
                }
            </View>
            <RecipesCard />
        </View>
    )
}