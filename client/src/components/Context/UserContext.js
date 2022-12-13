import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({
    userLogin: {
        id: 0,
        userName: "",
        passWord: "",
        cash: 0
    },
    setUserLogin: () => {}
});

export const UserContextProvider = ({children}) => {
    
    const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userLogin));
    }, [userLogin])

    const addNewUser = (id, username, password, cash) => {
        const newUser = {
            id: id,
            userName: username,
            passWord: password,
            cash: cash
        }
        setUserLogin(newUser);
    }

    const logOutUser = () => {
        setUserLogin(null);
        localStorage.clear();
    }

    return (
        <UserContext.Provider value={{
            userLogin,
            setUserLogin,
            addNewUser,
            logOutUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
