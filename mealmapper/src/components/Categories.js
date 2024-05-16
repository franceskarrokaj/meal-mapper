import React, { act } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { categoryData } from '../constants';

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
                        
                        ></TouchableOpacity>

                    );

                })}
            </ScrollView>
            <Text>Categories</Text>
        </View>
    )
}
