import React from "react";
import { Center, AppButton, Card } from '../base'

interface LoginBuilderProps {

}

const LoginBuilder : React.FC<LoginBuilderProps> = () => {
    return (
        <Card 
        Header={
            <AppButton block={true} loading={false} title="Testing" press={() => alert("TESTING....")}></AppButton>
        }>

        </Card>
    )
}

export default LoginBuilder