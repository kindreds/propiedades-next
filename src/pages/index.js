import "@fontsource/poppins";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Image } from "@chakra-ui/image";
import { keyframes } from "@chakra-ui/react";
import { Container, Text, Heading, Box } from "@chakra-ui/layout";

import { m, LazyMotion, domAnimation } from "framer-motion";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

const opts = { ssr: false };

const GridProperty = dynamic(() => import("../components/GridProperty"), opts);
const Testimonios = dynamic(
  () => import("../components/Section/Testimonios"),
  opts
);
const PropiedadesDesc = dynamic(
  () => import("../components/Section/PropiedadesDesc"),
  opts
);
const PorQueElegirnos = dynamic(
  () => import("../components/Section/PorQueElegirnos"),
  opts
);

const Wave = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const animation = `${Wave} 5s infinite ease-in-out`;

const Index = () => {
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Inmobiliara</title>
        <link
          as="image"
          rel="preload"
          href="/hero_cp.webp"
          imagesrcset={`${"/inhouse_1_cp.webp"} 1200w,
             ${"/hero_cp.webp"}?w=200 200w,
             ${"/hero_cp.webp"}?w=400 400w,
             ${"/hero_cp.webp"}?w=800 800w,
             ${"/hero_cp.webp"}?w=1024 1024w,
            `}
        />
      </Head>

      <Hero />
      <Box bg="#D2EAFF" pos="relative" overflow="hidden">
        <Container maxW="container.xl" mx="auto" py="50px">
          <Heading
            mb={2}
            as="h3"
            textAlign="center"
            fontWeight="semibold"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "shorter", md: "none" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Propiedades destacada
          </Heading>
          <Text textAlign="center">
            Propiedades seleccionadas por nuestro equipo.
          </Text>
          <PropiedadesDesc />
        </Container>
      </Box>
      <Container ref={ref2} maxW="container.xl" py="50px">
        <m.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Heading
            as="h3"
            mb={2}
            textAlign="center"
            fontWeight="semibold"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "shorter", md: "none" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Podras buscar propiedades en estas ciudades.
          </Heading>
        </m.div>
        <Text textAlign="center">
          em ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <GridProperty inView={inView2} />
      </Container>
      <Box pos="relative" bg="#D2EAFF" overflow="hidden">
        <Container maxW="container.xl" py="50px">
          <m.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Heading
              as="h3"
              mb={2}
              textAlign="center"
              fontWeight="semibold"
              fontSize={{ base: "2xl", md: "4xl" }}
              lineHeight={{ base: "shorter", md: "none" }}
              letterSpacing={{ base: "normal", md: "tight" }}
            >
              Por que elegirnos..
            </Heading>
          </m.div>
          <Text textAlign="center">
            em ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <PorQueElegirnos />
        </Container>
        <Image
          left={{ base: -10, md: -5, xl: -2 }}
          bottom={{ base: -10, md: -5, xl: -2 }}
          pos="absolute"
          animation={animation}
          src="/left_bottom_01.png"
          sx={{ zIndex: 2, animationDelay: "1s" }}
        />
        <Image
          left={{ base: -10, md: -5, xl: -2 }}
          bottom={{ base: -10, md: -5, xl: -2 }}
          pos="absolute"
          sx={{ zIndex: 1 }}
          animation={animation}
          src="/left_bottom_02.png"
        />
        <Image
          right={{ base: "-90%", md: -5, xl: -2 }}
          bottom={{ base: "-90%", md: -5, xl: -2 }}
          pos="absolute"
          animation={animation}
          src="/right_bottom_01.png"
          sx={{ zIndex: 2, animationDelay: "1s" }}
        />
        <Image
          right={{ base: "-90%", md: -5, xl: -2 }}
          bottom={{ base: "-90%", md: -5, xl: -2 }}
          pos="absolute"
          sx={{ zIndex: 1 }}
          animation={animation}
          src="/right_bottom_02.png"
        />
      </Box>
      <Box>
        <Container maxW="container.xl" py="50px">
          <Heading
            as="h3"
            mb={2}
            textAlign="center"
            fontWeight="semibold"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "shorter", md: "none" }}
            letterSpacing={{ base: "normal", md: "tight" }}
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
    </LazyMotion>
  );
};

export default Index;
