import React from "react";
import { View, StyleSheet } from 'react-native'
import { Center, AppButton, Card, Media, Input, Texter, Space } from '../base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useContext } from "react";
import {AuthContext} from '../../contexts/Authentication'
import { useState } from "react";

interface LoginBuilderProps {

}

const LoginBuilder : React.FC<LoginBuilderProps> = () => {

    const {authUser, Account} = useContext(AuthContext)
    const [email, setEmail] = useState<any>("")

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

                    />
                }
            />
            <Space size="10%" />

            <Texter text="Login Into Your Tunepik Account" font="text-max" />
            <Texter text="Login With A Registered Tunepik Account To Unlock All Features" font="text-grey-sm" />

            <Space size="2%" />
            <Media 
                Right={false}
                Body={
                    <View>
                        <Texter text="Email or Username" font="text-grey-sm" />
                        <Space size="0.7%" />
                        <Input hint="Email or username" type="email-address" ontype={text => setEmail(text)}/>

                        <Space size="2%" />

                        <Texter text="Password" font="text-grey-sm" />
                        <Space size="0.7%" />
                        <Input hint="Password" type="visible-password" secure={true} />

                        <Space size="2%" />

                        <Media 
                            Left={
                                <AppButton press={() => { authUser({username : email}); alert(`${email} authed`)}} title="Login" loading={false} block={false} 
                                />
                            }

                            Body={
                                <Texter text={Account?.username} />
                            }

                            Right={
                                <Texter text={email} 
                                />
                            }
                        />

                    </View>
                }
            />

        </View>
    )
}

export default LoginBuilder

const styles = StyleSheet.create({
    view : {
        padding: wp("3%")
    }
})