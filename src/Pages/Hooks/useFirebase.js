import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/initializeFirebase";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        // Update a user's profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // redirect home page
        history.replace("/");
      })
      .catch((error) => {
        setUser(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const signInEmailPassword = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setUser(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const facebookSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        // The email of the user's account used.
        setAuthError(error.email);
      })
      .finally(() => setIsLoading(false));
  };

  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);

  useEffect(() => {
    fetch(`https://obscure-fjord-46479.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser(error);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displalyName, method) => {
    const user = { email, displalyName };
    fetch("https://obscure-fjord-46479.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };

  return {
    user,
    admin,
    token,
    authError,
    logOut,
    isloading,
    registerUser,
    signInEmailPassword,
    googleSignIn,
    facebookSignIn,
  };
};
export default useFirebase;
