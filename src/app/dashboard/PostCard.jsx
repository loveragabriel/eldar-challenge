// PostCard.js
import { Box, Stack, Typography, Button, Alert, Container } from "@mui/material";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import { useRouter } from "next/navigation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import newPost from "@/utils/addNewPost";
import { useState } from "react";
import {
  boxStyles,
  titleStyles,
  bodyStyles,
  buttonStyles,
  alertContainerStyles,
  boxStylesCards, 
} from "@/app/dashboard/stylesPostCard";

export default function PostCard() {
  const router = useRouter();
  const { postList } = useContext(GetDataApiContext);
  const { userActive, isAuthenticated } = useContext(AuthenticationContext);
  const [newPostId, setNewPostId] = useState(null);

  const [alertStatus, setAlertStatus] = useState({
    show: false,
    message: "",
    severity: "info",
  });

  const [alertUpdatePost, setAlertUpdatePost] = useState({
    show: false,
    modifiedPostId: null,
  });

  const addNewPost = () => {
    if (!isAuthenticated()) {
      router.push("/log-in");
      return;
    }
    const postId = newPost();
    setNewPostId(postId);
    setAlertStatus({
      show: true,
      message: `Nuevo post Creado`,
      severity: "success",
    });
  };

  const updatePost = (postId) => {
    if (!isAuthenticated()) {
      router.push("/log-in");
      return;
    }
    setAlertUpdatePost({ show: true, modifiedPostId: postId });
  };

  const deletePost = () => {
    if (!isAuthenticated()) {
      router.push("/log-in");
      return;
    }
    setAlertStatus({
      show: true,
      message: "Necesitas permisos para realizar esta acción",
      severity: "error",
    });
  };

  const closeAlert = () => {
    setAlertStatus({ ...alertStatus, show: false });
    setAlertUpdatePost({ ...alertUpdatePost, show: false });
  };

  return (
    <Container sx={boxStyles}>
      <Typography
        variant="h5"
        sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
      >
        Últimos Post
      </Typography>
      {userActive == "admin" || userActive == "user" ? (
        <Box >
          {postList.map((post) => (
            <Box key={post.id} sx={boxStylesCards}>
            <Typography variant="h3" sx={titleStyles}>
                {post.title}
              </Typography>
              <Typography variant="text2" sx={bodyStyles}>
                {post.body}
              </Typography>
              {userActive === "admin" && (
                <Stack direction="row" spacing={1} >
                  <Button
                    sx={buttonStyles}
                    variant="contained"
                    size="small"
                    startIcon={<AddCircleIcon />}
                    onClick={addNewPost}
                  >
                    Crear
                  </Button>
                  {newPostId && alertStatus.show && (
                    <Alert
                      sx={alertContainerStyles}
                      onClick={closeAlert}
                      variant="filled"
                      severity={alertStatus.severity}
                    >
                      {alertStatus.message}
                    </Alert>
                  )}
                  <Button
                    sx={buttonStyles}
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => updatePost(post.id)}
                  >
                    Modificar
                  </Button>
                  {alertUpdatePost.show && alertUpdatePost.modifiedPostId && (
                    <Alert
                      sx={alertContainerStyles}
                      variant="filled"
                      severity="info"
                      onClick={closeAlert}
                    >
                      Se actualizó el post {alertUpdatePost.modifiedPostId}
                    </Alert>
                  )}
                  <Button
                    sx={buttonStyles}
                    variant="contained"
                    size="small"
                    onClick={deletePost}
                    startIcon={<RemoveCircleIcon />}
                  >
                    Borrar
                  </Button>
                  {alertStatus.show && (
                    <Alert
                      sx={alertContainerStyles}
                      variant="filled"
                      severity={alertStatus.severity}
                      onClick={closeAlert}
                    >
                      {alertStatus.message}
                    </Alert>
                  )}
                </Stack>
              )}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography
          variant="h4"
          color="red"
          sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
        >
          Necesitas autenticación para Visualizar la información
        </Typography>
      )}
    </Container>
  );
}
