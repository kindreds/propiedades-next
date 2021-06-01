import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slidy';
import { Box, Link } from '@chakra-ui/layout';

import { Image } from '../tools';

const SliderImage = ({ images = [], ...props }) => {
  return (
    <ReactSlider showArrows infiniteLoop keyboardNavigation>
      {images.map((url, i) => (
        <Box key={i} {...props}>
          <NextLink href="/propiedades/1">
            <Link fontSize="sm" color="blue.500" textDecorationLine="underline">
              <Image key={i} src={url} layout="fill" />
            </Link>
          </NextLink>
        </Box>
      ))}
    </ReactSlider>
  );
};

SliderImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default SliderImage;
