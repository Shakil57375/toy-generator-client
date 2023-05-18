/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const handleRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;