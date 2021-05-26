import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Text, Flex, Box, Heading } from '@chakra-ui/layout';

import BasicSearch from '../BasicSearch';
// import PropTypes from 'prop-types'

const Hero = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <Box
      minH={{ xl: '100vh' }}
      bgImage="url(./hero_cp.webp)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        minH={{ xl: '100vh' }}
        bg="rgba(29, 41, 62,0.7)"
        mt={{ base: '76px', xl: '0px' }}
        align={{ base: 'flex-start', xl: 'center' }}
      >
        <Box pt="50px" pb="20px" maxW={{ base: '90%' }} mx="auto">
          <Heading
            mb="2"
            color="white"
            textAlign={'center'}
            fontSize={{ base: '2xl', sm: '4xl', xl: '6xl' }}
            fontWeight={{ base: 'bold' }}
          >
            Busca tu casa soñada
          </Heading>
          <Text textAlign={'center'} mb="8" color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Flex justify={{ base: 'space-evenly', sm: 'center' }} mb="6">
            <Button
              minW="28"
              size="lg"
              mx={{ base: '0', sm: '12px' }}
              onClick={() => setIsActive(1)}
              colorScheme={isActive === 1 ? 'red' : 'gray'}
            >
              Alquiler
            </Button>
            <Button
              minW="28"
              size="lg"
              mx={{ base: '0', sm: '12px' }}
              onClick={() => setIsActive(0)}
              colorScheme={isActive === 0 ? 'red' : 'gray'}
            >
              Venta
            </Button>
          </Flex>
          <BasicSearch />
        </Box>
      </Flex>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
