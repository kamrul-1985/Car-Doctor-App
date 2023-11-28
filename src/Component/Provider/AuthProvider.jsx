import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

      const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);
      console.log(loading);

      const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const sigIn = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      };
      const logOut = () =>{
            signOut(auth);
      };

      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
                  console.log(loggedUser);
                  setUser(loggedUser);
                  setLoading(false);
            })
            return()=>{
                  unSubscribe;
            }
      },[]);




      const authInfo = {
            user,
            createUser,
            sigIn,
            logOut
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;