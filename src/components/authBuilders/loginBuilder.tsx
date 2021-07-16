import React from "react";
import { View, StyleSheet } from 'react-native'
import { Center, AppButton, Card, Media, Input, Texter, Space } from '../base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

interface LoginBuilderProps {

}

const LoginBuilder : React.FC<LoginBuilderProps> = () => {
    return (
        <View style={styles.view}>
            <Media 
                Left={<Texter text="Tunepik" font="text-max"/>}
                Body={null}
                Right={
                    <AppButton 
                        title="Create Account"
                        loading={false}
                        block={false}
                        press={() => false}
                    />
                }
            />
            <Space size="8%" />
            <Texter text="Login Into Your Tunepik Account" font="text-max" />
            <Texter text="Login With A Registered Tunepik Account To Unlock All Features" font="text-grey-sm" />
        </View>
    )
}

export default LoginBuilder

const styles = StyleSheet.create({
    view : {
        padding: wp("3%")
    }
})