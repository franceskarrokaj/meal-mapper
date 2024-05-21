import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function RecipeDetailsScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        console.log(props.route.params);
        if (item && item.idMeal) {
            getMealData(item.idMeal);
        }
    }, [item]);

    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if (response && response.data && response.data.meals) {
                setMeal(response.data.meals[0]);
                setLoading(false);
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

    if (loading || !meal) {
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
            <SafeAreaView>
            <StatusBar style='white' />

            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ width: "100%", alignItems: 'center', position: 'relative' }}>
                <Image
                    source = {{
                        url: item.strMealThumb,
                    }}
                    style={{
                        width: "100%",
                        height: hp(40), // Multiply the height by 2
                    }}
                        className="bg-black/5 relative"
                />
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 10, left: 10 }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={24} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ position: 'absolute', top: 10, right: 10 }}
                        onPress={() => setIsFavorite(!isFavorite)}
                    >
                        <AntDesign name='heart' size={24} color={isFavorite ? "red" : "blue"}/>
                    </TouchableOpacity>
                </View>
                {/* Ingredients */}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                        {meal.strMeal}
                    </Text>
                </View>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
}
