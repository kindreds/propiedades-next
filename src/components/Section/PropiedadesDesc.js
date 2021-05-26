import React from 'react';
import SliderCard from '../SliderCard';
import PropertyCard from '../PropertyCard';
import { Box } from '@chakra-ui/layout';

const PropiedadesDesc = () => {
  return (
    <SliderCard>
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <Box w="100%" key={i}>
            <PropertyCard key={i} i={i} />
          </Box>
        ))}
    </SliderCard>
  );
};

export default PropiedadesDesc;
