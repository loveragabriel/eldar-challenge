"use client";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import PostCard from "@/app/dashboard/PostCard";
import PersonIcon from "@mui/icons-material/Person";

export default function Dashboard() {
  const { push } = useRouter();
  const { userActive, setUserActive } = useContext(AuthenticationContext);
  const ok = localStorage.getItem("userActive");

  const cleanSesion = () => {
    localStorage.clear();
    setUserActive("");
    push("/");
  };
  return (
    <Container>
      <Stack direction="row">
        <h2>
          Bienvenido
          <span>{userActive && ` ${ok}`}</span>
        </h2>
        <PersonIcon onClick={cleanSesion}></PersonIcon>
      </Stack>
      <PostCard></PostCard>
    </Container>
  );
}
