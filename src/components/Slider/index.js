import React, { useEffect, useRef, useState } from "react"
import { Icon } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/layout"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Button, IconButton } from "@chakra-ui/button"

import PropertyCard from "../PropertyCard"

const Slider = () => {
  const sliderRef = useRef()
  const [disabled, setDisabled] = useState(false)
  const [widthPadre, setwidthPadre] = useState(0)

  useEffect(() => {
    HandleResize()
    window.addEventListener("resize", HandleResize)
    return () => window.removeEventListener("resize", HandleResize)
  }, [sliderRef])

  function HandleResize() {
    setwidthPadre(sliderRef.current.clientWidth)
  }

  function next() {
    sliderRef.current.scrollLeft += widthPadre
  }

  function prev() {
    sliderRef.current.scrollLeft -= widthPadre
  }

  return (
    <Box pos="relative">
      <Flex
        w="full"
        ref={sliderRef}
        overflow="scroll"
        className="hideScroll"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none"
          },
          scrollBehavior: "smooth"
        }}
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Box
              key={`slider-${i}`}
              maxW={{ base: `${widthPadre}px`, sm: `${widthPadre / 2}px` }}
              minW={{ base: `${widthPadre}px`, sm: `${widthPadre / 2}px` }}
            >
              <PropertyCard i={i + 1} />
            </Box>
          ))}
      </Flex>
      <IconButton
        pos="absolute"
        top={0}
        left={0}
        bottom={0}
        onClick={prev}
        icon={<Icon as={FaChevronLeft} />}
        transform="translate(-10px, 200px)"
        display={{ base: "none", md: "flex" }}
      />
      <IconButton
        pos="absolute"
        top={0}
        right={0}
        bottom={0}
        onClick={next}
        icon={<Icon as={FaChevronRight} />}
        transform="translate(10px, 200px) "
        display={{ base: "none", md: "flex" }}
      />
    </Box>
  )
}
export default Slider
