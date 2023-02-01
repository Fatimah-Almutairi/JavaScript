import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from './components/nav'
// import Carousel from './components/homepage'

export const App = () => (
  <ChakraProvider theme={theme}>
      <Nav />
      {/* < Carousel /> */}
  </ChakraProvider>
)
