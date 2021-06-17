import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactSlidy from "react-slidy";
import PropertyCard from "../PropertyCard";
import { Box, Flex } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { createStyles, numOfDots } from "../../helper/dotStyles";
import { motion } from "framer-motion";

const initialState = {
  base: 1,
  ms: 1,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 3,
};

const PropiedadesDesc = ({ breakpoints = initialState, maxW = "1200px" }) => {
  const [timer, setTimer] = useState(0);
  const [actualSlide, setActualSlide] = useState(0);
  const numOfSlidesRaw = useBreakpointValue(breakpoints);

  const SLIDES = Array(10).fill(null);
  const numOfSlides = numOfSlidesRaw ?? 3;

  useEffect(() => {
    if (numOfSlidesRaw) setTimer(0);
    return () => clearInterval(timer);
  }, [numOfSlidesRaw]);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  const play = () => {
    // return setInterval(() => {
    //   setActualSlide((state) => {
    //     if (state + 2 >= SLIDES.length) return 0;
    //     return state + numOfSlides;
    //   });
    // }, 5000);
  };

  const reset = () => {
    clearInterval(timer);
  };

  return (
    <Box exit={{ opacity: 0 }} mt={5} mx="auto" maxW={maxW}>
      <ReactSlidy
        showArrows={false}
        keyboardNavigation
        slide={actualSlide}
        numOfSlides={numOfSlides}
        doAfterSlide={updateSlide}
      >
        {SLIDES.map((_, i) => (
          <PropertyCard
            key={i}
            i={i + 1}
            onMouseEnter={() => reset()}
            onMouseLeave={() => setTimer(play())}
          />
        ))}
      </ReactSlidy>
      <Flex flex={1} justify="center">
        {Array(numOfDots({ length: SLIDES.length, numOfSlides }))
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

PropiedadesDesc.propTypes = {
  maxW: PropTypes.string,
  breakpoints: PropTypes.object,
};

export default PropiedadesDesc;
