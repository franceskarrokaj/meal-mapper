import { View, Text, ScrollView, SafeAreaView, Button, Image, TextInput} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import makeRequest from '../services/spoonacular';

export default function HomeScreen() {
    const [searchText, setSearchText] = useState('');
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [datas, setDatas] = useState();


    // useEffect(() => {
    //     async function fetchData() {
    //         const results = await makeRequest("pasta");
    //         setIsLoaded(true)
    //         setDatas(results)
    //         console.log("TESR", results)

    //     }

    //     if (!isLoaded) {
    //         fetchData()
    //     }
        
    //  }, [isLoaded])

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
                        style={{ flex: 1, marginLeft: 10, color: 'black'}}
                    />
                    </View>

                    {/* {datas && datas.map((data) => {
                        <Image
                            source={{
                                uri: data.image
                            }}
                        />
                    })} */}

                    {/* Categories */}

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}