import React from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Text,
  Badge,
  HStack,
  Heading,
  Container,
  Stack,
  Flex,
} from '@chakra-ui/layout';
import ReactSlider from 'react-slidy';
import { StarIcon } from '@chakra-ui/icons';
import { GoSettings } from 'react-icons/go';
import { Button, IconButton } from '@chakra-ui/button';
import {
  Tr,
  Td,
  Table,
  Tbody,
  Input,
  Avatar,
  Textarea,
  FormLabel,
  Accordion,
  FormControl,
  AccordionItem,
  AccordionIcon,
  FormHelperText,
  AccordionPanel,
  AccordionButton,
  Img as ImageChakra,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { BiGitCompare, BiHeart, BiPrinter, BiShareAlt } from 'react-icons/bi';

import Navbar from '../../components/Navbar';
import { Image } from '../../components/tools';
import Contact from '../../components/Contact';

const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
  ssr: false,
});

const Propiedad = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const numOfSlidesRaw = useBreakpointValue({
    base: 1,
    ms: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  });

  const numOfSlides = numOfSlidesRaw ?? 3;

  const imagesList = [
    '/casa1_cp.webp',
    '/inhouse2_cp.webp',
    '/inhouse3_cp.webp',
    '/inhouse4_cp.webp',
  ];

  return (
    <Box bg="gray.200" w="100%">
      <Navbar dark={true} />
      <Box w="full" pt="82px">
        <ReactSlider
          showArrows
          infiniteLoop
          keyboardNavigation
          numOfSlides={numOfSlides}
        >
          {imagesList.map((src, i) => (
            <ImageChakra key={i} src={src} objectPosition="50% 50%" />
          ))}
        </ReactSlider>
      </Box>

      <Container
        py={5}
        maxW={{
          base: '99%',
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
        <Text fontSize="lg">S/ 200.000,00</Text>
        <Text fontSize="sm" color="gray.600">
          Av. Coronel Portillo #1088.
        </Text>
        <Box d="flex" alignItems="center" mb={2}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                fontSize="sm"
                key={i}
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {33} Opiniones
          </Box>
        </Box>

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

        <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
          <Heading letterSpacing={1} fontSize="lg" mb={2} fontWeight="semibold">
            Ubicación
          </Heading>

          <Text mb={2} fontSize="sm" color="gray.600">
            Av. Coronel Portillo #1088.
          </Text>

          <Box h="250px" id="mapid">
            <MapWithNoSSR />
          </Box>
        </Box>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
          <Heading letterSpacing={1} fontSize="lg" mb={4}>
            Video de la propiedad
          </Heading>

          <iframe
            src="https://www.youtube.com/embed/d67NNpbhMuk?autoplay=0&mute=0"
            width="100%"
            height="300"
          />
        </Box>

        <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
          <Heading letterSpacing={1} fontSize="lg" mb={1} fontWeight="semibold">
            12 Comentarios
          </Heading>
          <Box d="flex" alignItems="center" mb={5}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  ml={1}
                  fontSize="sm"
                  color={i < 4 ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {33} Opiniones
            </Box>
          </Box>

          <Stack spacing={4}>
            <Box>
              <Flex align="center" mb={2}>
                <Avatar size="lg" mr={5} />
                <Box mb={2}>
                  <Text fontWeight="semibold">Diana Cooper</Text>
                  <Text fontSize="sm" color="gray.500">
                    Marzo 12, 2021
                  </Text>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="sm"
                        color={i < 4 ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Box>
              </Flex>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box>
              <Flex align="center" mb={2}>
                <Avatar size="lg" mr={5} />
                <Box mb={2}>
                  <Text fontWeight="semibold">Jonh Cooper</Text>
                  <Text fontSize="sm" color="gray.500">
                    Marzo 12, 2021
                  </Text>
                  {Array(3)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="sm"
                        color={i < 4 ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Box>
              </Flex>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box>
              <Flex align="center" mb={2}>
                <Avatar size="lg" mr={5} />
                <Box mb={2}>
                  <Text fontWeight="semibold">Daniel Cooper</Text>
                  <Text fontSize="sm" color="gray.500">
                    Marzo 12, 2021
                  </Text>
                  {Array(2)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="sm"
                        color={i < 4 ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Box>
              </Flex>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
          <Heading letterSpacing={1} fontSize="lg" mb={4} fontWeight="semibold">
            Compartenos tu comentario
          </Heading>

          <Stack spacing={4}>
            <FormControl id="first-name" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Correo</FormLabel>
              <Input type="email" />
              <FormHelperText>
                Nosotros nunca compartiremos tu correo.
              </FormHelperText>
            </FormControl>

            <Textarea
              size="sm"
              resize="none"
              placeholder="Escribe tu comentario"
            />

            <Button>Enviar</Button>
          </Stack>
        </Box>
      </Container>
      <Contact isOpen={isOpen} onClose={onClose} />
      <IconButton
        size="lg"
        right={4}
        bottom={4}
        pos="fixed"
        rounded="full"
        colorScheme="red"
        onClick={() => onOpen()}
        icon={<GoSettings fontSize="30px" />}
        display={{ base: 'flex', lg: 'none' }}
      />
    </Box>
  );
};

export default Propiedad;
