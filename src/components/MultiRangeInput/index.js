import React from "react"
import { Box } from "@chakra-ui/layout"

const MultiInputRange = () => {
  return (
    <Box className="multi-range">
      <input type="range" className="input-left" min="0" max="100" value="25" />
      <input
        min="0"
        max="100"
        value="75"
        type="range"
        className="input-right"
      />

      <Box className="slider" pos="relative" zIndex="1" h={2}>
        <Box
          className="track"
          pos="absolute"
          zIndex="1"
          left={0}
          right={0}
          top={0}
          bottom={0}
          rounded="sm"
          bg="red.300"
        />
        <Box
          className="range"
          pos="absolute"
          zIndex="2"
          left="25%"
          right="25%"
          bottom={0}
          top={0}
          rounded="sm"
          bg="red.700"
        />
        <Box
          className="thumb left"
          pos="absolute"
          left="25%"
          zIndex="3"
          w="30px"
          h="30px"
          bg="red.700"
          rounded="full"
          opacity="0.3"
          transform="translate(-15px, -10px)"
        />
        <Box
          className="thumb right"
          pos="absolute"
          right="25%"
          zIndex="3"
          w="30px"
          h="30px"
          bg="red.700"
          rounded="full"
          opacity="0.3"
          transform="translate(15px, -10px)"
        />
      </Box>
    </Box>
  )
}

export default MultiInputRange
