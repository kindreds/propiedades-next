import React from 'react'
import Image from 'next/image'
import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text
} from '@chakra-ui/layout'
import { useGetBusquedaAvanzadaQuery } from '../../generated/graphql'

const BusquedaAvanzada = {
  GetBusquedaAvanzada: {
    data: [],
    NroItems: 0
  }
}

const variables = {
  tipoContrato: null,
  slugCategoria: null,
  DeparCodi: null,
  ProvCodi: null,
  DistCodi: null,
  montoMinimo: null,
  montoMaximo: null,
  areaMinima: null,
  areaMaxima: null,
  antiguedad: null,
  cuartos: null,
  banios: null,
  destacado: null,
  ordenPrecio: 'asc',
  ordenCreacion: 'asc',
  numberPaginate: 10,
  page: 1
}

const LastProperties = () => {
  const { data = BusquedaAvanzada } = useGetBusquedaAvanzadaQuery({
    variables: { input: variables }
  })

  return (
    <Box
      mt={8}
      mr={4}
      pt={4}
      pr={6}
      bg="white"
      shadow={'lg'}
      rounded={'lg'}
      overflow="hidden"
      display={{ base: 'none', xl: 'block' }}
    >
      <Text pl={4} mb={4} fontWeight="bold">
        Últimas propiedades
      </Text>
      <Stack spacing={0} divider={<Divider />}>
        {data.GetBusquedaAvanzada.data.map((p) => (
          <Flex key={`LastPropiedad-${p.propiedadId}`} pos="relative">
            <Image
              alt="casa"
              width={120}
              height={80}
              rounded="lg"
              src={p.fotoPrincipal.url}
            />
            <Box ml={2} my={2}>
              <Text fontSize="small" isTruncated>
                {p.titulo}
              </Text>
              <Text fontSize="small" color="red.400">
                S/ 200,000.00
              </Text>
              <HStack>
                <Text fontSize="small">Cuartos: {p.cuartos} </Text>
                <Text fontSize="small">Baños: {p.banios} </Text>
                <Text fontSize="small">M&sup2;: {p.areaConstruida} </Text>
              </HStack>
              <Badge colorScheme="green">Nueva</Badge>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  )
}

export default LastProperties
