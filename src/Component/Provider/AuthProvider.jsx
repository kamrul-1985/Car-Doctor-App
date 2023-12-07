import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

      const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);

      const googleProvider = new GoogleAuthProvider();
     

      const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const sigIn = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      };

       const googleLogIn = () =>{
            setLoading(true)
           return signInWithPopup(auth, googleProvider);
       }

       
      const logOut = () =>{
            signOut(auth);
      };

      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
                  
                  setUser(loggedUser);
                  setLoading(false);
                  if(loggedUser.email){
                        const signedUser = {
                              email: loggedUser.email
                            }

                        fetch(`http://localhost:5000/jwt`,{

                              method: "POST",
                              headers:{
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(signedUser)
                            })
                            .then(res =>res.json())
                            .then(data =>{
                              console.log(data);
                              localStorage.setItem('access-token', data.token)
                            })
                  }

                  else{
                        localStorage.removeItem('access-token');
                  }
            })
            return()=>{
                  unSubscribe;
            }
      },[]);




      const authInfo = {
            user,
            createUser,
            sigIn,
            logOut,
            loading,
            googleLogIn
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;