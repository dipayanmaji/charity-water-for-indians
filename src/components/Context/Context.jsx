import React, { createContext, useState } from "react";

export const MyContext = createContext();

const ContextProvider= (props)=>{
    // Users
    const [users, setUsers] = useState({
        'dip@gmail.com': {
            firstname: 'Dipayan',
            lastname: 'Maji',
            password: '123',
        },
    })
    const addUser= (user)=>{
        setUsers({
            ...users,
            [user.email]: {
                firstname: user.firstname,
                lastname: user.lastname,
                password: user.password,
            }
        })
    }

    //Current User
    const [currUser, setCurrUser] = useState('');
    const addCurrUser = (name)=>{
        setCurrUser(name);
    }

    //Login
    const [login, setLogin] = useState(false);
    const makeLogin= (value)=>{
        setLogin(value);
    }
    
    const value={
        users, addUser,
        currUser, addCurrUser,
        login, makeLogin,
    }

    return(
        <MyContext.Provider value={value} >
            {props.children}
        </MyContext.Provider>
    )
}
export default ContextProvider;