import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@chakra-ui/button';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';

const PropertyCard = dynamic(() => import('../PropertyCard'));

const PropertiesResult = () => {
  return (
    <Box flex={1}>
      <Flex
        p={{ base: 2, xl: 4 }}
        mb={6}
        bg="white"
        shadow="lg"
        maxH="70px"
        rounded="lg"
        align="center"
        justify="space-between"
      >
        <Text
          fontWeight="bold"
          letterSpacing="wide"
          ml={{ base: 2, xl: 6 }}
          fontSize={{ base: 'small' }}
          textAlign={{ base: 'center' }}
        >
          10 RESULTADOS
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            fontSize={{ base: 'sm' }}
            rightIcon={<ChevronDownIcon />}
          >
            Ordenar
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={{ base: 'sm' }}>Nuevos</MenuItem>
            <MenuItem fontSize={{ base: 'sm' }}>Antiguos</MenuItem>
            <MenuItem fontSize={{ base: 'sm' }}>Menor precio</MenuItem>
            <MenuItem fontSize={{ base: 'sm' }}>Mayor precio</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <SimpleGrid
        gap={4}
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
        }}
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <PropertyCard fullW key={i} i={i} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default PropertiesResult;
