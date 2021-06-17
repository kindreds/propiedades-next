import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useInView } from "react-intersection-observer";
import { Box, Heading, Link, Text } from "@chakra-ui/layout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
  const { ref, inView } = useInView();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (inView) setLoad(true);
  }, [inView]);

  return (
    <>
      <Box
        ref={ref}
        mt={4}
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

        {load && (
          <Box h="400px" id="mapid">
            <MapContainer
              zoom={16}
              scrollWheelZoom={false}
              center={[-12.115194, -77.013199]}
              style={{ height: "100%", width: "100%", zIndex: 1 }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[-12.115194, -77.013199]}
                draggable={true}
                animate={true}
              >
                <Popup>Hey ! I live here</Popup>
              </Marker>
            </MapContainer>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Map;
