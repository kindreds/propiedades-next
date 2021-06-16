import React from "react";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import "react-slidy/lib/index.scss";
/* eslint-disable */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar dark={pageProps.dark} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
