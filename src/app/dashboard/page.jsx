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
      <Stack
        direction="row"
        sx={{
          height: "100px",
          alignItems: "center",
          display: {
            sm: "flex",
          },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="h4">
          Bienvenido
          <Typography variant="text1" color="#00008B">
            {userActive && ` ${ok}`}
          </Typography>
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "primary", // Change the color on hover
            },
          }}
        >
          <PersonIcon color="primary" onClick={cleanSesion}></PersonIcon>
          <Typography variant="caption">Cerrar</Typography>
        </Stack>
      </Stack>
      <PostCard></PostCard>
    </Container>
  );
}
