import { View, Text } from 'react-native';
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
        <View style={{backgroundColor: '#ef0000', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source = {require("../../assets/images/plateofhealthyfood.png")}/>
            <Text>Welcome MealMapper's friend!</Text>

        </View>
    );
}
