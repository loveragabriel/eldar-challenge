'use client'
import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
    const [userActive, setUserActive] = useState('');

    const saveUserInLocalSesion = (keyValue, dataValue) => {
        sessionStorage.setItem(`${keyValue}`, `${dataValue}`);
        setUserActive(sessionStorage.getItem(`${keyValue}`));
    }
    return (
        <AuthenticationContext.Provider value={{ saveUserInLocalSesion, userActive, setUserActive }}>
            {children}
        </AuthenticationContext.Provider>

    )
}

export { AuthenticationProvider }