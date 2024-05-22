import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Loading from '../components/Loading';

export default function RecipeDetailsScreen(props) {

    const item = props.route.params;
    const navigation = useNavigation();
    const [meal, setMeal] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    console.log("Meal", meal);

    useEffect(() => {
        console.log(props.route.params);
        if (item && item.idMeal) {
            getMealData(item.idMeal);
        }
    }, [item]);

    const getMealData = async (id) => {
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            if (response && response.data && response.data.meals) {
                setMeal(response.data.meals[0]);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const ingredientsIndexes = (meal) => {
        if (!meal) return [];
        let indexes = [];
    
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                indexes.push(i);
            }
        }
        return indexes;
    };

    if (isLoading || !meal) {
        return (
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <StatusBar style='white' />

            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ width: "100%", alignItems: 'center', position: 'relative' }}>
                <Image
                    source = {{
                        url: item.strMealThumb,
                    }}
                    style={{
                        width: "100%",
                        height: hp('40%'),
                    }}
                />
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 60, left: 10 }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={30} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ position: 'absolute', top: 50, right: 10 }}
                        onPress={() => setIsFavorite(!isFavorite)}
                    >
                        <View style={{
                            width: 40, // or any size you want
                            height: 40, // or any size you want
                            borderRadius: 20, // half of your size
                            backgroundColor: 'white', // or any color you want
                            justifyContent: 'center', // center the icon vertically
                            alignItems: 'center' // center the icon horizontally
                        }}>
                            <AntDesign name='heart' size={25} color={isFavorite ? "red" : "gray"}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                {/* Ingredients */}

                {
                    isLoading ? (
                        <Loading size="large" />
                    ) : (
                        <View style={{
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                            paddingTop: hp('3%'),
                            paddingHorizontal: 4,
                            justifyContent: 'space-between',
                            marginTop: -46
                           }} 
                        >
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: hp(3), fontWeight: 'bold' }}>
                                {meal?.strMeal}
                            </Text>

                            <Text
                                style={{
                                    fontSize: hp(2),
                                }}
                            >{meal?.strArea}</Text>
                        </View>
            
                        {/*Ingredients*/}

                        <View style={{ marginTop: 16 }}>
                            <Text style={{
                                fontSize: hp(2),
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}>
                                Ingredients
                            </Text>

                            <View>
                                {
                                   ingredientsIndexes(meal).map((i) => {
                                    return (
                                        <View
                                            style={{display: 'flex', flexDirection: 'col', paddingHorizontal: 4}}
                                            key={i}
                                        >
                                            <View style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: 2,
                                                alignItems: 'center',
                                                paddingBottom: 5
                                            }}>
                                                <View style={{ 
                                                    flexDirection: 'row',
                                                    gap: 2,
                                                    height:hp(1.5),
                                                    width:hp(1.5),
                                                    borderRadius: 50,
                                                    backgroundColor: '#f64e'  
                                                }}
                                            >
                                                
                                            </View>
                                                <Text style={{
                                                            fontSize:hp(1.7),
                                                            fontWeight:'medium'
                                                }} >
                                                    {meal["strIngredient" + i]}
                                                </Text>
                                                <Text style={{
                                                        fontWeight:'extrabold',
                                                        fontSize:hp(1.7),
                                                        paddingLeft: 15,
                                                    }} >
                                                        {meal["strMeasure" + i]}
                                                    </Text>
                                                </View> 
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                        {/*Instructions*/}
                        <View className="space-y-4 p-4">
                            <Text
                                className="font-bold flex-1 text-neutral-700"
                                style={{
                                    fontSize: hp(2),
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                }}    
                            >
                                Instructions
                            </Text >
                            <Text className="text-neutral-700 " style={{
                                fontSize: hp(1.7),
                                paddingLeft: 7

                            }}
                            > 
                            {meal?.strInstructions}</Text>
                        </View>
                    </View>
                )}
        </ScrollView>
    );
}