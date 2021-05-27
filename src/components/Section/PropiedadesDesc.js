import React from 'react';
// import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/layout';
import PropertyCard from '../PropertyCard';
import { chakra } from '@chakra-ui/system';
import { FixedSizeList } from 'react-window';
import { useBreakpointValue } from '@chakra-ui/media-query';

const props = [
  'height',
  'width',
  'itemCount',
  'itemSize',
  'layout',
  'children',
];

const List = chakra(FixedSizeList, {
  shouldForwardProp: (prop) => props.includes(prop),
});

const PropiedadesDesc = () => {
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
    <>
      <Box py={10}>
        <List
          mx="auto"
          height={550}
          itemCount={10}
          itemSize={((100 / itemInView) * width) / 100}
          layout="horizontal"
          width={width ?? 300}
        >
          {({ style, index }) => (
            <Box style={style} w="100%">
              <PropertyCard i={index} />
            </Box>
          )}
        </List>
      </Box>
    </>
  );
};

export default PropiedadesDesc;
