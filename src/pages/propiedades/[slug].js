import React from 'react';
import Image from 'next/image';
import {
  Box,
  Text,
  Badge,
  HStack,
  Heading,
  Divider,
  Container,
} from '@chakra-ui/layout';
import { Tr, Th, Td, Table, Thead, Tbody } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import { IconButton } from '@chakra-ui/button';
import { BiGitCompare, BiHeart, BiPrinter, BiShareAlt } from 'react-icons/bi';
import { Tag } from '@chakra-ui/tag';

const Propiedad = () => {
  return (
    <Box bg="gray.200" w="100%">
      <Navbar dark={true} />
      <Box pt="80px" w="100%" display="flex" justifyContent="center">
        <Image
          width={1200}
          height={600}
          objectFit="cover"
          layout="intrinsic"
          src="/casa1_cp.webp"
        />
      </Box>

      <Container
        py={5}
        maxW={{
          base: '95%',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
      >
        <HStack pb={2}>
          <Badge colorScheme="green">Nuevo</Badge>
          <Badge colorScheme="blue">Venta</Badge>
        </HStack>
        <Heading fontSize="xl" mb={1}>
          Departamento Diamante
        </Heading>
        <Heading fontSize="lg">S/ 200.000,00</Heading>
        <Text fontWeight="100" fontSize="sm">
          Av. Coronel Portillo #1088.
        </Text>

        <HStack py={2}>
          <IconButton
            colorScheme="teal"
            icon={<BiGitCompare fontSize="20px" />}
          />
          <IconButton colorScheme="teal" icon={<BiHeart fontSize="20px" />} />
          <IconButton
            colorScheme="teal"
            icon={<BiShareAlt fontSize="20px" />}
          />
          <IconButton colorScheme="teal" icon={<BiPrinter fontSize="20px" />} />
        </HStack>

        <Box mt={4} p={4} bg="white" rounded="lg" shadow="lg">
          <HStack justify="center">
            <Tag size="md" variant="solid" colorScheme="gray">
              Cuartos: 4
            </Tag>
            <Tag size="md" variant="solid" colorScheme="gray">
              Baños: 4
            </Tag>
            <Tag size="md" variant="solid" colorScheme="gray">
              M&sup2;: 72
            </Tag>
          </HStack>

          <Heading letterSpacing={1} fontSize="xl" my={6}>
            Reseña
          </Heading>

          <Text fontSize="sm">
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer. <br /> <br /> Fully furnished.
            Elegantly appointed condominium unit situated on premier location.
            PS6. The wide entry hall leads to a large living room with dining
            area. This expansive 2 bedroom and 2 renovated marble bathroom
            apartment has great windows. Despite the interior views, the
            apartments Southern and Eastern exposures allow for lovely natural
            light to fill every room. The master suite is surrounded by
            handcrafted milkwork and features incredible walk-in closet and
            storage space. <br /> <br /> The second bedroom is a corner room
            with double windows. The kitchen has fabulous space, new appliances,
            and a laundry area. Other features include rich herringbone floors,
            crown moldings and coffered ceilings throughout the apartment. 1049
            5th Avenue is a classic pre-war building located across from Central
            Park, the reservoir and The Metropolitan Museum. Elegant lobby and
            24 hours doorman. This is a pet-friendly building.
          </Text>

          <Divider borderColor="gray.300" mt={6} />

          <Heading letterSpacing={1} fontSize="xl" mt={6} mb={4}>
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
      </Container>
    </Box>
  );
};

export default Propiedad;
