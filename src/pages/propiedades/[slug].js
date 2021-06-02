import React from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Text,
  Badge,
  Stack,
  HStack,
  Heading,
  Container,
  Flex,
  SimpleGrid,
  Link,
} from '@chakra-ui/layout';
import ReactSlider from 'react-slidy';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button, IconButton } from '@chakra-ui/button';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Image, Img as ImageChakra } from '@chakra-ui/image';
import {
  Icon,
  StarIcon,
  PhoneIcon,
  AtSignIcon,
  CheckIcon,
} from '@chakra-ui/icons';
import { BiGitCompare, BiHeart, BiPrinter, BiShareAlt } from 'react-icons/bi';
import {
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/form-control';

import Navbar from '../../components/Navbar';
import { RiWhatsappFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { nativeShare } from '../../helper/nativeShare';

/* Componentes */

const ProDetails = dynamic(() => import('../../components/ProDetails'), {
  ssr: false,
});
const FloorMap = dynamic(() => import('../../components/FloorMap'), {
  ssr: false,
});
const VideoProperti = dynamic(() => import('../../components/VideoProperti'), {
  ssr: false,
});
const CommentArea = dynamic(() => import('../../components/CommentArea'), {
  ssr: false,
});
const Contact = dynamic(() => import('../../components/Contact'), {
  ssr: false,
});
const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
  ssr: false,
});

const Propiedad = () => {
  const { ref: mapNode, inView: mapInView } = useInView({
    rootMargin: '100px',
  });
  const { ref: videoNode, inView: videoInView } = useInView({
    rootMargin: '100px',
  });
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
    '/inhouse_1_cp.webp',
    '/inhouse_2_cp.webp',
    '/inhouse_3_cp.webp',
    '/inhouse_4_cp.webp',
    '/inhouse_5_cp.webp',
    '/inhouse_6_cp.webp',
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
        <Text fontSize="sm" color="gray.600">
          Lima - Lima - San Isidro.
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
          {/* <IconButton
            colorScheme="teal"
            icon={<BiGitCompare fontSize="20px" />}
          />
          <IconButton colorScheme="teal" icon={<BiHeart fontSize="20px" />} /> */}
          <IconButton
            onClick={nativeShare}
            colorScheme="teal"
            icon={<BiShareAlt fontSize="20px" />}
          />
          <IconButton colorScheme="teal" icon={<BiPrinter fontSize="20px" />} />
        </HStack>

        <SimpleGrid
          gap={6}
          templateColumns={{ base: 'minmax(0, 1fr)', lg: '2fr 1fr' }}
        >
          <Box>
            <ProDetails />

            <Box mt={4} px={4} py={6} bg="white" shadow="lg" rounded="lg">
              <Heading
                mb={4}
                fontSize="lg"
                letterSpacing={1}
                fontWeight="semibold"
              >
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

            <Box
              mt={4}
              px={4}
              py={6}
              bg="white"
              shadow="lg"
              rounded="lg"
              ref={mapNode}
            >
              <Heading
                mb={2}
                fontSize="lg"
                letterSpacing={1}
                fontWeight="semibold"
              >
                Ubicación
              </Heading>

              <Text mb={2} fontSize="sm" color="gray.600">
                Av. Coronel Portillo #1088.
              </Text>

              {mapInView && (
                <Box h="250px" id="mapid">
                  <MapWithNoSSR />
                </Box>
              )}
            </Box>
            <FloorMap />
            <div ref={videoNode}>{videoInView && <VideoProperti />}</div>

            <CommentArea />

            <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
              <Heading
                letterSpacing={1}
                fontSize="lg"
                mb={4}
                fontWeight="semibold"
              >
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
          </Box>

          <Box
            mt={4}
            bg="white"
            shadow="lg"
            maxH="485px"
            rounded="lg"
            pos="sticky"
            overflowY="auto"
            overflow="hidden"
            display={{ base: 'none', lg: 'block' }}
            top={{ base: '108px', xl: 5 }}
          >
            <Box mb={4}>
              <Image
                h={64}
                w="full"
                fit="cover"
                alt="avatar"
                objectPosition="center"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />

              <Flex alignItems="center" p={4} mb={4} bg="gray.800">
                <Heading
                  as="h1"
                  fontSize="lg"
                  color="white"
                  fontWeight="semibold"
                >
                  Victoria Diaz (Asesor)
                </Heading>
              </Flex>

              <Flex px={4} alignItems="center" mb={2} color="gray.900">
                <Icon
                  h={6}
                  w={6}
                  mr={1}
                  as={RiWhatsappFill}
                  fill="whatsapp.500"
                />
                <Link
                  px={2}
                  color="blue.600"
                  fontWeight="light"
                  href="https://wa.me/+51999999999"
                >
                  999 999 999
                </Link>
              </Flex>
              <Flex px={4} alignItems="center" mb={2} color="gray.900">
                <Icon as={PhoneIcon} h={5} w={5} mr={2} />
                <Link
                  px={2}
                  color="blue.600"
                  fontWeight="light"
                  href="tel:+51999999999"
                >
                  999 999 999
                </Link>
              </Flex>
              <Flex px={4} alignItems="center" mb={2} color="gray.900">
                <Icon as={AtSignIcon} h={5} w={5} mr={2} />

                <Link
                  href="mailto:vdiaz@example.com"
                  px={2}
                  fontWeight="light"
                  color="blue.600"
                >
                  vdiaz@example.com
                </Link>
              </Flex>
            </Box>
            <Box px={4}>
              <Button w="full" colorScheme="blue">
                Enviar mensaje privado
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
      {isOpen && <Contact isOpen={isOpen} onClose={onClose} />}
      <IconButton
        size="lg"
        right={4}
        bottom={4}
        pos="fixed"
        rounded="full"
        style={{ zIndex: 2 }}
        colorScheme="whatsapp"
        onClick={() => onOpen()}
        icon={<RiWhatsappFill fontSize="30px" />}
        display={{ base: 'flex', xl: 'none' }}
      />
    </Box>
  );
};

export default Propiedad;
