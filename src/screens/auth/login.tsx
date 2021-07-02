import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login : React.FC = () => {
    return(
        <View>
            <Text>Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})


export default Login