import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { FaList } from 'react-icons/fa'
import { GoSettings } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import { Tooltip } from '@chakra-ui/tooltip'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Container } from '@chakra-ui/layout'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/breadcrumb'
import { useMediaQuery } from '@chakra-ui/media-query'
import { m, LazyMotion, domAnimation } from 'framer-motion'

// components
import Footer from '../../components/Footer'
import AdvanceSearch from '../../components/AdvanceSearch'
import LastProperties from '../../components/LastProperties'
import PropertiesResult from '../../components/PropertiesResult'
import AdvanceSearchDrawer from '../../components/AdvanceSearch/AdvanceSearchDrawer'

import client from '../../apollo'
import { GetAllPropiedadesDocument as GET_ALL_PROPIEDADES } from '../../generated/graphql'

export async function getStaticProps() {
  const {
    data: { GetAllPropiedades }
  } = await client.query({
    query: GET_ALL_PROPIEDADES,
    variables: {
      page: 1,
      estado: '',
      destacado: '',
      numberPaginate: 10
    }
  })

  return {
    props: {
      dark: true,
      propiedades: GetAllPropiedades.data,
      NroItems: GetAllPropiedades.NroItems
    }
  }
}

const Propiedades = ({ propiedades }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [is1024px] = useMediaQuery('(min-width: 1024px)')

  return (
    <LazyMotion features={domAnimation}>
      <Box w="full" bg="gray.200">
        <Head>
          <title>Propiedades</title>
        </Head>
        <Box
          pos="relative"
          w="full"
          h="40vh"
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
        </Box>
        <Container
          pb={10}
          transform={{ base: 'translateY(-100px)', lg: 'translateY(-150px)' }}
          maxW={{
            base: '95%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl'
          }}
        >
          {is1024px && (
            <Breadcrumb
              mb={5}
              as={m.div}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              spacing="8px"
              display={{ base: 'none', lg: 'block' }}
              separator={<ChevronRightIcon color="gray.100" fontSize="25px" />}
            >
              <BreadcrumbItem>
                <NextLink href="/">
                  <BreadcrumbLink
                    fontWeight="light"
                    fontSize="lg"
                    color="white"
                    href="#"
                  >
                    Inicio
                  </BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  fontWeight="light"
                  fontSize="lg"
                  color="white"
                  href="#"
                >
                  Propiedades
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          )}

          <Flex mb={5} align="center">
            <Heading
              flex={1}
              as={is1024px && m.h1}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
              color="gray.100"
              lineHeight="shorter"
              letterSpacing="tight"
              fontWeight="extrabold"
              fontSize={{ base: '3xl', sm: '4xl' }}
            >
              Propiedades
            </Heading>
            <Tooltip
              label="Listado"
              aria-label="Boton para cambiar presentacion como lista."
            >
              <IconButton colorScheme="red" mr={4} icon={<FaList />} />
            </Tooltip>
            <Tooltip
              label="Galeria"
              aria-label="Boton para cambiar presentacion como galeria."
            >
              <IconButton colorScheme="red" icon={<BsGridFill />} />
            </Tooltip>
          </Flex>
          <Flex mt={5}>
            {is1024px && (
              <Box
                as={m.div}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
              >
                <AdvanceSearch />
                <LastProperties />
              </Box>
            )}
            <PropertiesResult {...{ propiedades }} />
          </Flex>
        </Container>
        <Footer />
        {!is1024px && (
          <>
            <AdvanceSearchDrawer isOpen={isOpen} onClose={onClose} />
            <IconButton
              size="lg"
              right={4}
              bottom={4}
              pos="fixed"
              rounded="full"
              colorScheme="red"
              onClick={() => onOpen()}
              icon={<GoSettings fontSize="30px" />}
              display={{ base: 'flex', xl: 'none' }}
            />
          </>
        )}
      </Box>
    </LazyMotion>
  )
}

export default Propiedades
