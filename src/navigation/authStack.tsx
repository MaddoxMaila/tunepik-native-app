import React from "react"
import { createStackNavigator} from "@react-navigation/stack"
import { Login, Register } from "../screens"

const { Navigator, Screen } = createStackNavigator()

const AuthStack : React.FC = () => {
    return(
        <Navigator>
            <Screen name="login" component={Login}></Screen>
            <Screen name="register" component={Register}></Screen>
        </Navigator>
    )
}

export default AuthStack