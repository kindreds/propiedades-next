import React from 'react'

import { Formik } from 'formik'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Button } from '@chakra-ui/button'
import { useToast } from '@chakra-ui/toast'
import { Textarea } from '@chakra-ui/textarea'
import { FormLabel, FormControl } from '@chakra-ui/form-control'
import { Box, Heading, Stack, SimpleGrid, Flex } from '@chakra-ui/layout'

import { useCrearFormularioMutation } from '../../generated/graphql'

const initialValues = {
  nombresCliente: '',
  apellidosCliente: '',
  celularCliente: '',
  correoCliente: '',
  horarioContacto: '',
  descripcion: '',
  estado: 1,
  propiedadId: 0
}

const CommentForm = ({ propiedadId }) => {
  const toast = useToast()
  const [createForm] = useCrearFormularioMutation()

  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={4} fontWeight="semibold">
        Envia tu mensaje al asesor
      </Heading>

      <Formik
        initialValues={{ ...initialValues, propiedadId }}
        onSubmit={async (values, { resetForm }) => {
          const {
            correoCliente,
            nombresCliente,
            celularCliente,
            apellidosCliente,
            ...input1
          } = values
          const gql = await createForm({
            variables: {
              input: {
                correoCliente,
                nombresCliente,
                celularCliente,
                apellidosCliente
              },
              input1
            }
          })

          if (gql) {
            resetForm()
            toast({
              title: 'Mensaje enviado',
              description:
                'Hemos enviado tu mensaje al asesor, pronto tendras respuesta.',
              status: 'success',
              duration: 9000,
              isClosable: true
            })
          }
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <SimpleGrid gap={6} templateColumns="repeat(2, 1fr)">
                <FormControl id="first-name" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    name="nombresCliente"
                    value={values.nombresCliente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                  />
                </FormControl>
                <FormControl id="last-name" isRequired>
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    name="apellidosCliente"
                    value={values.apellidosCliente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid
                gap={6}
                templateColumns={{
                  base: 'minmax(0, 1fr)',
                  md: 'repeat(3, 1fr)'
                }}
              >
                <FormControl id="email" isRequired>
                  <FormLabel>Correo</FormLabel>
                  <Input
                    name="correoCliente"
                    value={values.correoCliente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                  />
                </FormControl>

                <FormControl id="phone" isRequired>
                  <FormLabel>Telefono</FormLabel>
                  <Input
                    name="celularCliente"
                    value={values.celularCliente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="phone"
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Horario de contacto</FormLabel>
                  <Select
                    name="horarioContacto"
                    value={values.horarioContacto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Horario de contacto"
                  >
                    <option value="1">8:00 am - 10:00 am</option>
                    <option value="2">10:00 am - 12:00 pm</option>
                    <option value="3">12:00 pm - 2:00 pm</option>
                    <option value="4">2:00 pm - 4:00 pm</option>
                    <option value="5">4:00 pm - 6:00 pm</option>
                  </Select>
                </FormControl>
              </SimpleGrid>

              <FormControl id="phone" isRequired>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  name="descripcion"
                  value={values.descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  resize="none"
                  placeholder="Escribe tu mensaje al asesor"
                />
              </FormControl>
            </Stack>
            <Flex flex={1} mt={5}>
              <Button type="submit" colorScheme="teal">
                Enviar
              </Button>
            </Flex>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default CommentForm
