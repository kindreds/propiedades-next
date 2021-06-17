import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Tooltip } from "@chakra-ui/tooltip";
import { IconButton } from "@chakra-ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Flex, Heading, Container } from "@chakra-ui/layout";

import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Footer from "../components/Footer";
import Asesores from "../components/AsesoresList";
import LastProperties from "../components/LastProperties";
import AdvanceSearchAsesor from "../components/AdvanceSearch/AdvanceSearchAsesor";
import { m, LazyMotion, domAnimation } from "framer-motion";

const asesores = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box
        as={m.div}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        pos="relative"
        bg="gray.200"
        minH="100vh"
      >
        <Head>
          <title>Asesores</title>
        </Head>

        <Container
          pb={10}
          maxW={{
            base: "95%",
            sm: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
          pt={{ base: 10 }}
        >
          <m.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Breadcrumb
              mb={5}
              spacing="8px"
              display={{ base: "none", lg: "block" }}
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <NextLink href="/">
                  <BreadcrumbLink fontWeight="light">Inicio</BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontWeight="light">Asesores</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </m.div>

          <Flex mb={5} align="center">
            <Heading
              as={m.h1}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
              fontSize={{ base: "2xl", sm: "3xl" }}
              flex={1}
            >
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
            <m.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
            >
              <AdvanceSearchAsesor />
              <LastProperties />
            </m.div>
            <Asesores />
          </Flex>
        </Container>
        <Footer />
      </Box>
    </LazyMotion>
  );
};

asesores.getInitialProps = () => {
  return { dark: true };
};

export default asesores;
