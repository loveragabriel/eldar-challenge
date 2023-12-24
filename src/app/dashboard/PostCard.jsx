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
  const [alertUpdatePost, setAlertUpdatePost] = useState(false);
  const [modifiedPostId, setModifiedPostId] = useState(null);
  const { userActive } = useContext(AuthenticationContext);
  const [newPostId, setNewPostId] = useState(null);

  const addNewPost = () => {
    const postId = newPost();
    setNewPostId(postId);
    setAlertStatus({
      show: true,
      message: `Nuevo post Creado`,
      severity: "success",
    });
  };

  const updatePost = (postId) => {
    setAlertUpdatePost(!alertUpdatePost);
    setModifiedPostId(postId);
  };

  const deletePost = () => {
    setAlertStatus({
      show: true,
      message: "Necesitas permisos para realizar esta acción",
      severity: "error",
    });
  };
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
      {userActive == "admin" || userActive == "user" ? (
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
                    xs: ".7rem",
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
                  {newPostId && alertStatus.show && (
            <Alert
              sx={{
                position: "fixed",
                top: "10vh",
                left: 0,
                right: 0,
                margin: "0 auto",
                width: {
                  xs: "90vw",
                  sm: "45vw",
                },
              }}
              onClick={()=>setAlertStatus(!alertStatus)}
              variant="filled"
              severity={alertStatus.severity}
            >
              {alertStatus.message}
            </Alert>
          )}
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
                  {alertUpdatePost && modifiedPostId && (
                    <Alert
                      sx={{
                        position: "fixed",
                        top: "10vh",
                        left: 0,
                        right: 0,
                        margin: "0 auto",
                        width: {
                          xs: "90vw",
                          sm: "45vw",
                        },
                      }}
                      variant="filled"
                      severity="info"
                      onClick={() => setAlertUpdatePost(false)}
                    >
                      Se actualizó el post {modifiedPostId}
                    </Alert>
                  )}
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
                    startIcon={<RemoveCircleIcon />}
                  />
                 {alertStatus.show && (
            <Alert
              sx={{
                position: "fixed",
                top: "10vh",
                left: 0,
                right: 0,
                margin: "0 auto",
                width: {
                  xs: "90vw",
                  sm: "45vw",
                },
              }}
              variant="filled"
              severity={alertStatus.severity}
              onClick={()=>setAlertStatus(!alertStatus)}

            >
              {alertStatus.message}
            </Alert>
          )}
                </Stack>
              )}
            </Box>
          ))}
        </>
      ) : (
        <Typography
          variant="h4"
          color="red"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
            },
          }}
        >
          Necesitas autenticación para Visualizar la información
        </Typography>
      )}
    </Box>
  );
}
