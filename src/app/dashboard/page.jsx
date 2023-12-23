'use client'
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";

export default function Dashboard(){

    const {userActive} = useContext(AuthenticationContext)

    return(
        <h2>Bienvenido {`${userActive}`}</h2>
    )
}