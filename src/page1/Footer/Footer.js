import React from 'react'
import { sx } from "./sx";
import { Box } from '@mui/system';
import footer from "../../img/Comapnies Logo.png"
export default function Footer() {
  return (
    <Box style={sx.footer}><img src={footer}/></Box>
  )
}
