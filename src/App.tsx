import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from './components/nav'

export const App = () => (
  <ChakraProvider theme={theme}>
      <Nav />
  </ChakraProvider>
)
