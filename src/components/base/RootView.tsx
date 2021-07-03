import React from 'react'
import { View } from 'react-native'

interface RootViewProps {}

/*
    Basically Each and Every Screen Will Be Wrapped By This Component, For Theme Persistence!
*/
const RootView : React.FC<RootViewProps> = () => {
        return (
            <View></View>
        )
}

export default RootView