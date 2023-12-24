import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import NewPostForm from "@/components/NewPostForm";

export default function PostCard() {
  const [displayPostForm, setDisplayPostForm] = useState(false);
  const { postList } = useContext(GetDataApiContext);
  const { userActive } = useContext(AuthenticationContext);
  const addNewPost = () => {
    alert("Un nuevo post ha sido creado");
  };

  const updatePost = () => {
    alert("Post Updated");
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
          {userActive === "Administrador" && (
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
                onClick={updatePost}
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
                startIcon={<RemoveCircleIcon />}
              />
            </Stack>
          )}
        </Box>
      ))}
    </Box>
  );
}
