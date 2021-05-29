import React, { useState } from 'react';
import ReactSlidy from 'react-slidy';
import PropertyCard from '../PropertyCard';
import { Box, Flex } from '@chakra-ui/layout';
import { createStyles } from '../../helper/dotStyles';
import Cpwe from '../PropertyCard/PropertyCardV2';

const PropiedadesDesc = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  const SLIDES = Array(9).fill(null);

  return (
    <Box maxW="1200px" my={5} mx="auto">
      <ReactSlidy
        numOfSlides={3}
        showArrows={false}
        keyboardNavigation
        slide={actualSlide}
        doAfterSlide={updateSlide}
      >
        {SLIDES.map((_, i) => (
          <PropertyCard key={i} i={i + 1} />
        ))}
      </ReactSlidy>
      <Flex flex={1} justify="center">
        <button
          style={createStyles(0 === actualSlide)}
          onClick={() => updateSlide({ currentSlide: 0 })}
        >
          &bull;
        </button>
        <button
          style={createStyles(3 === actualSlide)}
          onClick={() => updateSlide({ currentSlide: 3 })}
        >
          &bull;
        </button>
        <button
          style={createStyles(6 === actualSlide)}
          onClick={() => updateSlide({ currentSlide: 6 })}
        >
          &bull;
        </button>
        <button
          style={createStyles(7 === actualSlide)}
          onClick={() => updateSlide({ currentSlide: 7 })}
        >
          &bull;
        </button>
      </Flex>
    </Box>
  );
};

export default PropiedadesDesc;
