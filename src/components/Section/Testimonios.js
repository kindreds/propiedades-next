import React, { useState } from "react";
import ReactSlidy from "react-slidy";
import { Box, Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { testimonials } from "../../data";
import { createStyles } from "../../helper/dotStyles";
import TestimonialsCard from "../TestimonialsCard";

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
        infiniteLoop
        showArrows={false}
        keyboardNavigation
        slide={actualSlide}
        numOfSlides={numOfSlides}
        doAfterSlide={updateSlide}
      >
        {testimonials.map((item, i) => (
          <TestimonialsCard key={i} {...item} i={i} actualSlide={actualSlide} />
        ))}
      </ReactSlidy>
      <Flex flex={1} justify="center">
        {Array(testimonials.length + 1)
          .fill(null)
          .map((_, i) => {
            return (
              <button
                key={i}
                style={createStyles(i === actualSlide)}
                onClick={() => updateSlide({ currentSlide: i })}
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
