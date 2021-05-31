import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slidy';
import { Box } from '@chakra-ui/layout';

import { Image } from '../tools';

const SliderImage = ({ images = [], objectFit, ...props }) => {
  return (
    <ReactSlider showArrows infiniteLoop keyboardNavigation>
      {images.map((url, i) => (
        <Box key={i} {...props}>
          <Image key={i} src={url} layout="fill" objectFit={objectFit} />
        </Box>
      ))}
    </ReactSlider>
  );
};

SliderImage.propTypes = {
  objectFit: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default SliderImage;
