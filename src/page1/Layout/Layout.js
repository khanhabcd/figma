import React from 'react'
import { Box } from '@mui/system'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import { sx } from "./sx";
import Footer from '../Footer/Footer';
export default function layout() {
  return (
    <Box style={sx.container}>
        <Navbar/> 
        <Header/>
        <Footer/>
    </Box>
  )
}
