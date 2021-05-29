import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/layout';

import { Avatar } from '../tools';

const TestimonialsCard = ({ name, comment }) => {
  return (
    <Box mx="auto" display="flex" flexDirection="column" w="80%" h="auto">
      <Box pos="relative" mx="auto" maxW={100} mb={2}>
        <Avatar
          mb={4}
          alt={name}
          width={100}
          height={100}
          src="https://bit.ly/dan-abramov"
        />
        <Box
          w={8}
          h={8}
          bottom={0}
          right={-1}
          pos="absolute"
          rounded="full"
          borderWidth={5}
          bg="whatsapp.400"
          borderColor="white"
        />
      </Box>
      <Box>
        <Text fontSize="md" whiteSpace="normal" textAlign="center" mb={2}>
          {name}
        </Text>
        <Text fontSize="sm" whiteSpace="normal">
          {comment}
        </Text>
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
