import React from "react"
import { Box, Heading } from "@chakra-ui/layout"

import Map from "../../components/Map"
import Slider from "../../components/Slider"
import FloorMap from "../../components/FloorMap"
import VideoProperti from "../../components/VideoProperti"
import CommentForm from "../../components/CommentArea/CommentForm"

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
        <Box mt={5}>
          <Slider />
        </Box>
      </Box>
      <div id="asesor_msg">
        <CommentForm />
      </div>
    </>
  )
}

export default InfoProperti
