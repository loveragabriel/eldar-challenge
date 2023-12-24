"use client";
import { Container, Stack, Typography, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import PostCard from "@/app/dashboard/PostCard";
import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import {
  containerStyles,
  stackStyles,
  personIconStyles,
  typographyStyles,
} from "@/app/dashboard/stylesDashboard";

export default function Dashboard() {
  const router = useRouter();

  const { userActive, setUserActive } = useContext(AuthenticationContext);
  const user = localStorage.getItem("userActive");

  if (!user) {
    router.push("/log-in");
    return null;
  }

  const cleanSession = () => {
    localStorage.clear();
    setUserActive("");
    router.push("/");
  };

  return (
    <Container>
      <Stack direction="row" sx={containerStyles}>
        <Typography variant="h6" component="h4">
          Bienvenido
          <Typography variant="text1" color="#00008B">
            {userActive && ` ${user}`}
          </Typography>
        </Typography>
        <Stack direction="column" alignItems="center" sx={stackStyles}>
          <IconButton
            onClick={cleanSession}
            aria-label="Cerrar sesión"
            size="large"
          >
            <PersonIcon sx={personIconStyles} />
          </IconButton>
          <Typography variant="caption" sx={typographyStyles}>
            Cerrar
          </Typography>
        </Stack>
      </Stack>
      <PostCard />
    </Container>
  );
}
