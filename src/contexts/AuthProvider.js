import React, { Children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // login
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // log out
    const logout = () => {
        return signOut(auth);
    }

    //  auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser || currentUser === null) {
                setLoading(false);
                setUser(currentUser);
            }
        })

        return () => unsubscribe();
    }, [])

    const authInfo = { user, loading, createUser, login, logout }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}
