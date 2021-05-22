import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import { Divider, Stack, Link } from '@chakra-ui/layout';

const DesktopNav = ({ dark }) => {
  return (
    <Stack
      spacing="40px"
      direction={'row'}
      display={{ base: 'none', xl: 'flex' }}
    >
      <NextLink href="/">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Inicio
        </Link>
      </NextLink>
      <NextLink href="/propiedades">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Propiedades
        </Link>
      </NextLink>
      <Button
        p={1}
        variant="link"
        fontWeight="light"
        _hover={{ opacity: 0.6 }}
        color={dark ? 'gray.800' : 'white'}
      >
        Asesores
      </Button>
      <Button
        p={1}
        variant="link"
        fontWeight="light"
        _hover={{ opacity: 0.6 }}
        color={dark ? 'gray.800' : 'white'}
      >
        Contactanos
      </Button>

      <Divider orientation="vertical" h="21px" />
    </Stack>
  );
};

DesktopNav.propTypes = {
  dark: PropTypes.bool,
};

export default DesktopNav;
