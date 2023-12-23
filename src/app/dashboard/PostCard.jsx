import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AuthenticationContext } from "@/context/AuthenticationContext";

export default function PostCard() {
  const { postList } = useContext(GetDataApiContext);
  const { userActive } = useContext(AuthenticationContext);

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
          {userActive === 'Administrador' && (
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="small"
                startIcon={<AddCircleIcon />}
                onClick={() => handleAddButtonClick(post.id)}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<EditIcon />}
                onClick={() => handleEditButtonClick(post.id)}
              />
              <Button
                variant="contained"
                size="small"
                startIcon={<RemoveCircleIcon />}
                onClick={() => handleRemoveButtonClick(post.id)}
              />
            </Stack>
          )}
        </Box>
      ))}
    </Box>
  );
}
