/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext('')

const ContextProvider = ({ children }) => {

    
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubUser = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const LogOut = () => {
        return signOut(auth)
    }
      




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
            else {
                setUser(null)
                setLoading(false);
            }
        });

        return () => unSubscribe()
        

    }, [])



    const authInfo = {
        registerUser,
        setUser,
        user,
        loginUser,
        loading,
        googleUser,
        githubUser,
        LogOut
    }



    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            <ToastContainer />
        </div>
    );
};

export default ContextProvider;