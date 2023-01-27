import { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {



    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;