import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { sx } from "./sx";
import GPT from "../img/GPT-3.svg";
export default function Footer() {
  return (
    <Box style={sx.container}>
      <Box style={sx.head}>
        <Typography style={sx.title}>
          Do you want to step in to the <br />
          future before others
        </Typography>
        <Typography style={sx.title2}>Request Early Access</Typography>
      </Box>
      <Box style={sx.footer}>
        <Box>
          <Typography>
            <img src={GPT} />
          </Typography>
          <Typography color={"#fff"}>
            Crechterwoord K12 182 DK <br/>  Alknjkcb, All Rights Reserved
          </Typography>
        </Box>
        <Box style={sx.f1}>
          <Typography fontWeight={"bold"}>Links</Typography>
          <Typography>Overons</Typography>
          <Typography>Social Media</Typography>
          <Typography>Couter</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Box style={sx.f1}>
          <Typography fontWeight={"bold"} >Company</Typography>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Box style={sx.f1}>
          <Typography fontWeight={"bold"}>Get in touch</Typography>
          <Typography>Crechterwoord K12 <br/> 182 DK Alknjkcb</Typography>
          <Typography>085-132567</Typography>
          <Typography>info@payme.net</Typography>
        </Box >
      </Box>
        <Box style={sx.f3}><Typography>© 2021 GPT-3. All rights reserved.</Typography></Box>
    </Box>
  );
}
