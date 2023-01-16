import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { sx } from "./sx";
import img3 from "../../img/Feature Image.png";

export default function Header() {
  return (
    <Box style={sx.container}>
      <Box style={sx.left}>
        <Typography style={sx.future}>
          The Future is Now and <br />
          You Just Need To Realize
          <br /> It. Step into Future Today <br />& Make it Happen.
          <Typography style={sx.text}>
            Request Early Access to Get Started
          </Typography>
        </Typography>
        <Box style={sx.title}>
          <Box style={sx.text2}>
            <Typography style={sx.abc}>
              <Typography style={sx.rec} />
              Improving end <br />
              distrusts instantly
            </Typography>
            <Typography style={sx.ins}>
              From they fine john he give of rich he. They age and
              <br /> draw mrs like. Improving end distrusts may <br />
              instantly was household applauded.
            </Typography>
          </Box>
          <Box style={sx.text2}>
            <Typography style={sx.abc}>
              <Typography style={sx.rec} />
              Become the <br />
              tended active
            </Typography>
            <Typography style={sx.ins}>
              Considered sympathize ten uncommonly <br />
              occasional assistance sufficient not. Letter of on
              <br /> become he tended active enable to.
            </Typography>
          </Box>
          <Box style={sx.text2}>
            <Typography style={sx.abc}>
              <Typography style={sx.rec} />
              Message or am <br />
              nothing
            </Typography>
            <Typography style={sx.ins}>
              Led ask possible mistress relation elegance eat
              <br /> likewise debating. By message or am nothing <br />
              amongst chiefly address.
            </Typography>
          </Box>
          <Box style={sx.text2}>
            <Typography style={sx.abc}>
              <Typography style={sx.rec} />
              Really boy law <br />
              county
            </Typography>
            <Typography style={sx.ins}>
              Really boy law county she unable her sister. Feet
              <br /> you off its like like six. Among sex are leave law built
              <br /> now. In built table in an rapid blush.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box style={sx.foot}>
        <img src={img3} width="600" />
        <Box style={sx.text5}>
          <Typography style={sx.text6}>
            Request Early Access to Get Started
          </Typography>
          <Typography style={sx.future}>
            The possibilities are <br />
            beyond your imagination
          </Typography>
          <Typography style={sx.text7}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            <br />
            thoughts all exercise blessing. Indulgence way everything joy
            <br />
            alteration boisterous the attachment. Party we years to order
            <br /> allow asked of.
          </Typography>
          <Typography style={sx.text}>
            Request Early Access to Get Started
          </Typography>
        </Box>
      </Box>
      <Box style={sx.footer}>
        <Box style={sx.a}>
          <Typography style={sx.txt1}>
            Request Early Access to Get Started
          </Typography>
          <Typography style={sx.txt2}>
            Register today & start exploring the endless possiblities.
          </Typography>
        </Box>
        <Button style={sx.btn}>Get Started</Button>
      </Box>
    </Box>
  );
}
