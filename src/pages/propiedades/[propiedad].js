import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Stack, HStack, Container, SimpleGrid } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domAnimation } from "framer-motion";

import AsesorCard from "../../components/AsesorCard";
import ProDetails from "../../components/ProDetails";
import PropertiHeader from "../../components/PropertiHeader";
import DetailSlider from "../../components/SliderImage/DetailSlider";

import {
  FaTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { BiPrinter, BiShareAlt } from "react-icons/bi";

import { nativeShare } from "../../helper/nativeShare";
import { fadeInDown, fadeInUp } from "../../motions/fadeInUp";
/* Componentes */

const Contact = dynamic(() => import("../../components/Contact"), {
  ssr: false,
});
const InfoProperti = dynamic(
  () => import("../../components/Section/InfoProperti"),
  {
    ssr: false,
  }
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
        <link
          rel="preload"
          href="/inhouse_1_cp.webp"
          as="image"
          imagesrcset={`${"/inhouse_1_cp.webp"} 1200w,
             ${"/inhouse_1_cp.webp"}?w=200 200w,
             ${"/inhouse_1_cp.webp"}?w=400 400w,
             ${"/inhouse_1_cp.webp"}?w=800 800w,
             ${"/inhouse_1_cp.webp"}?w=1024 1024w,
            `}
        />
        <link
          rel="preload"
          href="/inhouse_2_cp.webp"
          as="image"
          imagesrcset={`${"/inhouse_1_cp.webp"} 1200w,
             ${"/inhouse_2_cp.webp"}?w=200 200w,
             ${"/inhouse_2_cp.webp"}?w=400 400w,
             ${"/inhouse_2_cp.webp"}?w=800 800w,
             ${"/inhouse_2_cp.webp"}?w=1024 1024w,
            `}
        />
        <link
          rel="preload"
          href="/inhouse_3_cp.webp"
          as="image"
          imagesrcset={`${"/inhouse_1_cp.webp"}?q=70 1200w,
             ${"/inhouse_3_cp.webp"}?w=200&q=70 200w,
             ${"/inhouse_3_cp.webp"}?w=400&q=70 400w,
             ${"/inhouse_3_cp.webp"}?w=800&q=70 800w,
             ${"/inhouse_3_cp.webp"}?w=1024&q=70 1024w,
            `}
        />
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
              {load && <InfoProperti />}
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
