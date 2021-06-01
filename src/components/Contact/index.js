import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Image,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { RiWhatsappFill } from 'react-icons/ri';
import { AtSignIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout';

const Contact = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0}>
          <Box mb={4} pos="relative">
            <IconButton
              top={2}
              right={2}
              pos="absolute"
              onClick={onClose}
              icon={<CloseIcon />}
            />

            <Image
              h={44}
              w="full"
              fit="cover"
              alt="avatar"
              objectPosition="center"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />

            <Flex alignItems="center" p={4} mb={4} bg="gray.800">
              <Heading
                as="h1"
                fontSize="lg"
                color="white"
                fontWeight="semibold"
              >
                Victoria Diaz (Asesor)
              </Heading>
            </Flex>

            <Flex px={4} alignItems="center" mb={2} color="gray.900">
              <Icon
                h={6}
                w={6}
                mr={1}
                as={RiWhatsappFill}
                fill="whatsapp.500"
              />
              <Link href="https://wa.me/+51999999999" px={2} fontWeight="light">
                999 999 999
              </Link>
            </Flex>
            <Flex px={4} alignItems="center" mb={2} color="gray.900">
              <Icon as={PhoneIcon} h={5} w={5} mr={2} />
              <Link href="tel:+51999999999" px={2} fontWeight="light">
                999 999 999
              </Link>
            </Flex>
            <Flex px={4} alignItems="center" mb={2} color="gray.900">
              <Icon as={AtSignIcon} h={5} w={5} mr={2} />

              <Link href="mailto:vdiaz@example.com" px={2} fontWeight="light">
                vdiaz@example.com
              </Link>
            </Flex>
          </Box>
          <Stack spacing={4} pb={4} px={4}>
            <Heading as="h2" fontSize="md" fontWeight="medium">
              Enviar mensaje a Victoria
            </Heading>

            <Input fontSize="sm" placeholder="Ingresa tu nombre" />
            <Input fontSize="sm" placeholder="Ingresa tu correo" />
            <Input fontSize="sm" placeholder="Ingresa tu telefono" />

            <Textarea
              h={40}
              resize="none"
              fontSize="sm"
              placeholder="Ingresa tu mensaje a Victoria"
            />
          </Stack>
        </DrawerBody>

        <DrawerFooter
          borderTopWidth="1px"
          d="flex"
          justifyContent="space-around"
        >
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue">Enviar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

Contact.propTypes = {
  ref: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Contact;
