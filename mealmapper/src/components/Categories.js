import React, { act } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { categoryData } from '../constants';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Categories(activeCategory, setActiveCategory, handleChangeCategory) {
    return (
        <View>
            <ScrollView
                horizontal showsVerticalScrollIndicator
                className="space-x-4"
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,

                }}
            >
                {categoryData.map((category, index) => {
                    let isActive = category.strCategory == activeCategory;
                    let activeButtonCategory = isActive ? "bg-blue-500" : "bg-gray-200";
                    return (
                        <TouchableOpacity
                            key={index}
                            className="flex items-center space-y-1"
                        >
                        <Image source = {{
                                url: category.strCategoryThumb,   
                            }}
                            style={{
                                width:hp(6),
                                height:hp(6),
                            }}
                            className="rounded-full"
                        />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <Text>Categories</Text>
        </View>
    )
}
