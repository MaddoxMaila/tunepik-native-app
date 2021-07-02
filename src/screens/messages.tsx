import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Messages : React.FC = () => {
    return(
        <View>
            <Text>Messages Screen</Text>
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


export default Messages