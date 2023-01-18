import React from "react";
import { sx } from "./sx";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function navbar() {
  return (
    <Box style={sx.container}>
      <Box style={sx.gpt3}>
        <Typography style={sx.gpt}>GPT-3</Typography>
        <Box style={sx.head}>
          <Typography style={sx.title}><a style={sx.a} href="#aa">Home</a></Typography>
          <Typography style={sx.title}>What is GPT?</Typography>
          <Typography style={sx.title}>Open AI</Typography>
          <Typography style={sx.title}>Case Studies</Typography>
          <Typography style={sx.title}>Library</Typography>
        </Box>
      </Box>
      <Box style={sx.login}>
        <Button style={sx.btn} variant="text">
          Sign in
        </Button>
        <Button style={sx.btn2} variant="contained">
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
