import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';

export default function RecipeDetailsScreen(props) {
    let item = props.route.params;
    const navigation = useNavigation();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        getMealData(item.idMeal);
    }, []);

    const getMealData = async (id) => {
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            )
            if (response && response.data) {
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
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }} 
            >
                <Image
                    source={{ uri: item.strMealThumb }}
                    style={{
                        width: "100%",
                        height: "45%",
                    }}
                />
            </View>
            <Text>RecipeDetails</Text>
        </ScrollView>
    );
}