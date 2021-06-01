import React from 'react';
import Image from 'next/image';
import { Box, Heading, Text } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion';

const FloorMap = () => {
  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={4} fontWeight="semibold">
        Mapa de los pisos
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text>Primer Piso</Text>
                <Box
                  fontSize="sm"
                  color="gray.500"
                  letterSpacing="wide"
                  fontWeight="semibold"
                  textTransform="uppercase"
                >
                  {1} Cuartos &bull; {1} Baños &bull; {72} M&sup2;
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box w="full">
              <Image src="/floor1.jpg" width="250px" height="250px" />
            </Box>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text>Segundo Piso</Text>
                <Box
                  fontSize="sm"
                  color="gray.500"
                  letterSpacing="wide"
                  fontWeight="semibold"
                  textTransform="uppercase"
                >
                  {3} Cuartos &bull; {3} Baños &bull; {72} M&sup2;
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box w="full">
              <Image src="/floor2.jpg" width="250px" height="250px" />
            </Box>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FloorMap;
