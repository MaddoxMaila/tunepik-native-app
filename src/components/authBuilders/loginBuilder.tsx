import React from "react";
import { Text, View } from 'react-native'
import { Center, AppButton, Card, Media, Input, Navbar, Space } from '../base'

interface LoginBuilderProps {

}

const LoginBuilder : React.FC<LoginBuilderProps> = () => {
    return (
        <View>
            <Navbar
                Body={<Text>Hello World</Text>}
                Left={<Text>Left!</Text>}
            ></Navbar>
            <Space size="7%"/>
            <Card 
                Header={
                    <AppButton block={false} loading={false} title="Testing" press={() => alert("TESTING....")}></AppButton>
                }
                Body={
                    <Media 
                        Left={
                            <AppButton block={false} loading={false} title="Testing" press={() => alert("TESTING....")} />
                        }

                        Body={
                            <Input
                                
                                hint="Email"
                                ontype={text => {
                                    console.log(text)
                                }}
                                type="ascii-capable"
                            ></Input>
                        }

                        Right={
                            <Text>Hi World</Text>
                        }
                    />
                }
                >

                </Card>
        </View>
    )
}

export default LoginBuilder