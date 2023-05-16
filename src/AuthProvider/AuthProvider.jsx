import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const GProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const gProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, GProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('ei holo current user', currentUser)
            setLoading(false)
            if (currentUser && currentUser.email) {
                const loggedUse = {
                    email: currentUser.email
                }
                fetch('https://car-doctor-server-69.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggedUse)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('car-user', data.token)
                        console.log('jwt token', data.token)
                    })
            }
            else{
                localStorage.removeItem('car-user')
            }
        })

        return () => {
            return unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        loading,
        gProvider,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;