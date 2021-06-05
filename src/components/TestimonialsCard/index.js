import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/layout';

import { Avatar } from '../tools';
import { StarIcon } from '@chakra-ui/icons';

const TestimonialsCard = ({ name, comment }) => {
  return (
    <Box
      w="90%"
      mx="auto"
      display="flex"
      className="card"
      flexDirection="column"
    >
      <Box
        mb={1}
        mx="auto"
        maxW={200}
        pos="relative"
        transform="translateY(50px)"
        transition="all 0.3s ease"
        sx={{
          '.card:hover &': {
            mb: 0,
            maxW: 150,
            transform: 'translateY(0)',
          },
        }}
      >
        <Avatar
          alt={name}
          width={200}
          height={200}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Box
        p={6}
        transition="all 0.3s ease"
        transform="translateY(40px)"
        sx={{
          '.card:hover &': {
            transform: 'translateY(0)',
          },
        }}
      >
        <Text
          mb={4}
          textAlign="center"
          fontWeight="semibold"
          fontSize={{ base: 'lg', md: 'xl' }}
          lineHeight={{ base: 'shorter', md: 'none' }}
          letterSpacing={{ base: 'normal', md: 'tight' }}
        >
          {name}
        </Text>
        <Box d="flex" alignItems="center" justifyContent="center" mb={4}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                mr={1}
                fontSize="xl"
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
        </Box>
        <Box
          h={5}
          opacity={0}
          pos="relative"
          transition="height 0.3s ease"
          sx={{
            '.card:hover &': {
              opacity: 1,
              height: '200px',
            },
          }}
        >
          <Text fontSize="sm" whiteSpace="normal">
            {comment}
          </Text>
          <Box
            w="full"
            h="full"
            bg="white"
            bottom={0}
            pos="absolute"
            transition="height 0.5s ease"
            sx={{
              '.card:hover &': {
                height: 0,
                opacity: 0,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  comment: PropTypes.string,
};

export default TestimonialsCard;
