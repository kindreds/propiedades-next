import React from 'react'
import Head from 'next/head'
// import d from "next/dynamic";
import Image from 'next/image'
import { Avatar } from '@chakra-ui/avatar'
import { Tooltip } from '@chakra-ui/tooltip'
import { IconButton } from '@chakra-ui/button'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Box, Heading, Container, Flex, HStack } from '@chakra-ui/layout'

// import Footer from "../../components/Footer";
import AdvanceSearch from '../../components/AdvanceSearch'
import LastProperties from '../../components/LastProperties'
import PropertiesResult from '../../components/PropertiesResult'

import {
  FaTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'

import client from '../../apollo'
import {
  GetAllUsersDocument as GET_ALL_USERS,
  GetAllPropiedadesDocument as GET_ALL_PROPIEDADES
} from '../../generated/graphql'

export async function getStaticPaths() {
  const {
    data: { GetAllUsers }
  } = await client.query({
    query: GET_ALL_USERS,
    variables: {
      estado: '',
      tipoUsuario: 2
    }
  })

  const users = GetAllUsers.slice(0, 10)

  const paths = users.map((u) => {
    return { params: { asesor: u.alias } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const {
    data: { GetAllPropiedades }
  } = await client.query({
    query: GET_ALL_PROPIEDADES,
    variables: {
      numberPaginate: 10,
      page: 1,
      estado: '',
      destacado: ''
    }
  })

  const {
    data: { GetAllUsers }
  } = await client.query({
    query: GET_ALL_USERS,
    variables: {
      estado: '',
      tipoUsuario: 2
    }
  })

  const asesor = GetAllUsers.find((u) => {
    return u.alias === params.asesor
  })

  return { props: { asesor, propiedades: GetAllPropiedades.data, dark: true } }
}

const AsesorAlias = ({ asesor, propiedades }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Box pos="relative" bg="gray.200" minH="100vh">
        <Head>
          <title>
            Perfil: {asesor.nombres} {asesor.apellidos}
          </title>
        </Head>
        <Box
          w="full"
          h="45vh"
          pos="relative"
          overflow="hidden"
          borderBottomRadius="2xl"
        >
          <Image
            priority
            quality={70}
            layout="fill"
            objectFit="cover"
            alt="Banner Propiedades"
            src="/banner-propiedades.webp"
          />
          <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.6)" />
          <Box
            mx="auto"
            maxW={{
              base: '95%',
              sm: 'container.sm',
              md: 'container.md',
              lg: 'container.lg',
              xl: 'container.xl'
            }}
            h="full"
            as={m.div}
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
          >
            <Flex ml={5} flexDir="column" align="center" sx={{ zIndex: 2 }}>
              <Avatar src={asesor.foto.url} w="200px" h="200px" mb={2} />
              <Heading
                zIndex="2"
                color="gray.100"
                lineHeight="shorter"
                letterSpacing="tight"
                fontWeight="extrabold"
                fontSize={{ base: '3xl', sm: '4xl' }}
              >
                {asesor.nombres} {asesor.apellidos}
              </Heading>
              <HStack>
                <Tooltip label="Compartir en facebook">
                  <IconButton
                    size="lg"
                    colorScheme="facebook"
                    display={{ base: 'none', lg: 'flex' }}
                    icon={<FaFacebookF fontSize="25px" />}
                  />
                </Tooltip>
                <Tooltip label="Compartir en whatsapp">
                  <IconButton
                    size="lg"
                    colorScheme="whatsapp"
                    display={{ base: 'none', lg: 'flex' }}
                    icon={<FaWhatsapp fontSize="25px" />}
                  />
                </Tooltip>
                <Tooltip label="Compartir en Twitter">
                  <IconButton
                    size="lg"
                    colorScheme="twitter"
                    display={{ base: 'none', lg: 'flex' }}
                    icon={<FaTwitter fontSize="25px" />}
                  />
                </Tooltip>
                <Tooltip label="Compartir en Linkedin">
                  <IconButton
                    size="lg"
                    colorScheme="twitter"
                    display={{ base: 'none', lg: 'flex' }}
                    icon={<FaLinkedinIn fontSize="25px" />}
                  />
                </Tooltip>
              </HStack>
            </Flex>
          </Box>
        </Box>

        <Container
          mt={5}
          transform="translateY(-40px)"
          maxW={{
            base: '95%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl'
          }}
        >
          <Flex>
            <m.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
            >
              <AdvanceSearch />
              <LastProperties />
            </m.div>
            <PropertiesResult {...{ propiedades }} />
          </Flex>
        </Container>
        {/* <Footer /> */}
      </Box>
    </LazyMotion>
  )
}

export default AsesorAlias
