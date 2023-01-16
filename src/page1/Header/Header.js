import React from "react";
import { Box } from "@mui/system";
import { sx } from "./sx";
import { TextField, Typography, Button } from "@mui/material";
import AI from "../../img/Group.png";
import Group from "../../img/Group 81.png";

export default function Header() {
  return (
    <Box style={sx.container}>
      <Box style={sx.left}>
        <Typography style={sx.title}>
          Let’s Build Something
          <br /> amazing with GPT-3 <br />
          OpenAI
        </Typography>
        <Box style={sx.c}>
          <Typography style={sx.desc}>
            Yet bed any for travelling assistance indulgence unpleasing. <br />
            Not thoughts all exercise blessing. Indulgence way
            <br /> everything joy alteration boisterous the attachment. Party{" "}
            <br />
            we years to order allow asked of.
            <Box style={sx.search}>
              <TextField
                label="Your Email"
                type="search"
                style={sx.searchBar}
              />
              <Button style={sx.btn} variant="contained">
                GetStarted
              </Button>
            </Box>
          </Typography>
          <Box style={sx.eli}>
            <img src={Group} />
          <Typography style={sx.people}>
            1,600 people requested access a visit in last 24 hours
          </Typography>
          </Box>
        </Box>
      </Box>
      <Box style={sx.img}>
        <img src={AI} />
      </Box>
    </Box>
  );
}
