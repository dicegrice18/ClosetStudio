import React from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button, TextInput, onChangeText } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from './logo.png';
import Register from './SignUp';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }

  export default Home;