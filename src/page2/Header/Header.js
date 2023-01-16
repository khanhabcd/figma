import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { sx } from "./sx";
export default function Header() {
  return (
    <Box style={sx.container}>
      <Box style={sx.header}>
        <Typography style={sx.gpt3}>
          <Typography style={sx.rec} />
          What is GPT-3
        </Typography>
        <Typography style={sx.opi}>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His
          <br /> defective nor convinced residence own. Connection has put
          impossible own apartments
          <br /> boisterous. At jointure ladyship an insisted so humanity he.
          Friendly bachelor entrance to on by.
        </Typography>
      </Box>
      <Box style={sx.mid}>
        <Typography style={sx.gradi}>
          The possibilities are beyond <br /> your imagination
        </Typography>
        <Typography style={sx.gradi2}>Explore The Library</Typography>
      </Box>
      <Box style={sx.ops}>
        <Box>
          <Typography style={sx.rec} /> <br />
          <Typography style={sx.gr}>Chatbots</Typography>
          <Typography style={sx.ops}>
          We so opinion friends me message as <br /> delight. Whole front do of plate
          heard oh <br /> ought.{" "}
        </Typography>
        </Box>
        <Box>
          <Typography style={sx.rec} /> <br />
          <Typography style={sx.gr}>Knowledgebase</Typography>
          <Typography  style={sx.ops}>
          At jointure ladyship an insisted so humanity  <br />he. Friendly bachelor
          entrance to on by. As <br /> put impossible own apartments b{" "}
        </Typography> 
        </Box>
        <Box>
          <Typography style={sx.rec} /> <br />
          <Typography style={sx.gr}>Education</Typography>
          <Typography  style={sx.ops}>
          At jointure ladyship an insisted so humanity <br /> he. Friendly bachelor
          entrance to on by. As  <br />put impossible own apartments b{" "}
        </Typography>
        </Box>
      </Box>

    </Box>
  );
}
