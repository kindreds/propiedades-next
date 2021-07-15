import React from 'react'
import NextLink from 'next/link'
// import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Stack, Link } from '@chakra-ui/layout'

const DesktopNav = ({ dark }) => {
  // const { pathname } = useRouter()

  return (
    <Stack
      align="center"
      spacing="40px"
      direction={'row'}
      display={{ base: 'none', xl: 'flex' }}
    >
      <NextLink href="/">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Inicio
        </Link>
      </NextLink>
      <NextLink href="/propiedades">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Propiedades
        </Link>
      </NextLink>
      <NextLink href="/asesores">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Asesores
        </Link>
      </NextLink>
      <NextLink href="/solicitud-asesor">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Sé un asesor
        </Link>
      </NextLink>
      <NextLink href="/contacto">
        <Link color={dark ? 'gray.800' : 'white'} mr={2}>
          Contactanos
        </Link>
      </NextLink>

      {/* <Divider orientation="vertical" h="45px" /> */}
    </Stack>
  )
}

DesktopNav.propTypes = {
  dark: PropTypes.bool
}

export default DesktopNav
