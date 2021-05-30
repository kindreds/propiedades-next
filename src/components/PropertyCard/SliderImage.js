import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slidy';
import { Box } from '@chakra-ui/layout';

import { Image } from '../tools';

const SliderImage = ({ images = [], ...props }) => {
  return (
    <ReactSlider showArrows infiniteLoop keyboardNavigation>
      {images.map((url, i) => (
        <Box key={i} {...props}>
          <Image key={i} src={url} layout="fill" />
        </Box>
      ))}
    </ReactSlider>
  );
};

SliderImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default SliderImage;
