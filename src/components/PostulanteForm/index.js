import React, { useState } from 'react'
import {
  Box,
  Stack,
  Input,
  Button,
  FormLabel,
  FormControl,
  Textarea,
  useToast
} from '@chakra-ui/react'

// components
import Catchap from '../Catchap'
import { Formik } from 'formik'
import { useCrearPostulanteMutation } from '../../generated/graphql'

const initialValues = {
  email: '',
  nombre: '',
  ciudad: '',
  celular: '',
  apellidos: '',
  direccion: '',
  descripcion: '',
  estado: 1
}

const PostulanteForm = () => {
  const toats = useToast()
  const [valid, setValid] = useState(false)
  const [crearPostulante, { loading }] = useCrearPostulanteMutation()

  return (
    <Formik
      onSubmit={async (v, { resetForm }) => {
        const data = await crearPostulante({
          variables: {
            input1: v
          }
        })

        if (data.data.CrearPostulante) {
          toats({
            duration: 9000,
            status: 'success',
            title: 'Postulación enviada.',
            description: 'Tu postulación ha sido enviada exitosamente.',
            isClosable: true
          })
          resetForm()
        }
      }}
      initialValues={initialValues}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <form onSubmit={handleSubmit}>
          <Stack mb={5}>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="nombres" isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                  name="nombre"
                  required
                  onBlur={handleBlur}
                  value={values.nombre}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="apellidos" isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input
                  name="apellidos"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.apellidos}
                  required
                />
              </FormControl>
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="direccion" isRequired>
                <FormLabel>Direccion</FormLabel>
                <Input
                  name="direccion"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.direccion}
                  required
                />
              </FormControl>
              <FormControl id="ciudad" isRequired>
                <FormLabel>Ciudad</FormLabel>
                <Input
                  name="ciudad"
                  onBlur={handleBlur}
                  value={values.ciudad}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <FormControl id="correo" isRequired>
                <FormLabel>Correo</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="celular" isRequired>
                <FormLabel>Celular</FormLabel>
                <Input
                  name="celular"
                  onBlur={handleBlur}
                  value={values.celular}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Stack>
            <FormControl id="celular" isRequired>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                required
                placeholder="Descripción"
                value={values.descripcion}
                name="descripcion"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </FormControl>
            <Box mx="auto" w="full">
              <FormControl id="celular" isRequired>
                <FormLabel>Catchap de seguridad</FormLabel>
                <Catchap onChange={setValid} />
              </FormControl>
            </Box>
          </Stack>
          <Button
            size="lg"
            type="submit"
            disabled={!valid}
            isLoading={loading}
            colorScheme="teal"
            w={{ base: 'full', sm: 'unset' }}
          >
            Enviar
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default PostulanteForm
