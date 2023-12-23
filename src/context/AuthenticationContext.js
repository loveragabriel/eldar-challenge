'use client'
import { createContext, useState } from "react";
import { useEffect } from "react";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
    const [userActive, setUserActive] = useState('');

    useEffect(() => {
        const storedUserActive = localStorage.getItem('userActive');
        if (storedUserActive) {
            setUserActive(storedUserActive);
        }
    }, []);

    const saveUserInLocalSesion = (keyValue, dataValue) => {
        localStorage.setItem(`${keyValue}`, `${dataValue}`);
        setUserActive(localStorage.getItem(`${keyValue}`));
    }
    return (
        <AuthenticationContext.Provider value={{ saveUserInLocalSesion, userActive, setUserActive }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider }