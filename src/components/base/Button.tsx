import React from "react";
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Center from './Center'
 
interface ButtonProps{
    title : string,
    press : () => void,
    loading : boolean,
    block : boolean
}

const AppButton : React.FC<ButtonProps> = ({title, press, loading, block}) => {
    return (
        <Center>
            <TouchableOpacity 
            style={[block ? styles.btnBlock : styles.btnLg, styles.btn]}
            onPress={() => {
                press()
            }}
            >
                {loading ? (<ActivityIndicator size="large" color="#fff" />) : (<Text style={styles.text}>{title}</Text>)}
            </TouchableOpacity>
        </Center>
    )
}

export default AppButton

let styles = StyleSheet.create({
    btn : {
        color : '#fff',
        backgroundColor : '#007bff',
        display : "flex",
        textAlign : 'center',
        textAlignVertical: 'middle',
    },
    btnLg : {
        paddingHorizontal: wp("3.5%"),
        paddingVertical: hp("1.5%"),
        fontSize : wp("2%"),
        borderRadius : 10,
    },
    btnBlock : {
        width : wp("100%"),
        paddingHorizontal: wp("3.5%"),
        paddingVertical: hp("1.5%"),
        fontSize : wp("2%"),
        borderRadius : 10,
    },
    text : {
        color : '#fff',
        fontSize : wp("3%"),
        fontWeight : 'bold',
    }

})