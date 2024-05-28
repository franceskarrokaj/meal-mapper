import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import RecipesCard from './RecipesCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import MasonryList from '@react-native-seoul/masonry-list';
import Loading from './Loading';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';


export default function Recipes ({meals, categories}) {
    const navigation = useNavigation();
    return (
        <Animated.View 
            className="mx-4 space-y-4"
            entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
        >
            <Text 
                style = {{
                fontSize: hp(2.5),
                fontWeight: 'font-semibold',      
                }}
            >
                {meals && meals.length } Recipes
            </Text>
            <Animated.View
                entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
            >
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
            </Animated.View>
        </Animated.View>
    )
}