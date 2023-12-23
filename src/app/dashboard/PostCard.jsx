import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import NewPostForm from '@/components/NewPostForm'
export default function PostCard() {
  const [displayPostForm, setDisplayPostForm] = useState(false); 
  const { postList } = useContext(GetDataApiContext);
  const { userActive } = useContext(AuthenticationContext);
  const addNewPost =()=>{
    setDisplayPostForm(true)
  }

  const updatePost =()=>{
    alert('Update Post')
  }

  const deletePost =()=>{
    alert('Delete Post')
  }

  return (
    <Box>
      {/* <Typography >
        {firstTitle}
      </Typography> */}
      {postList.map((post) => (
        <Box key={post.id} sx={{ display: "flex", flexDirection: "column" }}>
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
          <Typography variant="h6" sx={{ color: "black" }}>
            {post.body}
          </Typography>
          {userActive === "Administrador" && (
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="small"
                startIcon={<AddCircleIcon />}
                onClick={(addNewPost)}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<EditIcon />}
                onClick={(updatePost)}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<RemoveCircleIcon />}
                onClick={(deletePost)}
              />
            </Stack>
          )}
        </Box>
      ))}
     {displayPostForm && <NewPostForm/>}
    </Box>
  );
}
