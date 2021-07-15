import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { Tooltip } from '@chakra-ui/tooltip'
import { IconButton } from '@chakra-ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/breadcrumb'
import { Box, Flex, Heading, Container } from '@chakra-ui/layout'

import { FaList } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useMediaQuery } from '@chakra-ui/media-query'
import { m, LazyMotion, domAnimation } from 'framer-motion'

import Footer from '../../components/Footer'
import Asesores from '../../components/AsesoresList'
import LastProperties from '../../components/LastProperties'
import AdvanceSearchAsesor from '../../components/AdvanceSearch/AdvanceSearchAsesor'

import { useGetBusquedaAsesoresQuery } from '../../generated/graphql'

const SearchAsesores = () => {
  const [is1024px] = useMediaQuery('(min-width: 1024px)')
  const [variables, setVariables] = useState({
    page: 1,
    asesor: '',
    distrito: '',
    provincia: '',
    departamento: '',
    numberPaginate: 10,
    orden: 'desc'
  })

  const { data } = useGetBusquedaAsesoresQuery({
    variables,
    fetchPolicy: 'network-only'
  })

  const asesores = data ? data.GetBusquedaAsesores.data : []

  return (
    <LazyMotion features={domAnimation}>
      <Box pos="relative" bg="gray.200" minH="100vh">
        <Head>
          <title>Asesores</title>
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
            objectFit="cover"
            quality={70}
            layout="fill"
            alt="Banner Propiedades"
            src="/banner-propiedades.webp"
          />
          <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.6)" />
        </Box>

        <Container
          pb={10}
          maxW={{
            base: '95%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl'
          }}
          transform={{ base: 'translateY(-100px)', lg: 'translateY(-150px)' }}
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
                  <BreadcrumbLink fontWeight="light" color="gray.100">
                    Inicio
                  </BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontWeight="light" color="gray.100">
                  Asesores
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          )}

          <Flex mb={5} align="flex-start">
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
              Asesores
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
                <AdvanceSearchAsesor {...{ setVariables }} />
                <LastProperties />
              </Box>
            )}
            <Asesores {...{ asesores, setVariables }} />
          </Flex>
        </Container>
        <Footer />
      </Box>
    </LazyMotion>
  )
}

export default SearchAsesores
