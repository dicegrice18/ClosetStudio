import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Register({navigation}) {
    return (
        <View style={styles.mainView}>
            <Text>Sign Up</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {

    },
})
export default Register;