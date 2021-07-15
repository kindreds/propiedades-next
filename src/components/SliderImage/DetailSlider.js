import React, { useState } from 'react'
// import Image from "next/image";
import Icon from '@chakra-ui/icon'
import ReactSlider from 'react-slidy'
import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { useBreakpointValue } from '@chakra-ui/media-query'

import { GoPrimitiveDot } from 'react-icons/go'

const initialState = {
  base: 1,
  ms: 1,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 3
}

const DetailSlider = ({ galeria }) => {
  const [actualSlide, setActualSlide] = useState(0)
  const numOfSlidesRaw = useBreakpointValue(initialState)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  const numOfSlides = numOfSlidesRaw ?? 3

  // const imagesList = [
  //   '/inhouse_1_cp.webp',
  //   '/inhouse_2_cp.webp',
  //   '/inhouse_3_cp.webp',
  //   '/inhouse_4_cp.webp',
  //   '/inhouse_5_cp.webp',
  //   '/inhouse_6_cp.webp'
  // ]

  return (
    <>
      <ReactSlider
        showArrows
        infiniteLoop
        keyboardNavigation
        slide={actualSlide}
        lazyLoadSlider={!!0}
        numOfSlides={numOfSlides}
        doAfterSlide={updateSlide}
      >
        {galeria.map(({ id, url, descripcion }) => (
          <img key={id} alt={descripcion} src={`${url}?q=70`} />
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
        {galeria.map((_, index) => {
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
          )
        })}
      </Box>
    </>
  )
}

export default DetailSlider
