import React, { useEffect, useState } from "react";
import d from "next/dynamic";
import NextLink from "next/link";
import { useInView } from "react-intersection-observer";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";

const MapWithSsr = d(() => import("./MapWithSsr"), { ssr: false });

const Map = () => {
  const { ref, inView } = useInView();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (inView) setLoad(true);
  }, [inView]);

  return (
    <>
      <Box
        mt={4}
        ref={ref}
        bg="white"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box p={4}>
          <Heading mb={2} fontSize="lg" letterSpacing={1} fontWeight="semibold">
            Ubicación
          </Heading>

          <Text color="gray.600">Av. Coronel Portillo #1088.</Text>
          <NextLink href="/propiedades">
            <Link color="blue.500">Lima - Lima - San Isidro.</Link>
          </NextLink>
        </Box>

        <Box h="400px" id="mapid">
          {load && <MapWithSsr />}
        </Box>
      </Box>
    </>
  );
};

export default Map;
