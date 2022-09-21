import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, TextInput, onChangeText } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './SignUp';

function SignIn({navigation}){
    return(
        <View style={styles.mainView}>
            <View style={styles.Lables}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={Text}
                    placeholder="Username o Mail"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={Text}
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry
                />
                <Button
                    title="Login">
                </Button>

                <Button 
                    title= "Registrati">
                    onPress={() => navigation.navigate('Register')}
                </Button>
                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },

    Lables: {
        marginBottom: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 60,
        margin: 12,
        borderWidth: 0.3,
        borderColor:'#dbdbdb',
        padding: 20,
        borderRadius: 20,
        shadowColor: "black",
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
export default SignIn;