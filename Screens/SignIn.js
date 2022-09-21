import React from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button, TextInput, onChangeText } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from './logo.png';
import Register from './SignUp';

function SignIn({navigation}){
    return(
        <View style={styles.mainView}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={onChangeText}
                    value={Text}
                    placeholder="Username o Mail"
                    keyboardType="default"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={onChangeText}
                    value={Text}
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                />
                </View>
                <Button
                    title="Accedi"
                    onPress={() => navigation.navigate('Home')}>
                </Button>

                <Button 
                    title= "Registrati"
                    onPress={() => navigation.navigate('Register')}>
                </Button>
                
            
        </View>
    )
}



const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },


    logo:{
        marginBottom: 100,
        height: '25%',
        width: '50%',
        borderRadius: '100%',
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

})
export default SignIn;