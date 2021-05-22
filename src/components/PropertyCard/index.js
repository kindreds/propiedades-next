import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/image';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Text, Divider, Flex, Stack } from '@chakra-ui/layout';

const PropertyCard = ({ i }) => {
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
        maxW={{ base: '290px', ms: '300px', xl: '350px' }}
      >
        <Image src="./casa1.jpg" borderRadius="lg" objectFit="contain" />
        <Box py={4}>
          <Box mb={4}>
            <Text fontSize="sm">Casa {i}</Text>
            <Text fontWeight="700" mb="2px">
              Breña
            </Text>
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
};

export default PropertyCard;
