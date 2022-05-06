import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material"
import { useState } from "react"
import Add from "./components/Add"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"

function App() {

  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}> 
        <Navbar></Navbar>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent='space-between'
        >
          <Sidebar setMode={setMode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  )
}

export default App
