import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const Chakra = dynamic(() =>
  import("@chakra-ui/react").then((chakra) => chakra.ChakraProvider)
);

import theme from "../theme";
import "react-slidy/lib/index.scss";
/* eslint-disable */
function MyApp({ Component, pageProps }) {
  return (
    <Chakra resetCSS theme={theme}>
      <Navbar dark={pageProps.dark} />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
