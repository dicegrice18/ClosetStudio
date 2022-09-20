import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';


const SignIn = ({navigation})=>{
    function navigate(){
        navigation.navigate('SignUp');
    }
    return(
        <View style={styles.mainView}>
            <Text>Sign In</Text>
            <Button title= "Go to Sign Up"></Button>
            onPress = {navigate}
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
export default SignIn;