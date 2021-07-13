import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'

import theme from '../theme'
import client from '../apollo'
import Navbar from '../components/Navbar'

import 'react-slidy/lib/styles.css'

/* eslint-disable */
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
