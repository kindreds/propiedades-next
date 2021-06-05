import React from 'react';
import PropTypes from 'prop-types';
// import { Avatar } from '@chakra-ui/avatar';
import { Text, Box, Heading } from '@chakra-ui/layout';

const Card = ({ image: Image, title, content, ...props }) => {
  return (
    <Box
      w={{ base: '90%', sm: '380px' }}
      shadow="lg"
      rounded="lg"
      pos="relative"
      display="flex"
      className="card"
      cursor="pointer"
      overflow="hidden"
      flexDirection="column"
      sx={{ zIndex: 3 }}
      {...props}
    >
      <Box
        top={0}
        h="0px"
        w="full"
        shadow="md"
        bg="blue.200"
        pos="absolute"
        borderBottomRadius="25%"
        transition="height 0.5s ease"
        sx={{ zIndex: 1, '.card:hover &': { height: '100%' } }}
      />
      <Box p={{ base: 5, xl: 10 }} sx={{ zIndex: 2 }}>
        <Box
          mb={10}
          w="120px"
          h="120px"
          mx="auto"
          bg="blue.200"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="background 0.5s ease"
          sx={{ '.card:hover &': { bg: 'white' } }}
        >
          <Image fontSize="80px" />
        </Box>
        <Heading
          as="h3"
          mb={3}
          fontSize="lg"
          fontWeight="bold"
          lineHeight="shorter"
          transition="color 0.5s ease"
          // sx={{ '.card:hover &': { color: 'white' } }}
        >
          {title}
        </Heading>
        <Text
          lineHeight="tall"
          transition="color 0.5s ease"
          // sx={{ '.card:hover &': { color: 'white' } }}
        >
          {content}
        </Text>
        {/* <Button
          as="a"
          mt={16}
          size="lg"
          variant="outline"
          color="gray.700"
          _hover="gray.600"
          w={{ base: 'full' }}
          transition="all 0.5s ease"
          sx={{ '.card:hover &': { bg: 'gray.700', color: 'gray.200' } }}
        >
          Learn More
        </Button> */}
      </Box>
    </Box>
  );
};

Card.propTypes = {
  image: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
