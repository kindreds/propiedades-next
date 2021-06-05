import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ReactSlider from 'react-slidy';
import { BsChatFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Tooltip } from '@chakra-ui/tooltip';
import { RiWhatsappFill } from 'react-icons/ri';
import { useDisclosure } from '@chakra-ui/hooks';
import { Img as ImageChakra } from '@chakra-ui/image';
import { BiPrinter, BiShareAlt } from 'react-icons/bi';
import { IconButton } from '@chakra-ui/button';
import { useInView } from 'react-intersection-observer';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Box, Stack, HStack, Container, SimpleGrid } from '@chakra-ui/layout';
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import AsesorCard from '../../components/AsesorCard';
import PropertiHeader from '../../components/PropertiHeader';
import CommentForm from '../../components/CommentArea/CommentForm';

import { nativeShare } from '../../helper/nativeShare';
import Icon from '@chakra-ui/icon';

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
// const CommentArea = dynamic(() => import('../../components/CommentArea'), {
//   ssr: false,
// });
const Contact = dynamic(() => import('../../components/Contact'), {
  ssr: false,
});
const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
});

const Propiedad = () => {
  const { ref: socialRef, inView: SocialInView } = useInView();
  const { ref: mapNode, inView: mapInView } = useInView({
    rootMargin: '200px',
  });
  const { ref: videoNode, inView: videoInView } = useInView({
    rootMargin: '200px',
  });

  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
  const numOfSlidesRaw = useBreakpointValue({
    base: 1,
    ms: 1,
    sm: 2,
    md: 2,
    lg: 2,
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
    <>
      <Box bg="gray.200" w="100%">
        <Navbar dark={true} />
        <Box w="full" pt="82px">
          <ReactSlider
            showArrows
            infiniteLoop
            keyboardNavigation
            slide={actualSlide}
            numOfSlides={numOfSlides}
            doAfterSlide={updateSlide}
          >
            {imagesList.map((src, i) => (
              <ImageChakra key={i} src={src} objectPosition="50% 50%" />
            ))}
          </ReactSlider>
          <Box
            pt={2}
            pb={5}
            w="full"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            {imagesList.map((_, index) => {
              return (
                <IconButton
                  key={index}
                  rounded="full"
                  variant="unstyled"
                  sx={{ outline: 'none', border: 'none' }}
                  opacity={index === actualSlide ? 1 : 0.3}
                  icon={<Icon as={GoPrimitiveDot} fontSize="25px" mt="auto" />}
                  onClick={() => updateSlide({ currentSlide: index })}
                />
              );
            })}
          </Box>
        </Box>

        <Container
          pb={5}
          maxW={{
            base: '99%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl',
          }}
        >
          <SimpleGrid
            gap={6}
            templateColumns={{ base: 'minmax(0, 1fr)', lg: '2fr 1fr' }}
          >
            <Box>
              <PropertiHeader socialRef={socialRef} />
              <ProDetails />
              <FloorMap />
              <div ref={mapNode}>{mapInView && <Map />}</div>
              <div ref={videoNode}>{videoInView && <VideoProperti />}</div>
              <CommentForm />
            </Box>
            <Box display={{ base: 'none', lg: 'block' }}>
              <Box pos="sticky" top={{ base: '100px', xl: 4 }}>
                <AsesorCard simple />
                {!SocialInView && (
                  <HStack sx={{ zIndex: 4 }}>
                    <IconButton
                      size="lg"
                      variant="outline"
                      colorScheme="teal"
                      icon={<BsChatFill />}
                      display={{ base: 'none', lg: 'flex' }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      onClick={nativeShare}
                      icon={<BiShareAlt fontSize="20px" />}
                      display={{ base: 'flex', lg: 'none' }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      icon={<BiPrinter fontSize="20px" />}
                      display={{ base: 'flex', lg: 'none' }}
                    />
                    <Tooltip label="Compartir en facebook">
                      <IconButton
                        size="lg"
                        colorScheme="facebook"
                        display={{ base: 'none', lg: 'flex' }}
                        icon={<FaFacebookF fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en whatsapp">
                      <IconButton
                        size="lg"
                        colorScheme="whatsapp"
                        display={{ base: 'none', lg: 'flex' }}
                        icon={<FaWhatsapp fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en Twitter">
                      <IconButton
                        size="lg"
                        colorScheme="twitter"
                        display={{ base: 'none', lg: 'flex' }}
                        icon={<FaTwitter fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en Linkedin">
                      <IconButton
                        size="lg"
                        colorScheme="twitter"
                        display={{ base: 'none', lg: 'flex' }}
                        icon={<FaLinkedinIn fontSize="25px" />}
                      />
                    </Tooltip>
                  </HStack>
                )}
              </Box>
            </Box>
          </SimpleGrid>
        </Container>

        {isOpen && <Contact isOpen={isOpen} onClose={onClose} />}

        <Stack right={4} bottom={4} pos="fixed" style={{ zIndex: 2 }}>
          <IconButton
            size="lg"
            rounded="full"
            colorScheme="teal"
            onClick={nativeShare}
            icon={<BiShareAlt fontSize="25px" />}
            display={{ base: !SocialInView ? 'flex' : 'none', lg: 'none' }}
          />
          <IconButton
            size="lg"
            rounded="full"
            colorScheme="whatsapp"
            onClick={() => onOpen()}
            icon={<RiWhatsappFill fontSize="30px" />}
            display={{ base: 'flex', lg: 'none' }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Propiedad;
