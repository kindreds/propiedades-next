import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import 'react-slidy/lib/index.scss';
/* eslint-disable */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
