import initializeAuthentication from './firebase.initialization';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

initializeAuthentication();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {

    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [idToken, setIdToken] = useState();
    const navigate = useNavigate();



    const googleSignIn = (redirectUrl) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                navigate(redirectUrl, { replace: true });
                const user = result.user;
                saveUserToDb(user?.displayName, user?.email, 'PUT');
                localStorage.setItem('user', JSON.stringify(user))
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            })
            .finally(() => {

                setIsLoading(false);

            });
    }

    const registerWithEmail = (name, email, password, event) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                saveUserToDb(name, user.email, 'POST');
                alert('Created Account Successfully');
                localStorage.setItem('user', JSON.stringify(user));
                setError('');
                updateUser(name);
                event.target.reset();
                navigate('/');
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => { })
            .catch((error) => {
                setError(error)
            });
    }

    const emailSignIn = (email, password, event, redirectUrl) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                localStorage.setItem('user', JSON.stringify(user));
                setError('');
                event.target.reset();
                navigate(redirectUrl);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    const saveUserToDb = (displayName, email, method) => {
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ displayName, email })
        })

    }


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            setIsLoading(false);
            setIsLogedIn(false);
            setIsAdmin(false);
            localStorage.setItem('user', '');
            localStorage.setItem('role', '');
            navigate('/')
        }).catch((error) => {
            setError(error);
        });
    }
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then((idToken)=>{
                    setIdToken(idToken);
                
                })
                setError('');
                setIsLogedIn(true);
            } else {
                setUser({});

            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.role === "admin") {
                        setIsAdmin(true);
                        localStorage.setItem('role', JSON.stringify(data?.role))
                    }
                    else {
                        setIsAdmin(false)
                        localStorage.setItem('role', '')
                    }

                })
        }
    }, [user?.email, isAdmin])



    return {
        user,
        error,
        isLoading,
        isLogedIn,
        isAdmin,
        idToken,
        googleSignIn,
        registerWithEmail,
        emailSignIn,
        logOut




    }


}
export default useFirebase