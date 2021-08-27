import React, { useState } from 'react'
import { useRouter } from 'next/router'

// terceros
import { Select } from '@chakra-ui/select'
import { Button } from '@chakra-ui/button'
import { Stack, Flex } from '@chakra-ui/layout'

// components
import Suggestions from '../Suggestions'

// utils
import { useGetCategoriaQuery } from '../../generated/graphql'

const BasicSearch = () => {
  const [categoria, setCategoria] = useState('')
  const [ubicacion, setUbicacion] = useState({})
  const router = useRouter()
  const { data } = useGetCategoriaQuery()
  const categorias = data ? data.GetAllCategorias : []

  const handleSearch = () => {
    let payload = {}

    if (categoria !== '') {
      payload.slugCategoria = categoria
    }
    if (Object.keys(ubicacion).length !== 0) {
      payload = { ...payload, ...ubicacion }
    }

    router.push({
      pathname: '/propiedades',
      query: { ...payload }
    })
  }

  return (
    <Stack
      p={5}
      mb="6"
      mx="auto"
      bg="white"
      spacing="15px"
      borderWidth="1px"
      borderRadius="lg"
      minW={{ base: '280px', xl: '1100px' }}
      direction={{ base: 'column', xl: 'row' }}
    >
      <Select
        fontSize={'15'}
        value={categoria}
        minH={{ base: '50px' }}
        placeholder="Categorias"
        onChange={({ target: { value } }) => setCategoria(value)}
      >
        {categorias.map((cat) => (
          <option key={cat.categoriaId} value={cat.slugCategoria}>
            {cat.nombreCategoria}
          </option>
        ))}
      </Select>
      <Suggestions onChange={({ data }) => setUbicacion(data)} />
      <Flex justify="center">
        <Button onClick={handleSearch} size="lg" colorScheme="red">
          Buscar
        </Button>
      </Flex>
    </Stack>
  )
}

BasicSearch.propTypes = {}

export default BasicSearch
