import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Box, Flex } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = ({ children }) => {
  const IPS = useBreakpointValue({ base: 1, ms: 1, sm: 2, md: 2, lg: 3 });

  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: IPS,
    slidesToScroll: IPS,
  };

  return (
    <>
      <Box>
        <Flex my={{ base: 8, xl: 10 }} w="100%" justify="center">
          <Box w={{ base: '100vw' }} maxW="1200px" maxH="500px">
            <Slider {...settings}>{children}</Slider>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

SliderCard.propTypes = {
  children: PropTypes.node,
};

export default SliderCard;
