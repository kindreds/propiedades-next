import React from 'react';
// import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window';
// import SliderCard from '../SliderCard';
import { Box } from '@chakra-ui/layout';
import PropertyCard from '../PropertyCard';

/* eslint-disable */
const Column = ({ columnIndex, style }) => (
  <Box style={style} w="100%">
    <PropertyCard i={columnIndex} />
  </Box>
);

const PropiedadesDesc = () => {
  return (
    <Box py={10}>
      <List
        height={500}
        itemCount={10}
        itemSize={350}
        layout="horizontal"
        width={1200}
      >
        {Column}
      </List>
    </Box>
  );
};

export default PropiedadesDesc;
