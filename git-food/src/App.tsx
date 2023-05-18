import React from "react"
import {Box} from "@mui/material"
import Text from "./components/Text";

const App = () => {
  return (
    <Box>
      Hello
      <Text content={"World"} color={"red"} />
    </Box>
  )
}

export default App
