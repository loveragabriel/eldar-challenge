"use client";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function LogIn() {
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

  const submitInputData =()=>{
    console.log(inputData.user + inputData.credential);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        marginTop: "10vh",
        marginRight: "20px",
        marginLeft: "20px",
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
