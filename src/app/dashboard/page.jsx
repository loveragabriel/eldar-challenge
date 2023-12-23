"use client";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import { Container, Typography } from "@mui/material";
import PostCard from '@/app/dashboard/PostCard'

export default function Dashboard() {
  const { userActive } = useContext(AuthenticationContext);

  return (
    <Container>
        <h2>Bienvenido {`${userActive}`}</h2>
        <Typography>
          Aquí-
        </Typography>
        <PostCard></PostCard>
    </Container>
  );
}
