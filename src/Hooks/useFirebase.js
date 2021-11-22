
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase.config/Firebase.init';
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    /*----------------- email password sign in--------------- */
    const handleUserRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setEmail(result.user)
            })
    }
    const handleUserLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setPassword(result.user)
            })

    }


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRegister = () => {
        handleUserRegister(email, password)

    }
    const handleLogin = () => {
        handleUserLogin(email, password)

    }

    /*----------------- google sign in--------------- */

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user)
        // })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            // setLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        user,
        googleSignIn,
        logOut,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin
    }
};

export default useFirebase;