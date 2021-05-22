import React from 'react';
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Logo } from '../SVGS';

/* eslint-disable */

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'whiteAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={'gray.900'} color={'gray.200'}>
      <Container as={Stack} maxW="container.xl" py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack align="center" spacing={6}>
            <Box ml={-2}>
              <Logo />
            </Box>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <Text>Ingresa tu correo para estar al dia</Text>
            <Stack direction={'row'}>
              <Input
                placeholder={'Tu correo electronico'}
                bg={'whiteAlpha.100'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'green.800'}
                color={'gray.800'}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Compañia</ListHeader>
            <Link fontSize="sm" href={'#'}>
              Acerca de nosotros
            </Link>
            <Link fontSize="sm" href={'#'}>
              Blog
            </Link>
            <Link fontSize="sm" href={'#'}>
              Contacto
            </Link>
            <Link fontSize="sm" href={'#'}>
              Precios
            </Link>
            <Link fontSize="sm" href={'#'}>
              Testimonios
            </Link>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Soporte</ListHeader>
            <Link fontSize="sm" href={'#'}>
              Ayuda
            </Link>
            <Link fontSize="sm" href={'#'}>
              Terminos y condiciones
            </Link>
            <Link fontSize="sm" href={'#'}>
              Legal
            </Link>
            <Link fontSize="sm" href={'#'}>
              Politica de privacidad
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
