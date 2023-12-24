'use client'
import { Container, Stack, Typography } from "@mui/material";
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
} from '@/app/dashboard/stylesDashboard';

export default function Dashboard() {
  const { push } = useRouter();
  const { userActive, setUserActive } = useContext(AuthenticationContext);
  const user = localStorage.getItem("userActive");

  const cleanSesion = () => {
    localStorage.clear();
    setUserActive("");
    push("/");
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
          <Stack onClick={cleanSesion} alignItems="center">
            <PersonIcon sx={personIconStyles} />
            <Typography variant="caption" sx={typographyStyles}>
              Cerrar
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <PostCard />
    </Container>
  );
}
