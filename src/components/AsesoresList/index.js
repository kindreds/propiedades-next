import React from "react";
import dynamic from "next/dynamic";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

const AsesorCard = dynamic(() => import("../AsesorCard"), { ssr: false });

const AsesoresList = () => {
  return (
    <Box flex={1} d="flex" flexDir="column" justifyContent="center">
      <SimpleGrid
        mb={6}
        bg="white"
        shadow="lg"
        rounded="lg"
        align="center"
        p={{ base: 2, xl: 4 }}
        gap={{ base: 2, md: 6 }}
        justify="space-between"
        templateColumns={{ base: "minmax(0, 1fr)", sm: "minmax(0, 2fr) 150px" }}
      >
        <InputGroup>
          <Input placeholder="Buscar asesor" />
          <InputRightAddon>
            <IconButton icon={<SearchIcon />} />
          </InputRightAddon>
        </InputGroup>

        <Menu ml={6}>
          <MenuButton
            as={Button}
            fontSize={{ base: "sm" }}
            rightIcon={<ChevronDownIcon />}
          >
            Ordenar
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={{ base: "sm" }}>Nuevos</MenuItem>
            <MenuItem fontSize={{ base: "sm" }}>Antiguos</MenuItem>
            <MenuItem fontSize={{ base: "sm" }}>Menor precio</MenuItem>
            <MenuItem fontSize={{ base: "sm" }}>Mayor precio</MenuItem>
          </MenuList>
        </Menu>
      </SimpleGrid>

      <SimpleGrid
        gap={4}
        mx="auto"
        boxSizing="border-box"
        templateColumns={{
          base: "minmax(0, 1fr)",
          sm: "repeat(2, minmax(0, 1fr))",
          xl: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <AsesorCard key={i} i={i} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default AsesoresList;
