import { View, Image, TouchableOpacity, Text} from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Animated } from 'react-native';

export default function WelcomeScreen() {
    const animation = useRef(null);
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: '#ef0000', flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Image
            source = {require("../../assets/images/login.png")}
            style = {{
                position: 'absolute',
                width: wp('50%'), 
                height: hp('15%')
                }}
            />
            <StatusBar style='light' />
            {/*Logo*/}
            <View>
                <LottieView
                    autoPlay ref={animation}
                    style = {{
                    width: wp('40%'), 
                    height: hp('5%')
                }}
                source={require('../../assets/images/login.png')}
                />
            </View>
                {/*Title*/}
            <View className='flex items-center space-y-2'>
                <Text className='text-white font-extrabold tracking-widest'
                style={{
                    fontSize: hp('3.5%'),
                    width: wp('45%'),
                    height: hp('50%'),
                }}
                >
                    Meal Mapper!
                </Text>

                <Text className='text white tracking-widest font-medium'
                    style={{
                        fontSize: hp('2.5%'),
                    }}                
                >

                </Text>          
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#fff',
                        paddingVertical: hp('1.5%'),
                        paddingHorizontal: hp('5%'),
                        borderRadius: hp('1.5%'),
                    }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>
                        Get started!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
