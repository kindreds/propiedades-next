import React from 'react';
import Section from '.';
import SliderCard from '../SliderCard';
import { Box, Flex } from '@chakra-ui/layout';
import TestimonialsCard from '../TestimonialsCard';

import { testimonials } from '../../data';

const Testimonios = () => {
  return (
    <Section>
      <Flex justify="space-evenly">
        <SliderCard>
          {testimonials.map((item, i) => (
            <Box w="100%" key={i}>
              <TestimonialsCard key={i} {...item} />
            </Box>
          ))}
        </SliderCard>
      </Flex>
    </Section>
  );
};

export default Testimonios;
