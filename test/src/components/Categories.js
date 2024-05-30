import React, { act } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { categoryData } from '../constants';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Categories({
    activeCategory, 
    categories, 
    handleChangeCategory
}) {
    return (
        <View>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                className="space-x-0"
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,

                }}
            >
    {categories.map((category, index) => {
        let isActive = category.strCategory == activeCategory;
    
        return (
            <View key={index} style={{ marginRight: hp(2), alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => handleChangeCategory(category.strCategory)}
                    style={{
                        borderRadius: 10,
                        backgroundColor: isActive ? 'orange' : 'gray',
                    }}
                >
                    <View style={{padding: 6, borderRadius: 1}}>   
                        <Image
                            source = {{
                                url: category.strCategoryThumb,   
                            }}
                            style={{
                                width:hp(8),
                                height:hp(8),
                                borderRadius: hp(100),
                            }}
                        />
                    </View>
                </TouchableOpacity>
                    <Text
                        style= {{
                            fontSize: hp(1.6),
                            color: isActive ? 'orange' : 'black'
                        }}
                    > 
                            {category.strCategory}
                        </Text>
                    </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}
