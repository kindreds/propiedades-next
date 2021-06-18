import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import theme from "../theme";

import "react-slidy/lib/index.scss";

const Chakra = dynamic(() =>
  import("@chakra-ui/react").then((chakra) => chakra.ChakraProvider)
);

/* eslint-disable */
function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra resetCSS theme={theme}>
      <Navbar dark={pageProps.dark} />
      <AnimatePresence exitBeforeEnter>
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="animate"
            key={router.pathname}
            exit={{ opacity: 0 }}
          >
            <Component {...pageProps} key={router.route} />
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
