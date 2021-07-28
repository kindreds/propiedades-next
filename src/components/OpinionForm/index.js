import React from 'react'

// Terceros
import { Formik } from 'formik'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'
import { Flex, Heading, SimpleGrid, Stack } from '@chakra-ui/layout'

// mutation
import { useCrearFormularioContactoMutation } from '../../generated/graphql'

const initialValues = {
  estado: 1,
  nombre: '',
  asunto: '',
  correo: '',
  descripcion: ''
}

const OpinionForm = () => {
  const [crearForm] = useCrearFormularioContactoMutation()

  return (
    <>
      <Formik
        onSubmit={async (v) => {
          const data = await crearForm({
            variables: {
              input1: v
            }
          })

          console.log(data)
        }}
        initialValues={initialValues}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Stack
            p={6}
            as="form"
            bg="white"
            spacing={4}
            shadow="lg"
            rounded="lg"
            onSubmit={handleSubmit}
          >
            <Heading
              as="h3"
              mb={2}
              fontWeight="semibold"
              fontSize={{ base: '2xl', md: '2xl' }}
              lineHeight={{ base: 'shorter', md: 'none' }}
              letterSpacing={{ base: 'normal', md: 'tight' }}
            >
              Queremos tu opinion
            </Heading>

            <SimpleGrid
              gap={4}
              templateColumns={{
                base: 'minmax(0, 1fr)',
                sm: 'repeat(2, 1fr)'
              }}
            >
              <Flex>
                <VisuallyHidden>Nombre</VisuallyHidden>
                <Input
                  type="text"
                  required
                  placeholder="Nombre"
                  name="nombre"
                  value={values.nombre}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Correo</VisuallyHidden>
                <Input
                  type="email"
                  required
                  name="correo"
                  placeholder="Correo"
                  onBlur={handleBlur}
                  value={values.correo}
                  onChange={handleChange}
                />
              </Flex>
            </SimpleGrid>

            <Flex>
              <VisuallyHidden>Asunto</VisuallyHidden>
              <Input
                type="text"
                required
                placeholder="Asunto"
                name="asunto"
                value={values.asunto}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Flex>

            <Flex>
              <VisuallyHidden>Descripción</VisuallyHidden>
              <Textarea
                required
                placeholder="Dinos tu opinion"
                value={values.descripcion}
                name="descripcion"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Flex>

            <Flex flex={1} justify="flex-end">
              <Button type="submit" size="lg" colorScheme="red">
                Enviar
              </Button>
            </Flex>
          </Stack>
        )}
      </Formik>
    </>
  )
}

export default OpinionForm
