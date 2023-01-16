import React from "react";
import { Box } from "@mui/system";
import { sx } from "./sx";
import { Typography } from "@mui/material";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";

export default function Header() {
  return (
    <Box style={sx.container}>
      <Box>
        <Typography style={sx.head}>
          A lot is happening,
          <br /> We are blogging about it.
        </Typography>
      </Box>
      <Box style={sx.body}>
        <Box style={sx.i1}>
          <img style={sx.img} src={img1} />
          <Box style={sx.under}>
            <Box style={sx.fr}>
              <Typography style={sx.date}>Sep 26, 2021</Typography>
              <Typography style={sx.text}>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Typography>
            </Box>
            <Typography style={sx.tf}>Read Full Article</Typography>
          </Box>
        </Box>
        <Box style={sx.mid}>
          <Box style={sx.i2}>
            <img style={sx.img2} src={img2} />
            <Box style={sx.under2}>
              <Typography style={sx.date}>Sep 26, 2021</Typography>
              <Typography style={sx.text1}>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Typography>
            <Typography style={sx.tf1}>Read Full Article</Typography>
            </Box>
          </Box>
          <Box style={sx.i22}>
            <img style={sx.img2} src={img3} />
            <Box style={sx.under2}>
              <Typography style={sx.date}>Sep 26, 2021</Typography>
              <Typography style={sx.text1}>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Typography>
            <Typography style={sx.tf1}>Read Full Article</Typography>
            </Box>
          </Box>
        </Box>
        <Box style={sx.mid}>
          <Box style={sx.i2}>
            <img style={sx.img2} src={img4} />
            <Box style={sx.under2}>
              <Typography style={sx.date}>Sep 26, 2021</Typography>
              <Typography style={sx.text1}>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Typography>
            <Typography style={sx.tf1}>Read Full Article</Typography>
            </Box>
          </Box>
          <Box style={sx.i22}>
            <img style={sx.img2} src={img5  } />
            <Box style={sx.under2}>
              <Typography style={sx.date}>Sep 26, 2021</Typography>
              <Typography style={sx.text1}>
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </Typography>
            <Typography style={sx.tf1}>Read Full Article</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
