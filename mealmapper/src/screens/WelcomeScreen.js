import { View, Image, TouchableOpacity, Text} from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';

export default function WelcomeScreen() {
    const animation = useRef(null);
    const navigation = useNavigation();
    return (
        <Animated.View 
            style={{backgroundColor: '#ef0000', flex: 1, justifyContent: 'center', alignItems: 'center'}} 
            entering={FadeInDown.delay(200).duration(700).springify().damping(12)}
        >
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
            <Animated.View
                entering={FadeInDown.delay(300).duration(700).springify().damping(15)}
            >
                <LottieView
                    autoPlay ref={animation}
                    style = {{
                    width: wp('40%'), 
                    height: hp('5%')
                }}
                source={require('../../assets/images/login.png')}
                />
            </Animated.View>
                {/*Title*/}
            <View className='flex items-center space-y-2'>
                <Text className='text-white font-extrabold tracking-widest'
                style={{
                    fontWeight: 'bold',
                    fontSize: hp('3.5%'),
                    width: wp('35%'),
                    height: hp('50%'),
                    color: '#fff',
                }}
                >
                    Meal Mapper!
                </Text>

                <Text className='text white tracking-widest font-light'
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
        </Animated.View>
    );
}
