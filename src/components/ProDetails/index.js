import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { Table, Tbody, Tr, Td } from '@chakra-ui/table';
import Icon from '@chakra-ui/icon';
import { CheckIcon } from '@chakra-ui/icons';

const ProDetails = () => {
  return (
    <>
      <Box mt={4} p={4} bg="white" rounded="lg" shadow="lg">
        <Heading letterSpacing={1} fontSize="xl" mb={4} fontWeight="semibold">
          Reseña
        </Heading>

        <Text fontSize="sm">
          Evans Tower very high demand corner junior one bedroom plus a large
          balcony boasting full open NYC views. You need to see the views to
          believe them. Mint condition with new hardwood floors. Lots of closets
          plus washer and dryer. <br /> <br /> Fully furnished. Elegantly
          appointed condominium unit situated on premier location. PS6. The wide
          entry hall leads to a large living room with dining area. This
          expansive 2 bedroom and 2 renovated marble bathroom apartment has
          great windows. Despite the interior views, the apartments Southern and
          Eastern exposures allow for lovely natural light to fill every room.
          The master suite is surrounded by handcrafted milkwork and features
          incredible walk-in closet and storage space. <br /> <br /> The second
          bedroom is a corner room with double windows. The kitchen has fabulous
          space, new appliances, and a laundry area. Other features include rich
          herringbone floors, crown moldings and coffered ceilings throughout
          the apartment. 1049 5th Avenue is a classic pre-war building located
          across from Central Park, the reservoir and The Metropolitan Museum.
          Elegant lobby and 24 hours doorman. This is a pet-friendly building.
        </Text>
      </Box>
      <Box mt={4} p={4} bg="white" rounded="lg" shadow="lg">
        <Heading
          letterSpacing={1}
          fontSize="xl"
          mt={2}
          mb={4}
          fontWeight="semibold"
        >
          Detalles
        </Heading>

        <Table size="sm">
          <Tbody>
            <Tr>
              <Td>Hash</Td>
              <Td fontWeight="500">HZ996846164ASDC</Td>
            </Tr>
            <Tr>
              <Td>Dimensiones</Td>
              <Td fontWeight="500">5x20x15</Td>
            </Tr>
            <Tr>
              <Td>Area contruida</Td>
              <Td fontWeight="500">300 m2</Td>
            </Tr>
            <Tr>
              <Td>Cuartos</Td>
              <Td fontWeight="500">4</Td>
            </Tr>
            <Tr>
              <Td>Baños</Td>
              <Td fontWeight="500">4</Td>
            </Tr>
            <Tr>
              <Td>Precio</Td>
              <Td fontWeight="500">S/ 200,000.00</Td>
            </Tr>
            <Tr>
              <Td>Año de contrucción</Td>
              <Td fontWeight="500">1992</Td>
            </Tr>
            <Tr>
              <Td>Estado de la propiedad</Td>
              <Td fontWeight="500">Venta</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box mt={4} px={4} py={6} bg="white" shadow="lg" rounded="lg">
        <Heading mb={4} fontSize="lg" letterSpacing={1} fontWeight="semibold">
          Ambientes
        </Heading>

        <SimpleGrid
          ml={4}
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Ático</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Lavaplatos</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Chimenea</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Jardin</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Gimnasio</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Techos Altos</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Microonda</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Patio</Text>
          </Flex>
          <Flex aling="center">
            <Icon mr={2} as={CheckIcon} color="red.400" />
            <Text>Piscina</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProDetails;
