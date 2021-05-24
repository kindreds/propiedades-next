import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import { IconButton, Button } from '@chakra-ui/button';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/media-query';

import { Logo } from '../SVGS';
import DesktopNav from './DesktopNav';
import Sidebar from '../Sidebar';
import { useDisclosure } from '@chakra-ui/hooks';

const Navbar = ({ dark = false }) => {
  const { isOpen, onToggle } = useDisclosure();
  const isDark = useBreakpointValue({ base: true, xl: false });

  return (
    <>
      <Box
        top="0"
        w="100%"
        minH="60px"
        style={{ zIndex: 2 }}
        pos={{ base: 'fixed', xl: 'absolute' }}
        shadow={{ base: 'lg', xl: dark ? 'lg' : 'none' }}
        bg={{ base: 'white', xl: dark ? 'white' : 'transparent' }}
      >
        <Flex
          mx="auto"
          minH="60px"
          color="white"
          align="center"
          py={{ base: 4 }}
          px={{ base: 5 }}
          w={{ base: '100%', xl: '90%' }}
        >
          <Flex
            ml={{ base: -2 }}
            flex={{ base: 1, xl: 'auto' }}
            display={{ base: 'flex', xl: 'none' }}
          >
            <IconButton
              ml="2"
              color="gray.700"
              variant={'ghost'}
              onClick={onToggle}
              aria-label={'Toggle Navigation'}
              icon={<HamburgerIcon w={8} h={8} />}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', xl: 'start' }}>
            <Logo isDark={isDark || dark} />
          </Flex>
          <DesktopNav dark={dark} />
          <Flex
            flex={{ base: 1, xl: '0' }}
            ml={{ base: 0, xl: '30px' }}
            justify={{ base: 'flex-end', xl: 'center' }}
          >
            <IconButton
              variant={'ghost'}
              display={{ base: 'block', xl: 'none' }}
              icon={
                <Icon
                  w={5}
                  h={5}
                  as={FaUserAlt}
                  color={{ base: 'gray.700', xl: 'white' }}
                />
              }
            />
            <Stack
              direction="row"
              spacing="20px"
              align="center"
              display={{ base: 'none', xl: 'flex' }}
            >
              <Button variant="link" colorScheme="red">
                Iniciar sesión
              </Button>
              <Button fontWeight="light" colorScheme="red">
                REGISTRARSE
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

Navbar.propTypes = {
  dark: PropTypes.bool,
};

export default Navbar;
