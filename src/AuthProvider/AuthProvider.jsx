import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;