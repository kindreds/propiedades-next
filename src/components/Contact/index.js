import React from 'react'
import PropTypes from 'prop-types'
import {
  Drawer,
  Button,
  DrawerBody,
  IconButton,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent
} from '@chakra-ui/react'
import AsesorCard from '../AsesorCard'
import { Input } from '@chakra-ui/input'
import { CloseIcon } from '@chakra-ui/icons'
import { Textarea } from '@chakra-ui/textarea'
import { Heading, Stack } from '@chakra-ui/layout'

const Contact = ({ isOpen, onClose, asesor }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0}>
          <IconButton
            top={2}
            right={2}
            pos="absolute"
            onClick={onClose}
            icon={<CloseIcon />}
          />
          <AsesorCard asesor={asesor} simple drawer />
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
  )
}

Contact.propTypes = {
  ref: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Contact
