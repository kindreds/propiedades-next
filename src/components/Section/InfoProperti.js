import React from "react";
import { Box, Heading } from "@chakra-ui/layout";

import Map from "../../components/Map";
import FloorMap from "../../components/FloorMap";
import VideoProperti from "../../components/VideoProperti";
import CommentForm from "../../components/CommentArea/CommentForm";
import PropiedadesDesc from "../../components/Section/PropiedadesDesc";

const InfoProperti = () => {
  return (
    <>
      <FloorMap />
      <Map />
      <VideoProperti />
      <Box mt={10}>
        <Heading mb={2} fontSize="lg" letterSpacing={1} fontWeight="semibold">
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
  );
};

export default InfoProperti;
