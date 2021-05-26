import React from 'react';
import { Box } from '@chakra-ui/layout';
import TestimonialsCard from '../TestimonialsCard';
import { FixedSizeList as List } from 'react-window';

import { testimonials } from '../../data';

const Testimonios = () => {
  return (
    <Box py={10}>
      <List
        height={400}
        width={1200}
        itemCount={testimonials.length}
        itemSize={350}
        layout="horizontal"
        itemData={[...testimonials]}
      >
        {({ data, index, style }) => {
          const item = data[index];
          return (
            <Box style={style} w="100%">
              <TestimonialsCard {...item} />
            </Box>
          );
        }}
      </List>
    </Box>
  );
};

export default Testimonios;
