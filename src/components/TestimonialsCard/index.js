import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Text } from '@chakra-ui/layout';
import { AvatarBadge } from '@chakra-ui/avatar';

const TestimonialsCard = ({ image, name, comment }) => {
  return (
    <Box display="flex" flexDirection="column" maxW="300px" mx="auto">
      <Avatar mb={4} mx="auto" size="2xl" src={image} name={name}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
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
