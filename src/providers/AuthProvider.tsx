import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {AuthContext, fetchUser, authUser, logoutUser, } from '../contexts/Authentication'
import {User} from '../types'

interface AuthProviderProps {}

const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {

        const [Account, setUser] = useState<User>(undefined)
        
        useEffect(() => {
            fetchUser().then(user => {
                setUser(user)
            })
        }, [])

        return (
            <AuthContext.Provider value={{Account, fetchUser, logoutUser, authUser}}>
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider