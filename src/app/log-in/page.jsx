"use client";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";
import users from "../../data/roles";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";

localStorage.setItem("userList", JSON.stringify(users));
console.log(localStorage.getItem('userList')[0]); 


export default function LogIn({ users, alertSeverity, alertMessage }) {
  const [alertStatus, setAlertStatus] = useState("");
  const { push } = useRouter();
  const { saveUserInLocalStorage, userActive } = useContext(
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
      setAlertStatus("success");
      saveUserInLocalStorage("userActive", "Administrador");
      console.log(localStorage.getItem('userActive')); 
      setTimeout(() => {
        push("/dashboard");
      }, 2000); 
    } else if (inputData.user === "Usuario") {
      saveUserInLocalStorage("userActive", "Usuario");
      setAlertStatus("success");
      saveUserInLocalStorage("userActive", "Usuario");
      setTimeout(() => {
        push("/dashboard");
      }, 2000); // 2000 millisecond
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
      {alertStatus === "success" && (
        <Alert severity="success">Bienvenido! {userActive}</Alert>
      )}

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
