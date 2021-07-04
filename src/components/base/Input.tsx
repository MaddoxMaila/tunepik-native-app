import React from 'react'
import { StyleSheet, KeyboardTypeOptions, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

interface InputProps{
    ontype? : (text : string | number) => void,
    text : string,
    hint : string,
    type? : KeyboardTypeOptions,
}

const Input : React.FC<InputProps> = ({ ontype, text, hint, type}) => {
        
        return (
            <TextInput
                style={styles.input}
                onChangeText={text => ontype ? ontype(text) : {}}
                value={text}
                placeholder={hint}
                keyboardType={type}
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
        fontWeight: "400",
        borderWidth : wp("0.1%"),
        borderColor : "#ced4da",
        borderRadius : wp("1%"),
    }
})