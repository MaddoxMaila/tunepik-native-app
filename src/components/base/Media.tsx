import React from 'react'
import { View, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

interface MediaProps {
    Left? : any,
    Body : any,
    Right? : any
}

const Media : React.FC<MediaProps> = ({Left, Body, Right}) => {
        return (
            <View style={styles.media}>
                <View>
                    {Left}
                </View>
                <View style={styles.mediaBody}>
                    {Body}
                </View>
                <View>
                    {Right}
                </View>
            </View>
        )
}

export default Media

const styles = StyleSheet.create({
    media : {
        display : 'flex',
        alignItems : 'flex-start',
        flexDirection: 'row',
    },
    mediaBody : {
        flex : 1,
        paddingLeft : wp('2%')
    },
})