import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import newPost from '@/utils/addNewPost'; 

export default function NewPostForm({ displayPostForm, setDisplayPostForm }) {

  const [inputNewPost, setInputNewPost] = useState({
    newPostTitle: '', 
    newPostBody:'', 
    newPostId: ''
  })

  const onChangeInputNewPost = (e) => {
    const { name, value } = e.target;
    setInputNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreatePost = () => {
    const { newPostTitle, newPostBody, newPostId } = inputNewPost;
    newPost(newPostTitle, newPostBody, newPostId);
    alert('Post Creado!')
    setDisplayPostForm(false);
    setAlertNewPost(true);
  };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      margin: "10vh auto",
      padding: "5%",
      borderRadius: "8px",
      width: {
        xs: '90vw',
        sm: '50vw'
      }, 
      background:'white',
      textAlign:'center'
    }}
    >
      <Typography variant="h6">Agregar un nuevo Post </Typography>
      <TextField
        sx={{ marginTop: "5%" }}
        id="outlined-basic"
        label="Título"
        variant="outlined"
        name="newPostTitle"
        onChange={onChangeInputNewPost}
      />
      <TextField
        sx={{ marginTop: "5%" }}
        id="outlined-basic"
        label="Detalle"
        variant="outlined"
        name="newPostBody"
        onChange={onChangeInputNewPost}
      />
      <Button onClick={handleCreatePost} sx={{marginTop:'8%'}} variant="contained">Crear</Button>
    </Box>
  );
}
