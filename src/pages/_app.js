import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import theme from '../theme';
import 'react-slidy/lib/index.scss';
/* eslint-disable */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: 'light',
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
