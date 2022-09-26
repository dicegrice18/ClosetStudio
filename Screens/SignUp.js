import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button, TextInput, onChangeText,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Register({navigation}) {
    return(
        <View style={styles.mainView}>
            <StatusBar style="auto" />
            <View style={styles.topView}></View>
            <View style={styles.bottomView}>
                <Text style={styles.Heading}>
                    Ciao,{'\n'}
                    registrati
                </Text>
                <View style={styles.FromView}>
                <TextInput placeholder={"Username*"} placeholderTextColor={"white"} keyboardType="default" style={styles.TextInput}/>
                <TextInput placeholder={"Email*"} placeholderTextColor={"white"} keyboardType="email" style={styles.TextInput}/>
                <TextInput placeholder={"Password*"} placeholderTextColor={"white"} secureTextEntry style={styles.TextInput}/>
                <TextInput placeholder={"Conferma password*"} placeholderTextColor={"white"} secureTextEntry style={styles.TextInput}/>
                <TouchableOpacity style={styles.ButtonUp} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.ButtonTextUp}>Sign Up</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    topView:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    
    bottomView:{
        width:'100%',
        height:'80%',
        backgroundColor:'#F3B6F9',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },

    ImageStyle:{
        width: '100%',
        resizeMode:'contain',
    },

    Heading:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        marginLeft:30,
        marginTop:60,
    },

    FromView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:50,
    },

    TextInput:{
        width:'90%',
        borderWidth:1,
        borderColor:'white',
        height:52,
        borderRadius:10,
        paddingLeft:5,
        marginTop:20,
        color: 'white',
        
    },

    ButtonUp:{
        width:'90%',
        color: 'black',
        height:52,
        backgroundColor:'#fbe9fd',
        borderRadius:10,
        marginTop:60,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    ButtonTextUp:{
        fontWeight:'bold',
        fontSize:18,
        color: 'black',
    },

})
export default Register;