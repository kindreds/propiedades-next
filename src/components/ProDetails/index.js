import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { Table, Tbody, Tr, Td } from '@chakra-ui/table';

const ProDetails = () => {
  return (
    <Box mt={4} p={4} bg="white" rounded="lg" shadow="lg">
      <Box
        fontSize="sm"
        color="gray.500"
        letterSpacing="wide"
        fontWeight="semibold"
        textTransform="uppercase"
      >
        {4} Cuartos &bull; {4} Baños &bull; {72} M&sup2;
      </Box>

      <Heading letterSpacing={1} fontSize="xl" my={4} fontWeight="semibold">
        Reseña
      </Heading>

      <Text fontSize="sm">
        Evans Tower very high demand corner junior one bedroom plus a large
        balcony boasting full open NYC views. You need to see the views to
        believe them. Mint condition with new hardwood floors. Lots of closets
        plus washer and dryer. <br /> <br /> Fully furnished. Elegantly
        appointed condominium unit situated on premier location. PS6. The wide
        entry hall leads to a large living room with dining area. This expansive
        2 bedroom and 2 renovated marble bathroom apartment has great windows.
        Despite the interior views, the apartments Southern and Eastern
        exposures allow for lovely natural light to fill every room. The master
        suite is surrounded by handcrafted milkwork and features incredible
        walk-in closet and storage space. <br /> <br /> The second bedroom is a
        corner room with double windows. The kitchen has fabulous space, new
        appliances, and a laundry area. Other features include rich herringbone
        floors, crown moldings and coffered ceilings throughout the apartment.
        1049 5th Avenue is a classic pre-war building located across from
        Central Park, the reservoir and The Metropolitan Museum. Elegant lobby
        and 24 hours doorman. This is a pet-friendly building.
      </Text>

      <Heading
        letterSpacing={1}
        fontSize="xl"
        mt={6}
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
  );
};

export default ProDetails;
