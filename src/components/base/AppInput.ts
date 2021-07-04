import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

interface InputProps{
    onChangeText : (text : string | number) => void,
    value : string | number,
    placeholder : string,
    keyBoardType : string,
}

const Input : React.FC<InputProps> = ({ onChangeText, value, placeholder, keyBoardType}) => {
        
        return (
            <TextInput 
            
            />
        )

}

export default Input

const styles = StyleSheet.create({
    input : {
        display : "flex",
        width : wp("100%"),
        height : hp("5%"),
        padding : wp("1%"),
        fontSize : 8,
        fontWeight: 400,
        borderWidth : wp("0.1%"),
        borderColor : "#ced4da",
        borderRadius : wp("1%"),
    }
})