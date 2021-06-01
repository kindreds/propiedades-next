import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { FaList } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { Tooltip } from '@chakra-ui/tooltip';
import { IconButton } from '@chakra-ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { GoSettings } from 'react-icons/go';
import { useDisclosure } from '@chakra-ui/hooks';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Container } from '@chakra-ui/layout';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Asesores from '../components/AsesoresList';
import AdvanceSearch from '../components/AdvanceSearch';
import LastProperties from '../components/LastProperties';

const asesores = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box pos="relative" bg="gray.200" minH="100vh">
      <Head>
        <title>Asesores</title>
      </Head>

      <Navbar dark={true} />

      <Container
        pb={10}
        maxW={{
          base: '95%',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
        pt={{ base: '100px', xl: '120px' }}
      >
        <Breadcrumb
          mb={5}
          spacing="8px"
          display={{ base: 'none', lg: 'block' }}
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
              Asesores
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex mb={5} align="center">
          <Heading fontSize={{ base: '2xl', sm: '3xl' }} flex={1}>
            Asesores
          </Heading>
          <Tooltip
            label="Listado"
            aria-label="Boton para cambiar presentacion como lista."
          >
            <IconButton colorScheme="red" mr={4} icon={<FaList />} />
          </Tooltip>
          <Tooltip
            label="Galeria"
            aria-label="Boton para cambiar presentacion como galeria."
          >
            <IconButton colorScheme="red" icon={<BsGridFill />} />
          </Tooltip>
        </Flex>

        <Flex>
          <div>
            <AdvanceSearch />
            <LastProperties />
          </div>
          <Asesores />
        </Flex>
      </Container>
      <Footer />

      <IconButton
        size="lg"
        right={4}
        bottom={4}
        pos="fixed"
        rounded="full"
        colorScheme="red"
        onClick={() => onOpen()}
        icon={<GoSettings fontSize="30px" />}
        display={{ base: 'flex', xl: 'none' }}
      />
    </Box>
  );
};

export default asesores;
