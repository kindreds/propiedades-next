import React from 'react';
import PropTypes from 'prop-types';
// import { Avatar } from '@chakra-ui/avatar';
import { Text, Box } from '@chakra-ui/layout';

const Card = ({ image: Image, title, content, ...props }) => {
  return (
    <Box
      p={10}
      w="300px"
      shadow="lg"
      rounded="lg"
      display="flex"
      flexDirection="column"
      {...props}
    >
      {/* <Avatar mx="auto" mb={2} size="2xl" src={image} /> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="120px"
        h="120px"
        rounded="full"
        bg="blue.200"
        mx="auto"
        mb={4}
      >
        <Image fontSize="80px" />
      </Box>
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm">{content}</Text>
    </Box>
  );
};

Card.propTypes = {
  image: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
