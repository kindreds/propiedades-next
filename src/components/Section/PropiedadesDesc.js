import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ReactSlidy from 'react-slidy'
import { Box, Flex } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'

import PropertyCard from '../PropertyCard'
import { createStyles } from '../../helper/dotStyles'

import { useGetAllPropiedadesQuery } from '../../generated/graphql'

const initialsBreaks = {
  base: 1,
  ms: 1,
  sm: 1,
  md: 2,
  lg: 3
}

const PropiedadesDesc = ({ breakpoints = initialsBreaks, maxW = '1200px' }) => {
  const [slides, setSlides] = useState(1)
  const [actualSlide, setActualSlide] = useState(0)
  const numOfSlides = useBreakpointValue(breakpoints)

  const { data } = useGetAllPropiedadesQuery({
    variables: {
      page: 1,
      estado: '',
      destacado: '',
      numberPaginate: 12
    }
  })

  const propiedades = data ? data.GetAllPropiedades.data : []

  useEffect(() => {
    if (numOfSlides) {
      setSlides(numOfSlides)
      updateSlide({ currentSlide: 0 })
    }
  }, [numOfSlides])

  const updateSlide = ({ currentSlide }) => setActualSlide(currentSlide)

  return (
    <Box mt={5} mx="auto" maxW={maxW}>
      <ReactSlidy
        keyboardNavigation
        slide={actualSlide}
        numOfSlides={slides}
        doAfterSlide={updateSlide}
      >
        {propiedades.map((p) => (
          <PropertyCard key={p.propiedadId} p={p} />
        ))}
      </ReactSlidy>
      <Flex flex={1} justify="center">
        {Array(propiedades.length)
          .fill(null)
          .map((_, i) => {
            return (
              <button
                key={i}
                style={createStyles(i === actualSlide)}
                onClick={() => updateSlide({ currentSlide: i })}
              >
                &bull;
              </button>
            )
          })}
      </Flex>
    </Box>
  )
}

PropiedadesDesc.propTypes = {
  maxW: PropTypes.string,
  breakpoints: PropTypes.object,
  propiedades: PropTypes.arrayOf(PropTypes.object)
}

export default PropiedadesDesc
