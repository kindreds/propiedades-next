import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Box, Heading, Link, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';

const Map = () => {
  return (
    <>
      <Box mt={4} bg="white" shadow="lg" rounded="lg" overflow="hidden">
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
          <MapContainer
            zoom={16}
            scrollWheelZoom={false}
            center={[-12.115194, -77.013199]}
            style={{ height: '100%', width: '100%', zIndex: 1 }}
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
      </Box>
      <MapContainer
        zoom={16}
        scrollWheelZoom={false}
        center={[-12.115194, -77.013199]}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
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
    </>
  );
};

export default Map;
