import React from 'react'
import MainNavigation from '../navigation/mainNavigation'
import {AuthProvider} from '.'

interface ProvidersProps {}

const Providers : React.FC<ProvidersProps> = () => {
        return (
            <AuthProvider>
                <MainNavigation></MainNavigation>
            </AuthProvider>
        )
}

export default Providers