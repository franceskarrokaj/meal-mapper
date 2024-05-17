import { Pressable, Text, View, Image } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipesCard ({index, navigation, item}) {
    let isEven = index % 2 == 0;
    return (
        <View>
            <Pressable
                style = {{
                    width: "100%",
                    paddingRight: isEven ? 8 : 0, 
                }}
                className="flex justify-center nb-4 space-y-1"
                onPress={() => navigation.navigate("RecipeDetails",{...item})}
            >
                <Image
                    source = {{
                        url: item.strMealThumb,
                    }}
                    style={{
                        width: "100%",
                        height: hp(20), // Multiply the height by 2
                        borderRadius: 25,
                    }}
                        className="bg-black/5 relative"
                />
                <LinearGradient
                    colors={['transparent', 'black']}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: "100%",
                        height: hp(20),
                        borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,
                    }}
                    start={{
                        x: 0.5,
                        y: 0.5,
                    }}
                    end={{
                        x: 0.5,
                        y: 1,
                    }}
                    className="flex justify-center items-center"
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
                    item.strMeal.length > 20 
                    ? item.strMeal.slice(0, 20) + "..." 
                    : item.strMeal
                }
                </Text>
            </Pressable>
        </View>
    );
}