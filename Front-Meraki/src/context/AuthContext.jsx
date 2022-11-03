import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { auth } from "../firebase";
import axios from "axios"

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const currUser = auth.onAuthStateChanged((authUser) => {
            setUser(authUser)
        })
        return currUser
    }, [])

    //register
    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //register DataBase
    const registerDb =  async (firstName, lastName, uid, eMail, cpf, homeNumber, street, complement, cep, telephone) => {
        axios.post('https://us-central1-meraki-tera.cloudfunctions.net/app/api/student', {
            "firstName": firstName,
            "lastName": lastName,
            "uid": uid,
            "cpf": cpf,
            "cep": cep,
            "street": street,
            "homeNumber": homeNumber,
            "complement": complement,
            "telephone": telephone,
            "eMail": eMail
        }).then((res) => {
            console.log('usuário registrado com sucesso')
        }).catch((err) => {
            console.log(err)
        })
        
    }

    //login
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    function logout(){
        return signOut()
    }

    //forget password
    function forgetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    return(
        <AuthContext.Provider value={{user, login, register, registerDb,  logout, forgetPassword}}>
            {children}
        </AuthContext.Provider>
    )
}