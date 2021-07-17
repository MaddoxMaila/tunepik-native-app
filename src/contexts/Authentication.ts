import React from "react"
import axios from "axios"
import {User} from '../types'
import AsyncStorage from "@react-native-community/async-storage"

const authUser = (user: User) => {

    AsyncStorage.setItem("user", JSON.stringify(user))
    // if(email === "" || password === "") return {error : true, message : "Email and Password fields cannot be empty"}
    
    // const form = new FormData()

    // form.append("email", email)
    // form.append("password", password)

    // axios.get('http:127.0.0.0:8000', {data : form}).then(({data}) => {
    //     return data
    // })

}

const fetchUser = () => {

    return AsyncStorage.getItem("user").then((item?) => {
         return item ? JSON.parse(item) : {}
    })
    
}

const logoutUser = () => {
    AsyncStorage.removeItem("user")
}

const AuthContext = React.createContext<{
    Account : User,
    fetchUser : () => User | any,
    authUser : (user : User) => void,
    logoutUser : () => void
}>({
    Account : undefined,
    fetchUser : () => undefined,
    authUser : () => undefined,
    logoutUser : () => undefined
})

export {AuthContext, authUser, fetchUser, logoutUser}