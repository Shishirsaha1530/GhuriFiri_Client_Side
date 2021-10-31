import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import firebaseInit from './../Components/Pages/Login/Firebase/firebaseInit';


firebaseInit()
const provider = new GoogleAuthProvider();
const useFirebase = () => {
   let [user, setUser] = useState({})
   const [isLoading, setIsLoading] = useState(true);
   const auth = getAuth();

    // google sign in
    let handleGoogleSignIn=()=>{
      setIsLoading(true);
    return signInWithPopup(auth, provider)
    .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user)
  } else {
    setUser({})
  } setIsLoading(false);
});
    },[])

    let logOut=()=>{
      setIsLoading(true);
        signOut(auth).then(() => {
}).finally(() => setIsLoading(false));
    }
    return{
      user,
      handleGoogleSignIn,
      isLoading,
      logOut
    }
};

export default useFirebase;