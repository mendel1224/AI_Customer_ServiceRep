'use client' // render on client side instead of server
import { Box } from "@mui/material";
import Image from "next/image";
import {useState} from 'react'

export default function Home() {
 const [messages, setMessages] = useState ({
  role: 'assistatnt',
  content: 'Hi I am the Travel Agent Support Agent, how can I assit you today?'
 })
 const [message, setMessage] = useState('')
 return (
 <Box 
 width  = "100vw" 
 height = "100vh" 
 display = "flex" 
 flexDirection={"column"}
 justifyContent={"center"}
 alignItems={"center"}
 >
  <Stack 
  direction = "column"
  width = "600px"
  height = "700px"
  border = "1px solid black"
  pading = {2}
  spacing = {3}
  >
 <Stack direction = "column" spacing = {2} >
 </Stack>

  </Stack>
 </Box>)
}
