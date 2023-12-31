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

    const saveUserInLocalStorage = (keyValue, dataValue) => {
        localStorage.setItem(`${keyValue}`, `${dataValue}`);
        setUserActive(localStorage.getItem(`${keyValue}`));
    }

    const isAuthenticated = () => {
        const user = localStorage.getItem("userActive");
        return user !== null; // Check if the user is authenticated
      };
    return (
        <AuthenticationContext.Provider value={{ saveUserInLocalStorage, userActive, setUserActive, isAuthenticated }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider }