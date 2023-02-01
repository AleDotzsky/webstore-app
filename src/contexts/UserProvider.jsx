import { useState, useEffect, createContext } from "react";
import { auth } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])
    

    return (
        <UserContext.Provider value={{currentUser, signup}}>
            {!loading && props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;