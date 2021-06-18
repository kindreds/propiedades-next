import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useInView } from "react-intersection-observer";

import AsesorCard from "../../components/AsesorCard";
import PropertiHeader from "../../components/PropertiHeader";
import CommentForm from "../../components/CommentArea/CommentForm";
import PropiedadesDesc from "../../components/Section/PropiedadesDesc";

import { nativeShare } from "../../helper/nativeShare";

import {
  FaTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { BiPrinter, BiShareAlt } from "react-icons/bi";
import { useMediaQuery } from "@chakra-ui/media-query";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { fadeInDown, fadeInUp } from "../../motions/fadeInUp";
/* Componentes */

const Map = dynamic(() => import("../../components/Map"), { ssr: false });
const Contact = dynamic(() => import("../../components/Contact"), {
  ssr: false,
});
const FloorMap = dynamic(() => import("../../components/FloorMap"), {
  ssr: false,
});
const ProDetails = dynamic(() => import("../../components/ProDetails"), {
  ssr: false,
});
const VideoProperti = dynamic(() => import("../../components/VideoProperti"), {
  ssr: false,
});
const DetailSlider = dynamic(
  () => import("../../components/SliderImage/DetailSlider"),
  { ssr: false }
);

const Propiedad = () => {
  const [load, setLoad] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [is1024px] = useMediaQuery("(min-width: 1024px)");
  const { ref: socialRef, inView: SocialInView } = useInView();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const ScrollToContact = () => {
    const el = document.getElementById("asesor_msg");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Departamento Diamante</title>
        <link rel="preload" href="/inhouse_1_cp.webp" as="image" />
        <link rel="preload" href="/inhouse_2_cp.webp" as="image" />
        <link rel="preload" href="/inhouse_3_cp.webp" as="image" />
      </Head>

      <Box bg="gray.200" w="100%">
        <Box
          w="full"
          as={m.div}
          initial="initial"
          animate="animate"
          variants={fadeInDown}
        >
          <DetailSlider />
        </Box>

        <Container
          pb={5}
          maxW={{
            base: "99%",
            sm: "container.sm",
            md: "90%",
            lg: "container.xl",
            xl: "container.xl",
          }}
        >
          <SimpleGrid
            gap={6}
            templateColumns={{
              base: "minmax(0, 1fr)",
              lg: "minmax(0, 1fr) 350px",
            }}
          >
            <Box>
              <m.div initial="initial" animate="animate" variants={fadeInUp}>
                <PropertiHeader
                  socialRef={socialRef}
                  ScrollToContact={ScrollToContact}
                />
                <ProDetails />
              </m.div>
              {load && (
                <>
                  <FloorMap />
                  <Map />
                  <VideoProperti />
                  <Box mt={10}>
                    <Heading
                      mb={2}
                      fontSize="lg"
                      letterSpacing={1}
                      fontWeight="semibold"
                    >
                      Propiedades Similares
                    </Heading>
                    <PropiedadesDesc
                      maxW="816px"
                      breakpoints={{
                        base: 1,
                        ms: 1,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                      }}
                    />
                  </Box>
                  <div id="asesor_msg">
                    <CommentForm />
                  </div>
                </>
              )}
            </Box>
            <Box display={{ base: "none", lg: "block" }}>
              <Box pos="sticky" top={{ base: "100px" }}>
                <m.div initial="initial" animate="animate" variants={fadeInUp}>
                  <AsesorCard simple />
                </m.div>
                {!SocialInView && (
                  <HStack sx={{ zIndex: 4 }}>
                    <IconButton
                      size="lg"
                      variant="outline"
                      colorScheme="teal"
                      icon={<BsChatFill />}
                      onClick={ScrollToContact}
                      display={{ base: "none", lg: "flex" }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      onClick={nativeShare}
                      icon={<BiShareAlt fontSize="20px" />}
                      display={{ base: "flex", lg: "none" }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      icon={<BiPrinter fontSize="20px" />}
                      display={{ base: "flex", lg: "none" }}
                    />
                    <Tooltip label="Compartir en facebook">
                      <IconButton
                        size="lg"
                        colorScheme="facebook"
                        display={{ base: "none", lg: "flex" }}
                        icon={<FaFacebookF fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en whatsapp">
                      <IconButton
                        size="lg"
                        colorScheme="whatsapp"
                        display={{ base: "none", lg: "flex" }}
                        icon={<FaWhatsapp fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en Twitter">
                      <IconButton
                        size="lg"
                        colorScheme="twitter"
                        display={{ base: "none", lg: "flex" }}
                        icon={<FaTwitter fontSize="25px" />}
                      />
                    </Tooltip>
                    <Tooltip label="Compartir en Linkedin">
                      <IconButton
                        size="lg"
                        colorScheme="twitter"
                        display={{ base: "none", lg: "flex" }}
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

        {!is1024px && (
          <Stack right={4} bottom={4} pos="fixed" style={{ zIndex: 2 }}>
            <IconButton
              size="lg"
              rounded="full"
              colorScheme="teal"
              onClick={nativeShare}
              icon={<BiShareAlt fontSize="25px" />}
              display={{ base: !SocialInView ? "flex" : "none", lg: "none" }}
            />
            <IconButton
              size="lg"
              rounded="full"
              colorScheme="whatsapp"
              onClick={() => onOpen()}
              icon={<RiWhatsappFill fontSize="30px" />}
              display={{ base: "flex", lg: "none" }}
            />
          </Stack>
        )}
      </Box>
    </LazyMotion>
  );
};

Propiedad.getInitialProps = () => {
  return { dark: true };
};

export default Propiedad;
