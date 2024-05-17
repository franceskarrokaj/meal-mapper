import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipesCard ({index, navigation, items}) {
    let isEven = index % 2 == 0;
    return (
        <View>
            <Pressable
                style = {{
                    width: "100",
                    paddingRight: isEven ? 8 : 0, 
                }}
                className="flex justify-center nb-4 space-y-1"
                onPress={() => navigation.navigation("RecipeDetails",{...items})}
            >
                <Image
                    source = {{
                        url: items.strMealThumb,
                    }}
                    style={{
                        width: "100%",
                        height: index % 2 == 0 ? hp(20) : hp(30),
                        borderRadius: 10,
                    }}
                        className="bg-black/5 relative"
                />
                <LinearGradient
                    colors={['transparent', 'black']}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: hp(20),
                        height: hp(20),
                        borderRadius: 10,
                        borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,
                    }}
                    start={{
                        x: 0,
                        y: 0.5,
                    }}
                    end={{
                        x: 0,
                        y: 1,
                    }}
                />
                <Text 
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}
                
                > {
                    items.strMeal.Length > 20 
                    ? items.strMeal.slice(0, 20) + "..." 
                    : items.strMeal
                }
                </Text>
            </Pressable>
        </View>
    );
}