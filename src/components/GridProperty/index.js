import React from 'react';
// import PropType from 'prop-types';
import Image from 'next/image';
import { Grid, GridItem, Box, Flex, Text } from '@chakra-ui/layout';

const Overlay = () => (
  <Box
    w="100%"
    h="100%"
    rounded="lg"
    pos="absolute"
    cursor="pointer"
    bgGradient="linear(to-b, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.8))"
  />
);

const GridProperty = () => {
  return (
    <>
      <Grid
        mt={10}
        gap={{ base: 3, xl: 6 }}
        justifyContent="center"
        templateColumns={{
          base: '320px',
          ms: 'repeat(2, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        templateRows={{
          base: 'repeat(4, 250px)',
          ms: 'repeat(3, 250px)',
          sm: 'repeat(3, 250px)',
          md: 'repeat(2, 250px)',
        }}
      >
        <GridItem
          rowSpan={2}
          pos="relative"
          transition="transform 0.25s ease"
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Overlay />
          <Image src="/ciudad2H_cp.webp" layout="fill" />
          <Flex pos="absolute" bottom={6} w="100%" justify="center">
            <Text color="#fff" fontSize="xl">
              Ciudad 1
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          pos="relative"
          transition="transform 0.25s ease"
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Overlay />
          <Image layout="fill" src={'/ciudad1W_cp.webp'} />
          <Flex pos="absolute" bottom={6} w="100%" justify="center">
            <Text color="#fff" fontSize="xl">
              Ciudad 2
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          pos="relative"
          rowSpan={2}
          transition="transform 0.25s ease"
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Overlay />
          <Image layout="fill" src={'/ciudad3H_cp.webp'} />
          <Flex pos="absolute" bottom={6} w="100%" justify="center">
            <Text color="#fff" fontSize="xl">
              Ciudad 3
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          pos="relative"
          transition="transform 0.25s ease"
          _hover={{ transform: 'scale(1.01)' }}
        >
          <Overlay />
          <Image layout="fill" src={'/ciudad4W_cp.webp'} />
          <Flex pos="absolute" bottom={6} w="100%" justify="center">
            <Text color="#fff" fontSize="xl">
              Ciudad 4
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default GridProperty;
