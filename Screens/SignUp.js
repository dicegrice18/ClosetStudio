import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const SignUp = () => {
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
export default SignUp;