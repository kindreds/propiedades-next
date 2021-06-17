import React from "react";
import Head from "next/head";
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
    <Box fontWeight="light" pos="relative" bg="gray.200" minH="100vh">
      <Head>
        <title>Propiedades</title>
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
        <Breadcrumb
          mb={5}
          spacing="8px"
          display={{ base: "none", lg: "block" }}
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
        <Flex mb={5} align="center">
          <Heading fontSize={{ base: "2xl", sm: "3xl" }} flex={1}>
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
          <div>
            <AdvanceSearch />
            <LastProperties />
          </div>
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
