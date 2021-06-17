import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const Chakra = dynamic(() =>
  import("@chakra-ui/react").then((chakra) => chakra.ChakraProvider)
);
const AnimatePresence = dynamic(() =>
  import("framer-motion").then((chakra) => chakra.AnimatePresence)
);

import theme from "../theme";
import "react-slidy/lib/index.scss";
/* eslint-disable */
function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra resetCSS theme={theme}>
      <Navbar dark={pageProps.dark} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
