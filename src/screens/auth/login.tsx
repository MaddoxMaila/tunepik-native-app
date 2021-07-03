import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthNavigationProps, AuthParamList } from "../../paramLists/AuthParamList";

interface Props {
    navigation : any,
    route : any
}

const Login : React.FC<Props> = ({ navigation, route} : AuthNavigationProps<'Login'>) => {
    return(
        <View>
            <Text>Login Screen</Text>
            <Button title="Go to register" onPress={() => {
                navigation.navigate("Register")
            }}></Button>
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