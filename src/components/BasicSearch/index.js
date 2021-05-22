import React from 'react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Select } from '@chakra-ui/select';
import { Stack, Flex } from '@chakra-ui/layout';
// import PropTypes from 'prop-types'

const BasicSearch = () => {
  return (
    <Stack
      mb="6"
      bg="white"
      p={5}
      spacing="15px"
      borderWidth="1px"
      borderRadius="lg"
      direction={{ base: 'column', xl: 'row' }}
      minW={{ base: '280px', xl: '1100px' }}
      mx="auto"
    >
      <Input
        type="text"
        fontSize={'15'}
        minH={{ base: '50px' }}
        placeholder="¿Que estas buscando?"
      />
      <Select
        fontSize={'15'}
        minH={{ base: '50px' }}
        placeholder="Tipo de propiedad"
      >
        <option>Tipo 2</option>
        <option>Tipo 3</option>
        <option>Tipo 4</option>
        <option>Tipo 5</option>
      </Select>
      <Input
        type="text"
        minH={{ base: '50px' }}
        fontSize={'15'}
        placeholder="Ubicacion"
      />
      <Select fontSize={'15'} placeholder="Cuartos" minH={{ base: '50px' }}>
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <option key={i}>+{i + 1}</option>
          ))}
      </Select>
      <Flex justify="center">
        <Button size="lg" colorScheme="red">
          Buscar
        </Button>
      </Flex>
    </Stack>
  );
};

BasicSearch.propTypes = {};

export default BasicSearch;
