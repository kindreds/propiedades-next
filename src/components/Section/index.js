import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/layout';

const Section = ({ children }) => {
  return (
    <Flex my={{ base: 8, xl: 10 }} w="100%" justify="center">
      <Box w={{ base: '100vw' }} maxW="1200px">
        {children}
      </Box>
    </Flex>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
