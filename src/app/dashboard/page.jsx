"use client";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import { Container } from "@mui/material";

export default function Dashboard() {
  const { userActive } = useContext(AuthenticationContext);

  return (
    <Container>
        <h2>Bienvenido {`${userActive}`}</h2>
    </Container>
  );
}
