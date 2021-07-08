import React from "react"
import { FormLabel, FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { Textarea } from "@chakra-ui/textarea"
import { Box, Heading, Stack } from "@chakra-ui/layout"
import { SimpleGrid } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/layout"

const CommentForm = () => {
  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={4} fontWeight="semibold">
        Envia tu mensaje al asesor
      </Heading>

      <Stack spacing={2}>
        <SimpleGrid gap={6} templateColumns="repeat(2, 1fr)">
          <FormControl id="first-name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input type="text" />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid
          gap={6}
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, 1fr)" }}
        >
          <FormControl id="email" isRequired>
            <FormLabel>Correo</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="phone" isRequired>
            <FormLabel>Telefono</FormLabel>
            <Input type="phone" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Horario de contacto</FormLabel>
            <Select placeholder="Horario de contacto">
              <option>8:00 am - 10:00 am</option>
              <option>10:00 am - 12:00 pm</option>
              <option>12:00 pm - 2:00 pm</option>
              <option>2:00 pm - 4:00 pm</option>
              <option>4:00 pm - 6:00 pm</option>
            </Select>
          </FormControl>
        </SimpleGrid>

        <FormControl id="phone" isRequired>
          <FormLabel>Descripción</FormLabel>
          <Textarea resize="none" placeholder="Escribe tu mensaje al asesor" />
        </FormControl>
      </Stack>
      <Flex flex={1} mt={5}>
        <Button colorScheme="teal">Enviar</Button>
      </Flex>
    </Box>
  )
}

export default CommentForm
