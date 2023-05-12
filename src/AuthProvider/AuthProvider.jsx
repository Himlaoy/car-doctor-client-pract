import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=>{
        const   unSubscribe = onAuthStateChanged(auth, currentUser=>{
                console.log('ei holo current user', currentUser)
            })

            return ()=>{
                return unSubscribe()
            }
    },[])

    const userInfo = {
        user,
        createUser,
        loginUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;