import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import RecipesCard from './RecipesCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import MasonryList from '@react-native-seoul/masonry-list';
import Loading from './Loading';

export default function Recipes ({meals, categories}) {
    const navigation = useNavigation();
    return (
        <View className="mx-4 space-y-4">
            <Text 
                style = {{
                fontSize: hp(2.5),
                fontWeight: 'font-semibold',      
                }}
            >
                {meals && meals.length } Recipes
            </Text>
            <View>
                { (categories && categories.length > 0) && (meals && meals.length > 0) ? (
                        <MasonryList
                            data={meals}
                            keyExtractor={(item ) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, i }) => ( 
                                <RecipesCard item={item} index={i} navigation={navigation} />
                            )}
                            onEndReachedThreshold={0.5}
                        />
                    ) : (
                        <Loading size = "large" className="mt-20"/>
                    )
                }
            </View>
        </View>
    )
}