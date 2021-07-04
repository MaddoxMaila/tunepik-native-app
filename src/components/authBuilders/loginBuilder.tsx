import React from "react";
import { Text } from 'react-native'
import { Center, AppButton, Card, Media } from '../base'

interface LoginBuilderProps {

}

const LoginBuilder : React.FC<LoginBuilderProps> = () => {
    return (
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
                    <Text>Hello World</Text>
                }

                Right={
                    <Text>Hi World</Text>
                }
            />
        }
        >

        </Card>
    )
}

export default LoginBuilder