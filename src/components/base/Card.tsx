import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

interface CardProps {
    Header : any
}
const Card : React.FC<CardProps> = ({Header}) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text>Some Text</Text>
                </View>
                <View style={styles.cardBody}>
                    {Header}
                </View>
            </View>
        )
}

export default Card


const styles = StyleSheet.create({
    card : {
        position: "relative",
        display : "flex",
        flexDirection : "column",
        borderRadius : wp("0.5%"),
        padding : wp("0.5%"),
    },
    cardHeader : {
        paddingHorizontal : wp("2%"),
        paddingVertical : hp("1%"),
        borderBottomWidth : hp("0.1%")
    },
    cardBody : {
        paddingHorizontal : wp("2%"),
        paddingVertical : hp("1%"),
    }
})