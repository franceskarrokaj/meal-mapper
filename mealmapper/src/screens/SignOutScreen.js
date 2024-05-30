import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const SignOutScreen = () => {
    
    const navigation = useNavigation(); 

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LogIn");
            })
            .catch(error => {
                alert(error.message);
            });
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
            
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={{ position: 'absolute', top: 60, left: 320 }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <View style={{
                        width: 40, // or any size you want
                        height: 40, // or any size you want
                        borderRadius: 40, // half of your size
                        backgroundColor: 'white', // or any color you want
                        justifyContent: 'center', // center the icon vertically
                        alignItems: 'center', // center the icon horizontally
                        padding: 8, // adjust this value as needed
                    }}>
                        <AntDesign name="arrowright" size={24} color="orange" />
                    </View>
                </TouchableOpacity>
        </View>

    );
}

export default SignOutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 50,
    },
    button: {
        backgroundColor: 'orange',
        width: '60%',
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});