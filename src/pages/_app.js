import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

const Chakra = dynamic(() =>
  import("@chakra-ui/react").then((chakra) => chakra.ChakraProvider)
);

import theme from "../theme";
import "react-slidy/lib/index.scss";
/* eslint-disable */
function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra resetCSS theme={theme}>
      <Navbar dark={pageProps.dark} />
      <AnimatePresence exitBeforeEnter>
        <LazyMotion features={domAnimation}>
          <m.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <Component {...pageProps} key={router.route} />
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
