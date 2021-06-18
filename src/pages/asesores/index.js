import React from "react";
import Head from "next/head";
import Image from "next/image";
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

import Footer from "../../components/Footer";
import Asesores from "../../components/AsesoresList";
import LastProperties from "../../components/LastProperties";
import AdvanceSearchAsesor from "../../components/AdvanceSearch/AdvanceSearchAsesor";
import { m, LazyMotion, domAnimation } from "framer-motion";

const asesores = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box pos="relative" bg="gray.200" minH="100vh">
        <Head>
          <title>Asesores</title>
        </Head>
        <Box
          pos="relative"
          w="full"
          h="40vh"
          overflow="hidden"
          borderBottomRadius="2xl"
        >
          <Image
            priority
            objectFit="cover"
            quality={70}
            layout="fill"
            alt="Banner Propiedades"
            src="/banner-propiedades.webp"
          />
          <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.6)" />
        </Box>

        <Container
          pb={10}
          maxW={{
            base: "95%",
            sm: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
          }}
          transform={{ base: "translateY(-100px)", lg: "translateY(-150px)" }}
        >
          <m.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Breadcrumb
              mb={5}
              spacing="8px"
              display={{ base: "none", lg: "block" }}
              separator={<ChevronRightIcon color="gray.100" fontSize="25px" />}
            >
              <BreadcrumbItem>
                <NextLink href="/">
                  <BreadcrumbLink fontWeight="light" color="gray.100">
                    Inicio
                  </BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontWeight="light" color="gray.100">
                  Asesores
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </m.div>

          <Flex mb={5} align="center">
            <Heading
              flex={1}
              as={m.h1}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
              color="gray.100"
              lineHeight="shorter"
              letterSpacing="tight"
              fontWeight="extrabold"
              fontSize={{ base: "3xl", sm: "4xl" }}
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
