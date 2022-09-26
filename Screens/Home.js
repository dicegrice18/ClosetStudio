import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button, TextInput, onChangeText, Pressable } from 'react-native';
import Icon from 'react-native-ico';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Utilizzare questo import 

var iconHeight = 26;
var iconWidth = 26;
export default class Home extends React.Component{
  state = {
    screenText:'Press a button!'
  }

  changeText = (text) =>{
    console.log(text + 'has been Pressed!')
    this.setState({
      screenText: text
    })
  }



  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.texto}>{this.state.screenText}</Text>          
          <StatusBar style="light" />
        </View>
  
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => this.changeText('Home')} style={styles.IconBehave}>
              <Icon name="home" group="ui-interface" height={iconHeight} width={iconWidth} />
            </Pressable>

            <Pressable onPress={() => this.changeText('Add')} style={styles.IconBehave}>
              <Icon name="clothes-circular-button-with-a-cross-of-thread" group="stylish" height={iconHeight} width={iconWidth} />
            </Pressable>


            <Pressable onPress={() => this.changeText('Wardrobe')} style={styles.IconBehave}>
              <Image style={styles.Closet} source={require('./closet.png')}></Image>
            </Pressable>

            
          </View>
        </View>

      </View>

      



    );
  } 
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3B6F9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 30,
    color: 'white',
  },

  NavContainer: {
    position: 'absolute',
    alignItems:'center',
    bottom: 50,
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#e7e7e7',
    width:'90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },

  Closet:{
    width: 27,
    height: 27,
  },


  IconBehave:{
    padding: 14,
  },




})

  