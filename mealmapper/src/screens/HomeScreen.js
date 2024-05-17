import { View, Text, ScrollView, SafeAreaView, Button, Image, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import Categories from '../components/Categories';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Recipes from '../components/Recipes';

export default function HomeScreen() {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getRecipes();
        getCategories();
    }, []);

    const handleChangeCategory = (category) => {
        getRecipes(category);
        setActiveCategory(category);
        setMeals([]);
    }

    const getCategories = async () => {
        try {
            const response = await axios.get(
                'https://www.themealdb.com/api/json/v1/1/categories.php'
            );
            if (response && response.data) {
                setCategories(response.data.categories);
                console.log(response.data.categories);
            }
        }
        catch (error) {
            console.error(error.message);
        }
    };

const getRecipes = async (category = 'Beef') => { 
    try {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        if (response && response.data) {
            setMeals(response.data.meals);
        }
    } catch (error) {
        console.error(error.message);
    }
};

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar style="dark" />

            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                >
                    {/* Avatar and bell icon */}
                    <View style={{ marginHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Icon name="th-list" 
                            size={heightPercentageToDP(4)}
                            color={"gray"}
                            style={{ position: 'absolute', top: 12, left: 10 }} />
                        <Image
                            source={require('../../assets/images/goca.png')}
                            style={{
                                width: heightPercentageToDP(25),
                                height: heightPercentageToDP(22),
                                resizeMode: 'cover',
                                top: -65, // 50 pixels from the top of the parent container
                                left: 220, // 50 pixels from the left of the parent container
                                borderRadius: 20, // rounded-full equivalent in React Native
                            }}
                        />                    
                    </View>
                    {/* headlines */}
                    <View style={{ marginHorizontal: 4 }}>
                        <View>
                            <Text
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                top: -110,
                                left: 10,
                            }}
                        >
                            Fast & Delicious !
                            </Text>
                        </View>

                        <Text
                        style={{ 
                            fontSize: 30,
                            fontWeight: 'bold',
                            top: -100,
                            left: 10,   
                 
                        }}
                        >
                            Food You <Text
                            style = {{
                                color: 'orange',
                            }}
                            >
                            Love </Text>
                        </Text> 
                    </View>
                    {/* Search bar */}
                    <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', borderWidth: 1, 
                        borderColor: 'black', 
                        padding: 10, 
                        margin: 10, 
                        borderRadius: 10 }}
                    >
                    <Icon name="search" 
                        size={heightPercentageToDP(2.5)} 
                        color="black"
                    />
                    <TextInput
                        placeholder='Search your favorite food'
                        value={searchText}
                        onChangeText={setSearchText}
                        style={{ flex: 1, 
                            marginLeft: 20, 
                            color:'black',
                            fontWeight: 'bold'
                        }}
                    />
                    </View>
                    {/* Categories */}
                    <View>
                        {categories.length > 0 && (
                            <Categories
                                categories={categories}
                                activeCategory={activeCategory}
                                handleChangeCategory={handleChangeCategory}
                            />
                        )}
                    </View>
                    {/*Recipes meal*/}
                    <View>
                        <Recipes meals={meals} categories={categories} />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}