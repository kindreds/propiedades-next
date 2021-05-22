import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
} from '@chakra-ui/react';
import { FaList } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { BsGridFill } from 'react-icons/bs';
import { IconButton } from '@chakra-ui/button';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Heading,
  Box,
  Container,
  Flex,
  Text,
  SimpleGrid,
} from '@chakra-ui/layout';

import AdvanceSearch from '../components/AdvanceSearch';
import PropertyCard from '../components/PropertyCard';

const Propiedades = () => {
  return (
    <Box pos="relative" bg="gray.200" minH="100vh">
      <Head>
        <title>Inmobiliara</title>
      </Head>

      <Navbar dark={true} />
      <Container maxW="container.xl" pt="120px">
        <Breadcrumb
          mb={5}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <NextLink href="/">
              <BreadcrumbLink fontWeight="light" href="#">
                Inicio
              </BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="light" href="#">
              Propiedades
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex mb={5}>
          <Heading fontSize={{ base: '2xl', sm: '3xl' }} flex={1}>
            Propiedades
          </Heading>
          <IconButton colorScheme="red" mr={4} icon={<FaList />} />
          <IconButton colorScheme="red" icon={<BsGridFill />} />
        </Flex>
        <Flex>
          <AdvanceSearch />
          <Box flex={1}>
            <Flex
              p={4}
              mb={6}
              bg="white"
              shadow="lg"
              maxH="70px"
              rounded="lg"
              align="center"
              justify="space-between"
            >
              <Text ml={6}>10 Propiedades encontradas</Text>
              <Select w="200px" placeholder="Ordenar por">
                <option>Nuevos</option>
                <option>Antiguos</option>
                <option>Precio Bajo</option>
                <option>Precio Alto</option>
              </Select>
            </Flex>

            <SimpleGrid gap={2} templateColumns="repeat(3, 1fr)">
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
              <PropertyCard i={1} />
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Propiedades;
