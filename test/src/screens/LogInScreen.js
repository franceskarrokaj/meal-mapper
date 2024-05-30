import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { auth } from '../../firebase';

const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigation = useNavigation();

    const handleSignUp = async () => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredential => {
        //         const user = userCredential.user;
        //         console.log(user.email);
        //         //navigation.navigate('Home');
        //     })
        //     .catch(error => alert(error.message));
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Enter your email'
                    placeholderTextColor='gray'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='gray'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>



        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    button: {
        backgroundColor: 'orange',
        width: '100%',
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonOutline : {
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'orange',

    },

    buttonText: {
        color: 'white',
        padding: 5,
        fontSize: 16,
        fontWeight: '700',
    },

    buttonOutlineText: {
        color: 'orange',
        padding: 5,
        fontSize: 16,
        fontWeight: '700',
    },


});

export default LogInScreen;