import React, { useState } from 'react';
import ReactSlidy from 'react-slidy';
import { Box, Flex } from '@chakra-ui/layout';

import { testimonials } from '../../data';
import { createStyles, numOfDots } from '../../helper/dotStyles';
import TestimonialsCard from '../TestimonialsCard';
import { useBreakpointValue } from '@chakra-ui/media-query';

const Testimonios = () => {
  const numOfSlidesRaw = useBreakpointValue({
    base: 1,
    ms: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  });

  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  const numOfSlides = numOfSlidesRaw ?? 3;

  return (
    <Box maxW="1200px" mt={5} mx="auto">
      <ReactSlidy
        numOfSlides={numOfSlides}
        showArrows={false}
        keyboardNavigation
        slide={actualSlide}
        doAfterSlide={updateSlide}
      >
        {testimonials.map((item, i) => (
          <TestimonialsCard key={i} {...item} />
        ))}
      </ReactSlidy>
      <Flex flex={1} justify="center">
        {Array(numOfDots({ length: testimonials.length, numOfSlides }))
          .fill(null)
          .map((_, i) => {
            const pos = i === 0 ? 0 : i * numOfSlides;

            return (
              <button
                key={i}
                style={createStyles(pos === actualSlide)}
                onClick={() => updateSlide({ currentSlide: pos })}
              >
                &bull;
              </button>
            );
          })}
      </Flex>
    </Box>
  );
};

export default Testimonios;
