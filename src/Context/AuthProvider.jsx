import React, {  useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(user);
     const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (userData) => {
        setLoading(true)
        return updateProfile(auth.currentUser,userData)
    };
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signInUser = (email,password) =>{
         setLoading(true);
         return signInWithEmailAndPassword(auth,email,password)
    }
     const signOutUser = () =>{
    //  setLoading(true);
    return signOut(auth)
   }
    
     useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
          setLoading(false);

    })
    // console.log(loading);
    

    // Clear the observer on unmount
    return () =>{
        unsubscribe();
    }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUser,
        signOut,
        signOutUser,
        signInUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;