import { useState, useEffect, createContext } from "react";
import { auth } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])
    

    return (
        <UserContext.Provider value={{currentUser, signup}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;