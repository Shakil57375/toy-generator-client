/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const handleRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const updateUser = (user,name) =>{
        return updateProfile (user, name)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            console.log(loggedUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        handleGoogleSignIn,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;