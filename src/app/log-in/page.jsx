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
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import users from "@/data/roles";
import {
  containerStyles,
  titleStyles,
  alertStyles,
  buttonStyles,
  errorAlertStyles,
} from "@/app/log-in/styles";

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
    <Box sx={containerStyles}>
      <Typography variant="h4" sx={titleStyles}>
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
        <Alert sx={alertStyles} variant="filled" severity="success">
          Bienvenido {userActive}
        </Alert>
      )}

      <Button onClick={submitInputData} sx={buttonStyles} variant="contained">
        Enviar
      </Button>
      {errorAlert && (
        <Alert
          sx={errorAlertStyles}
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
