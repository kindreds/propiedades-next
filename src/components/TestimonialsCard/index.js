import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/layout';

import { Avatar } from '../tools';

const TestimonialsCard = ({ name, comment }) => {
  return (
    <Box display="flex" flexDirection="column" maxW="300px" mx="auto">
      <Box mx="auto" maxW={100}>
        <Avatar
          mb={4}
          alt={name}
          width={100}
          height={100}
          src="https://bit.ly/dan-abramov"
        />
      </Box>
      <Text textAlign="center" mb={2}>
        {name}
      </Text>
      <Text fontSize="sm">{comment}</Text>
    </Box>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  comment: PropTypes.string,
};

export default TestimonialsCard;
