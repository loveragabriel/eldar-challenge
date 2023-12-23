import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { GetDataApiContext } from "@/context/GetDataApiContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function PostCard() {
  const { postList } = useContext(GetDataApiContext);

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
          <Stack  direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon />}
              type="onSubmit"
            />
            <Button
              variant="contained"
              size="small"
              startIcon={<TextIncreaseIcon />}
              type="onSubmit"
            />
            <Button
              variant="contained"
              size="small"
              startIcon={<RemoveCircleIcon />}
              type="onSubmit"
            />
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
