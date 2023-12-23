"use client";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import users from "../../data/roles";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";

localStorage.setItem("userList", JSON.stringify(users));

export default function LogIn({ users }) {
  const { push } = useRouter();
  const { saveUserInLocalSesion, userActive } = useContext(
    AuthenticationContext
  );

  const [inputData, setInputData] = useState({
    user: "",
    credential: "",
  });
  const onChangeInputData = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitInputData = () => {
    if (inputData.user === "Administrador") {
      sessionStorage.setItem("key", "value");
      alert("Administrador");
      saveUserInLocalSesion("userActive", "Administrador");
      push("/dashboard");
    } else if (inputData.user === "Usuario") {
      saveUserInLocalSesion("userActive", "Usuario");
      alert("Usuario");
      push("/dashboard");
    } else {
      alert("Debe ingresar con las credenciales correctas!");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        margin: {
          xs: "10vh 5vw",
          sm: "10vh 25vw",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "3vh" }}
      >
        Iniciar Sesión
      </Typography>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Usuario"
          variant="outlined"
          name="user"
          onChange={onChangeInputData}
        />
        <TextField
          id="outlined-basic"
          label="Credenciales"
          variant="outlined"
          name="credential"
          onChange={onChangeInputData}
        />
      </Stack>
      <Button
        onClick={submitInputData}
        sx={{ marginTop: "20px" }}
        variant="contained"
      >
        Enviar
      </Button>
    </Box>
  );
}
