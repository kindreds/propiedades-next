import '@fontsource/montserrat';
import React from 'react';
import Head from 'next/head';

import Card from '../components/Card';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import SliderCard from '../components/SliderCard';
import PropertyCard from '../components/PropertyCard';
import GridProperty from '../components/GridProperty';
import TestimonialsCard from '../components/TestimonialsCard';
import { Container, Flex, Text, Heading, Box } from '@chakra-ui/layout';

import { testimonials, whyChooseUs } from '../data';

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
          <SliderCard>
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <Box w="100%" key={i}>
                  <PropertyCard key={i} i={i} />
                </Box>
              ))}
          </SliderCard>
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
          <Section>
            <Flex justify="space-evenly" wrap="wrap">
              {whyChooseUs.map((item, i) => (
                <Card key={i} {...item} bg="white" mb={{ base: 6, lg: 0 }} />
              ))}
            </Flex>
          </Section>
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
          <Section>
            <Flex justify="space-evenly">
              <SliderCard>
                {testimonials.map((item, i) => (
                  <Box w="100%" key={i}>
                    <TestimonialsCard key={i} {...item} />
                  </Box>
                ))}
              </SliderCard>
            </Flex>
          </Section>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
