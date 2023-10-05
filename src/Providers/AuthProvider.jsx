import { createContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

// :::: CREATE USER :::
    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
        
    }

    // ::: LOG IN USER :::
    const loginUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // ::: LOG OUT THE EXISTING USER :::
    const logOut = ()=>{
        return signOut(auth)
    }
    // ::: SET THE USER FOR OBSERVE ::::
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, logOut, loginUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children : PropTypes.node
}