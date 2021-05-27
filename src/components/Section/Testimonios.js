import React from 'react';
import { Box } from '@chakra-ui/layout';
import TestimonialsCard from '../TestimonialsCard';
import { FixedSizeList as List } from 'react-window';

import { testimonials } from '../../data';
import { useBreakpointValue } from '@chakra-ui/media-query';

const Testimonios = () => {
  const width = useBreakpointValue({
    base: 300,
    ms: 400,
    sm: 620,
    md: 750,
    lg: 1000,
    xl: 1200,
  });

  const itemInView = width >= 1000 ? 3 : width >= 620 ? 2 : 1;

  return (
    <Box py={10}>
      <List
        height={400}
        layout="horizontal"
        width={width ?? 300}
        itemData={[...testimonials]}
        itemCount={testimonials.length}
        style={{ marginInline: 'auto' }}
        itemSize={((100 / itemInView) * width) / 100}
      >
        {({ data, index, style }) => (
          <Box style={style} w="100%" minW="300px">
            <TestimonialsCard {...data[index]} />
          </Box>
        )}
      </List>
    </Box>
  );
};

export default Testimonios;
