import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { AuthNavigationProps, AuthParamList } from "../../paramLists/AuthParamList";
import {LoginBuilder} from '../../components'

interface Props {
    navigation : any,
    route : any
}

const Login : React.FC<Props> = ({ navigation, route} : AuthNavigationProps<'Login'>) => {
    return(
        <LoginBuilder></LoginBuilder>
    )
}

export default Login