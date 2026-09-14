import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUserWithEmailAndPasswordFunc = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileFunc= (displayName, photoURL)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
                  displayName: displayName,
                  photoURL: photoURL,
                })
    }

    const signInWithEmailAndPasswordFunc =(email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithPopupFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signoutUserFunc = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const sendPasswordResetEmailFunc = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithPopupFunc,
        signoutUserFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc,
        loading,
        setLoading,
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (currUser) => {
            console.log(currUser);
            setUser(currUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;