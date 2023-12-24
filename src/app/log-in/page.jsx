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

localStorage.setItem("userList", JSON.stringify(users)); //Cargo las credenciales al localStorage

export default function LogIn() {
  const [alertStatus, setAlertStatus] = useState("");
  const [errorAlert, setErrorAlert] = useState(null);

  const [isInputWrong, setIsInputWrong] = useState({
    isEmpty: false,
    isNumber: false,
    errorMessage: "",
  });
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

  const inputValidation = () => {
    if (inputData.user === "") {
      setIsInputWrong({
        isEmpty: true,
        isNumber: false,
        errorMessage: "El nombre de usuario es requerido",
      });
    } else if (!isNaN(inputData.user)) {
      setIsInputWrong({
        isEmpty: false,
        isNumber: true,
        errorMessage: "El nombre de usuario no puede ser un número",
      });
    } else {
      setIsInputWrong({
        isEmpty: false,
        isNumber: false,
        errorMessage: "Esto",
      });
    }
  };

  const submitInputData = () => {
    if (inputData.user === "admin") {
      sessionStorage.setItem("key", "value");
      setAlertStatus("success");
      saveUserInLocalStorage("userActive", "admin");
      setTimeout(() => {
        push("/dashboard");
      }, 1000);
    } else if (inputData.user === "user") {
      saveUserInLocalStorage("userActive", "user");
      setAlertStatus("success");
      setTimeout(() => {
        push("/dashboard");
      }, 2000); // 2000 millisecond
    } else {
      setErrorAlert("Debe ingresar con las credenciales correctas!");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        height: "100vh",
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
          onBlur={inputValidation}
        />
        {isInputWrong.isNumber && (
          <Typography variant="text2" color="error">
            {isInputWrong.errorMessage}
          </Typography>
        )}
        {isInputWrong.isEmpty && (
          <Typography variant="text2" color="error">
            {isInputWrong.errorMessage}
          </Typography>
        )}
        <TextField
          id="outlined-basic"
          label="Credenciales"
          variant="outlined"
          name="credential"
          onChange={onChangeInputData}
        />
        
      </Stack>
      {alertStatus === "success" && (
        <Alert
          sx={{
            position: "fixed",
            top: "10vh",
            left: 0,
            right: 0,
            margin: "0 auto",
            width:{
              xs:'90vw', 
              sm:'45vw'
            }
          }}
          variant="filled"
          severity="success"
        >
          Bienvenido {userActive}
        </Alert>
      )}

      <Button
        onClick={submitInputData}
        sx={{ marginTop: "20px" }}
        variant="contained"
      >
        Enviar
      </Button>
      {errorAlert && (
        <Alert
          style={{
            position: "fixed",
            top: "10vh",
            left: 0,
            right: 0,
            margin: "0 auto",
            width: {
              xs: "90vw",
              sm: "45vw",
            },
            backgroundColor: "#f44336",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            padding: "16px",
          }}
          variant="filled"
          severity="error"
          onClose={() => setErrorAlert(null)}
        >
          {errorAlert}
        </Alert>
      )}

    </Box>
  );
}
