/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext('')

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }







    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null)
            }
        });

        return () => {
            unSubscribe()
        }

    }, [])



    const authInfo = {
        registerUser,
        setUser,
        user,
        loginUser
    }


    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;