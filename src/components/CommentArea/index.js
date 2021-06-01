import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Heading, Stack, Flex, Text } from '@chakra-ui/layout';

const CommentArea = () => {
  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={1} fontWeight="semibold">
        12 Comentarios
      </Heading>
      <Box d="flex" alignItems="center" mb={5}>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              ml={1}
              fontSize="sm"
              color={i < 4 ? 'teal.500' : 'gray.300'}
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {33} Opiniones
        </Box>
      </Box>

      <Stack spacing={4}>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Box key={i}>
              <Flex align="center" mb={2}>
                <Avatar size="lg" mr={5} />
                <Box mb={2}>
                  <Text fontWeight="semibold">Diana Cooper</Text>
                  <Text fontSize="sm" color="gray.500">
                    Marzo 12, 2021
                  </Text>
                  {Array(i)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="sm"
                        color={i < 4 ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Box>
              </Flex>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default CommentArea;
