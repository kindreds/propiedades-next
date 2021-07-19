import React from 'react'
import NextLink from 'next/link'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Stack, Flex, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useGetCategoriaQuery } from '../../generated/graphql'
// import PropTypes from 'prop-types'

const BasicSearch = () => {
  const { data } = useGetCategoriaQuery()

  const categorias = data ? data.GetAllCategorias : []

  return (
    <Stack
      mb="6"
      bg="white"
      p={5}
      spacing="15px"
      borderWidth="1px"
      borderRadius="lg"
      direction={{ base: 'column', xl: 'row' }}
      minW={{ base: '280px', xl: '1100px' }}
      mx="auto"
    >
      <Select fontSize={'15'} minH={{ base: '50px' }} placeholder="Categorias">
        {categorias.map((cat) => (
          <option key={cat.categoriaId}>{cat.nombreCategoria}</option>
        ))}
      </Select>
      <Input
        type="text"
        fontSize={'15'}
        minH={{ base: '50px' }}
        placeholder="Ubicacion"
      />
      <Flex justify="center">
        <NextLink href="/propiedades">
          <Button as={Link} size="lg" colorScheme="red">
            Buscar
          </Button>
        </NextLink>
      </Flex>
    </Stack>
  )
}

BasicSearch.propTypes = {}

export default BasicSearch
