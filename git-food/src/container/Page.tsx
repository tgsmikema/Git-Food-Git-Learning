import React, {FC, ReactNode} from "react"
import {Box} from "@mui/material";

interface PageProps {
  children: ReactNode
}

const Page: FC<PageProps> = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Page
