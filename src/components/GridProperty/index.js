import React from 'react'
// import PropType from 'prop-types';
import { Grid, GridItem, Box, Flex, Text } from '@chakra-ui/layout'

import { Image } from '../tools'
import { useGetAllDistritosQuery } from '../../generated/graphql'

const Overlay = () => (
  <Box
    w="100%"
    h="100%"
    rounded="lg"
    pos="absolute"
    cursor="pointer"
    bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.8))"
  />
)

const ciudades = {
  GetAllDistritos: {
    data: [{ DistNom: '' }, { DistNom: '' }, { DistNom: '' }, { DistNom: '' }],
    NroItems: 0
  }
}

const GridProperty = () => {
  const { data = ciudades } = useGetAllDistritosQuery({
    variables: { destacado: '1', numberPaginate: 4, page: 1 }
  })

  const rendername = (i) => {
    return data.GetAllDistritos.data[i].DistNom
  }

  console.log(data)

  return (
    <Grid
      mt={10}
      gap={{ base: 3, xl: 6 }}
      justifyContent="center"
      templateColumns={{
        base: '320px',
        ms: 'repeat(2, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      }}
      templateRows={{
        base: 'repeat(4, 250px)',
        ms: 'repeat(3, 250px)',
        sm: 'repeat(3, 250px)',
        md: 'repeat(2, 250px)'
      }}
    >
      <GridItem
        rowSpan={2}
        pos="relative"
        overflow="hidden"
        className="overlay"
      >
        <Overlay />
        <Image
          rounded="lg"
          layout="fill"
          cursor="pointer"
          src="/ciudad2H_cp.webp"
          filter="grayscale(0.5)"
          transition="all 0.3s ease"
          sx={{
            '.overlay:hover &': {
              filter: 'grayscale(0)',
              transform: 'scale(1.2) rotate(-5deg)'
            }
          }}
        />
        <Flex pos="absolute" bottom={6} w="100%" justify="center">
          <Text color="#fff" fontSize="xl">
            {rendername(0)}
          </Text>
        </Flex>
      </GridItem>
      <GridItem pos="relative" overflow="hidden" className="overlay">
        <Overlay />
        <Image
          cursor="pointer"
          rounded="lg"
          layout="fill"
          src={'/ciudad1W_cp.webp'}
          filter="grayscale(0.5)"
          transition="all 0.3s ease"
          sx={{
            '.overlay:hover &': {
              filter: 'grayscale(0)',
              transform: 'scale(1.2) rotate(-5deg)'
            }
          }}
        />
        <Flex pos="absolute" bottom={6} w="100%" justify="center">
          <Text color="#fff" fontSize="xl">
            {rendername(1)}
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={2}
        pos="relative"
        overflow="hidden"
        className="overlay"
      >
        <Overlay />
        <Image
          cursor="pointer"
          rounded="lg"
          layout="fill"
          src={'/ciudad3H_cp.webp'}
          filter="grayscale(0.5)"
          transition="all 0.3s ease"
          sx={{
            '.overlay:hover &': {
              filter: 'grayscale(0)',
              transform: 'scale(1.2) rotate(-5deg)'
            }
          }}
        />
        <Flex pos="absolute" bottom={6} w="100%" justify="center">
          <Text color="#fff" fontSize="xl">
            {rendername(2)}
          </Text>
        </Flex>
      </GridItem>
      <GridItem pos="relative" className="overlay" overflow="hidden">
        <Overlay />
        <Image
          cursor="pointer"
          rounded="lg"
          layout="fill"
          src={'/ciudad4W_cp.webp'}
          filter="grayscale(0.5)"
          transition="all 0.3s ease"
          sx={{
            '.overlay:hover &': {
              filter: 'grayscale(0)',
              transform: 'scale(1.2) rotate(-5deg)'
            }
          }}
        />
        <Flex pos="absolute" bottom={6} w="100%" justify="center">
          <Text color="#fff" fontSize="xl">
            {rendername(3)}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default GridProperty
