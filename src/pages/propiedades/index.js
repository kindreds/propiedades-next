import React from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import d from "next/dynamic";
import { FaList } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { Tooltip } from "@chakra-ui/tooltip";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Container } from "@chakra-ui/layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
const o = { ssr: false };

/* COMPONENTES */

const Footer = d(() => {
  return import("../../components/Footer");
}, o);
const AdvanceSearch = d(() => {
  return import("../../components/AdvanceSearch");
}, o);
const LastProperties = d(() => {
  return import("../../components/LastProperties");
}, o);
const PropertiesResult = d(() => {
  return import("../../components/PropertiesResult");
}, o);
const AdvanceSearchDrawer = d(() => {
  return import("../../components/AdvanceSearch/AdvanceSearchDrawer");
}, o);

const Propiedades = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w="full" bg="gray.200">
      <Head>
        <title>Propiedades</title>
        <link
          as="image"
          rel="preload"
          href="/banner-propiedades.webp"
          imagesrcset={`${"/banner-propiedades.webp"} 1200w,
             ${"/banner-propiedades.webp"}?w=200 200w,
             ${"/banner-propiedades.webp"}?w=400 400w,
             ${"/banner-propiedades.webp"}?w=800 800w,
             ${"/banner-propiedades.webp"}?w=1024 1024w,
            `}
        />
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
          quality={70}
          layout="fill"
          objectFit="cover"
          alt="Banner Propiedades"
          src="/banner-propiedades.webp"
        />
        <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.6)" />
      </Box>
      <Container
        pb={10}
        transform={{ base: "translateY(-100px)", lg: "translateY(-150px)" }}
        maxW={{
          base: "95%",
          sm: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
      >
        <Breadcrumb
          mb={5}
          spacing="8px"
          display={{ base: "none", lg: "block" }}
          separator={<ChevronRightIcon color="gray.100" fontSize="25px" />}
        >
          <BreadcrumbItem>
            <NextLink href="/">
              <BreadcrumbLink
                fontWeight="light"
                fontSize="lg"
                color="white"
                href="#"
              >
                Inicio
              </BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              fontWeight="light"
              fontSize="lg"
              color="white"
              href="#"
            >
              Propiedades
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex mb={5} align="center">
          <Heading
            flex={1}
            color="gray.100"
            lineHeight="shorter"
            letterSpacing="tight"
            fontWeight="extrabold"
            fontSize={{ base: "3xl", sm: "4xl" }}
          >
            Propiedades
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
          <Box>
            <AdvanceSearch />
            <LastProperties />
          </Box>
          <PropertiesResult />
        </Flex>
      </Container>
      <Footer />
      <AdvanceSearchDrawer isOpen={isOpen} onClose={onClose} />
      <IconButton
        size="lg"
        right={4}
        bottom={4}
        pos="fixed"
        rounded="full"
        colorScheme="red"
        onClick={() => onOpen()}
        icon={<GoSettings fontSize="30px" />}
        display={{ base: "flex", xl: "none" }}
      />
    </Box>
  );
};

Propiedades.getInitialProps = () => {
  return { dark: true };
};

export default Propiedades;
