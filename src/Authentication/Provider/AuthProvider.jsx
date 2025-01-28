import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext('null');
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('null');
  const [loading, setLoading] = useState(true);
  const loginwithgoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log("Login With Google : ", res))
      .catch((err) => console.log("Google Login Error : ", err));
  };
  const loginwithgithub = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log("Login With Github : ", res))
      .catch((err) => console.log("Github Login Error : ", err));
  };
  const loginwithfacebook = () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log("Login With Facebook : ", res))
      .catch((err) => console.log("Facebook Login Error : ", err));
  };
  const userregister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userlogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout= () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log("Auth current User : ", currentUser);
      });
    };
    return () => unsubscribe();
  }, []);

  const value = {
    loginwithgoogle,
    loginwithgithub,
    loginwithfacebook,
    userregister,
    userlogin,
    user,
    loading,
    logout
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
