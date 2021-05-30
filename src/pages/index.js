import '@fontsource/poppins';
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Text, Heading, Box } from '@chakra-ui/layout';

const opts = { ssr: false };

const GridProperty = dynamic(() => import('../components/GridProperty'), opts);
const Testimonios = dynamic(
  () => import('../components/Section/Testimonios'),
  opts
);
const PropiedadesDesc = dynamic(
  () => import('../components/Section/PropiedadesDesc'),
  opts
);
const PorQueElegirnos = dynamic(
  () => import('../components/Section/PorQueElegirnos'),
  opts
);

const Index = () => {
  return (
    <Box>
      <Head>
        <title>Inmobiliara</title>
      </Head>

      <Navbar />

      <Hero />
      <Box bg="gray.200">
        <Container maxW="container.xl" mx="auto" py="50px">
          <Heading
            mb="2"
            textAlign="center"
            fontSize={{ base: '2xl', sm: '3xl' }}
          >
            Propiedades destacada
          </Heading>
          <Text textAlign="center">
            Propiedades seleccionadas por nuestro equipo.
          </Text>
          <PropiedadesDesc />
        </Container>
      </Box>
      <Container maxW="container.xl" py="50px">
        <Heading
          mb="2"
          textAlign="center"
          fontSize={{ base: '2xl', sm: '3xl' }}
        >
          Podras buscar propiedades en estas ciudades.
        </Heading>
        <Text textAlign="center">
          em ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <GridProperty />
      </Container>
      <Box bg="gray.200">
        <Container maxW="container.xl" py="50px">
          <Heading
            mb="2"
            textAlign="center"
            fontSize={{ base: '2xl', sm: '3xl' }}
          >
            Por que elegirnos.
          </Heading>
          <Text textAlign="center">
            em ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <PorQueElegirnos />
        </Container>
      </Box>
      <Box>
        <Container maxW="container.xl" py="50px">
          <Heading
            mb="2"
            textAlign="center"
            fontSize={{ base: '2xl', sm: '3xl' }}
          >
            Testimonios
          </Heading>
          <Text textAlign="center">
            em ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Testimonios />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
