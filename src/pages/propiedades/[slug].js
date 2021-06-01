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
} from '@chakra-ui/layout';
import ReactSlider from 'react-slidy';
import { Input } from '@chakra-ui/input';
import { GoSettings } from 'react-icons/go';
import { StarIcon } from '@chakra-ui/icons';
import { Textarea } from '@chakra-ui/textarea';
import { useDisclosure } from '@chakra-ui/hooks';
import { Img as ImageChakra } from '@chakra-ui/image';
import { Button, IconButton } from '@chakra-ui/button';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { BiGitCompare, BiHeart, BiPrinter, BiShareAlt } from 'react-icons/bi';
import {
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/form-control';

import Navbar from '../../components/Navbar';
import { useInView } from 'react-intersection-observer';

/* Componentes */

const ProDetails = dynamic(() => import('../../components/ProDetails'), {
  ssr: false,
});
const FloorMap = dynamic(() => import('../../components/FloorMap'), {
  ssr: false,
});
const VideoProperti = dynamic(() => import('../../components/FloorMap'), {
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

        <ProDetails />

        <Box
          ref={mapNode}
          mt={4}
          px={4}
          py={6}
          bg="white"
          rounded="lg"
          shadow="lg"
        >
          <Heading letterSpacing={1} fontSize="lg" mb={2} fontWeight="semibold">
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
      {isOpen && <Contact isOpen={isOpen} onClose={onClose} />}
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
