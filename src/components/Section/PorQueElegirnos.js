import React from 'react';
import Section from '.';
import Card from '../Card';
import { Flex } from '@chakra-ui/layout';

import { whyChooseUs } from '../../data';

const PorQueElegirnos = () => {
  return (
    <Section>
      <Flex justify="space-evenly" wrap="wrap">
        {whyChooseUs.map((item, i) => (
          <Card key={i} {...item} bg="white" mb={{ base: 6, lg: 0 }} />
        ))}
      </Flex>
    </Section>
  );
};

export default PorQueElegirnos;
