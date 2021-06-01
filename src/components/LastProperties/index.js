import React from 'react';
import Image from 'next/image';
import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/layout';

const LastProperties = () => {
  return (
    <Box
      mt={8}
      mr={4}
      py={4}
      px={6}
      bg="white"
      shadow={'lg'}
      rounded={'lg'}
      display={{ base: 'none', lg: 'block' }}
    >
      <Text mb={4} fontWeight="bold">
        Últimas propiedades
      </Text>
      <Stack spacing={4} divider={<Divider />}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Flex key={i} pos="relative">
              <Image
                alt="casa"
                width={80}
                height={80}
                rounded="lg"
                src="/casa1_cp.webp"
              />
              <Box ml={2}>
                <Text fontSize="sm">Casa 1</Text>
                <Text fontSize="sm" color="red.400">
                  S/ 200,000.00
                </Text>
                <HStack>
                  <Text fontSize="sm">Cuartos: 4</Text>
                  <Text fontSize="sm">Baños: 4</Text>
                  <Text fontSize="sm">M&sup2;: 72</Text>
                </HStack>
              </Box>
              <Badge pos="absolute" top={0} right={0} colorScheme="green">
                Nueva
              </Badge>
            </Flex>
          ))}
      </Stack>
    </Box>
  );
};

export default LastProperties;
