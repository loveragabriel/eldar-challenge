import { Box, Stack, Typography, Button, Alert } from "@mui/material";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import newPost from "@/utils/addNewPost";
import updatePost from "@/utils/updatePost";
import { useState } from "react";

export default function PostCard() {
  const { postList } = useContext(GetDataApiContext);
  const [alertStatus, setAlertStatus] = useState("");
  const { userActive } = useContext(AuthenticationContext);
  const addNewPost = () => {
    newPost();
    alert("Post Creado");
  };

  const deletePost =()=>{
    setAlertStatus(!alertStatus)
  }
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2.5rem",
          },
        }}
      >
        Últimos Post
      </Typography>
      {userActive == 'admin' || userActive == 'user' ?
      <>
      {postList.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "2rem",
              },
              color: "blue",
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="text2"
            sx={{
              color: "black",
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
              },
            }}
          >
            {post.body}
          </Typography>
          {userActive === "admin" && (
            <Stack direction="row" spacing={2}>
              <Button
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "1rem",
                  },
                }}
                variant="contained"
                size="small"
                startIcon={<AddCircleIcon />}
                onClick={addNewPost}
              >
                Crear
              </Button>
              <Button
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "1rem",
                  },
                }}
                variant="contained"
                size="small"
                startIcon={<EditIcon />}
                onClick={() => updatePost(post.id)}
              >
                Modificar
              </Button>
              <Button
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "1rem",
                  },
                }}
                variant="contained"
                size="small"
                onClick={deletePost}
                startIcon={<RemoveCircleIcon
                 />}
              />
                {alertStatus && (
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
          severity="error"
        >
          No tienes los permisos para realizar esta acción!
        </Alert>
      )}
            </Stack>
          )}
        </Box>
      ))}
      </> : 
      <Typography variant="h4" color='red' sx={{fontSize: {
        xs:'1.5rem', 
        sm:'2.5rem'
      }}}>Necesitas autenticación para Visualizar la información</Typography>
}
    </Box>
  );
}
