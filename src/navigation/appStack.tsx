import React from "react"
import { createStackNavigator} from "@react-navigation/stack"
import { Home, Messages, Notification, Search } from "../screens"


const { Navigator, Screen } = createStackNavigator()

const AuthStack : React.FC = () => {
    return(
        <Navigator>
            <Screen name="home" component={Home}></Screen>
            <Screen name="search" component={Search}></Screen>
            <Screen name="messages" component={Messages}></Screen>
            <Screen name="notifications" component={Notification}></Screen>
        </Navigator>
    )
}

export default AuthStack