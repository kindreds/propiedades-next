import React from 'react';
import PropTypes from 'prop-types';
import { BsHeart } from 'react-icons/bs';
import { Avatar } from '@chakra-ui/avatar';
import { IconButton } from '@chakra-ui/button';
import {
  Box,
  Text,
  Divider,
  Flex,
  Stack,
  Badge,
  HStack,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const PropertyCard = ({ i, fullW }) => {
  const w = { base: '290px', ms: '300px', xl: '350px' };

  return (
    <Box w="100%">
      <Box
        p={3}
        mb={4}
        mx="auto"
        bg="white"
        shadow="md"
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.300"
        maxW={fullW ? { base: '100%', ms: '95%' } : w}
      >
        <Box pos="relative">
          <Image borderRadius="lg" objectFit="contain" src="/casa1_cp.webp" />
          <HStack pos="absolute" top={2} left={2} w="100%">
            <Badge colorScheme="green">Nueva</Badge>
            <Badge colorScheme="blue">Venta</Badge>
          </HStack>
          <IconButton
            right={2}
            bottom={2}
            opacity={0.7}
            size="sm"
            pos="absolute"
            icon={<BsHeart />}
            _hover={{ opacity: 1, color: 'red.600' }}
          />
        </Box>
        <Box py={4}>
          <Box mb={4}>
            <Text fontSize="sm">Casa {i}</Text>
            <Text fontSize="sm">Breña</Text>
            <Text fontWeight="700">S/ 200.000,00</Text>
            <Text fontSize="sm">Av. Coronel Portillo #1088.</Text>
          </Box>

          <Stack direction="row">
            <Text fontSize="sm">Cuartos: 4</Text>
            <Text fontSize="sm">Baños: 4</Text>
            <Text fontSize="sm">M&sup2;: 72</Text>
          </Stack>
        </Box>
        <Divider />
        <Flex justify="space-between" alignItems="center" pt={2}>
          <Flex alignItems="center">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Text ml={1} fontSize="sm">
              Dan Abrahmov
            </Text>
          </Flex>
          <Text fontSize="sm">hace 1 año</Text>
        </Flex>
      </Box>
    </Box>
  );
};

PropertyCard.propTypes = {
  i: PropTypes.number,
  fullW: PropTypes.bool,
};

export default PropertyCard;
