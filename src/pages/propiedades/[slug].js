import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import {
  Box,
  Stack,
  HStack,
  Container,
  SimpleGrid,
  Heading
} from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'
import { m, LazyMotion, domAnimation } from 'framer-motion'

import Map from '../../components/Map'
import FloorMap from '../../components/FloorMap'
import AsesorCard from '../../components/AsesorCard'
import ProDetails from '../../components/ProDetails'
import VideoProperti from '../../components/VideoProperti'
import PropertiHeader from '../../components/PropertiHeader'
import CommentForm from '../../components/CommentArea/CommentForm'
import DetailSlider from '../../components/SliderImage/DetailSlider'
import PropiedadesDesc from '../../components/Section/PropiedadesDesc'

import {
  FaTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { BiPrinter, BiShareAlt } from 'react-icons/bi'

import client from '../../apollo'
import { nativeShare } from '../../helper/nativeShare'
import { fadeInDown, fadeInUp } from '../../motions/fadeInUp'
import {
  GetAllPropiedadesDocument as GET_ALL_PROPIEDADES,
  GetSlugPropiedadesDocument as GET_SLUG_PROPIEDAD
} from '../../generated/graphql'

/* Componentes */

const Contact = dynamic(() => import('../../components/Contact'), {
  ssr: false
})

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_PROPIEDADES,
    variables: {
      page: 1,
      estado: '',
      destacado: '',
      numberPaginate: 10
    }
  })

  const paths = data.GetAllPropiedades.data.map((p) => {
    return { params: { slug: p.slug } }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
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

  const propiedadItem = GetAllPropiedades.data.find((p) => {
    return p.slug === params.slug
  })

  if (propiedadItem) {
    return { props: { propiedad: propiedadItem, dark: true } }
  }

  const {
    data: { GetSlugPropiedades }
  } = await client.query({
    query: GET_SLUG_PROPIEDAD,
    variables: { slug: params.slug }
  })

  return { props: { propiedad: GetSlugPropiedades, dark: true } }
}

const Propiedad = ({ propiedad }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [is1024px] = useMediaQuery('(min-width: 1024px)')
  const { ref: socialRef, inView: SocialInView } = useInView()

  const ScrollToContact = () => {
    const el = document.getElementById('asesor_msg')
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>{propiedad.titulo}</title>
      </Head>

      <Box bg="gray.200" w="100%">
        <Box
          w="full"
          as={m.div}
          initial="initial"
          animate="animate"
          variants={fadeInDown}
        >
          <DetailSlider {...{ galeria: propiedad.galeria }} />
        </Box>

        <Container
          pb={5}
          maxW={{
            base: '99%',
            sm: 'container.sm',
            md: '90%',
            lg: 'container.xl',
            xl: 'container.xl'
          }}
        >
          <SimpleGrid
            gap={6}
            templateColumns={{
              base: 'minmax(0, 1fr)',
              lg: 'minmax(0, 1fr) 350px'
            }}
          >
            <Box>
              <m.div initial="initial" animate="animate" variants={fadeInUp}>
                <PropertiHeader
                  {...{ propiedad }}
                  socialRef={socialRef}
                  ScrollToContact={ScrollToContact}
                />
                <ProDetails />
              </m.div>
              <FloorMap />
              <Map />
              <VideoProperti />
              <div id="asesor_msg">
                <CommentForm {...{ propiedadId: propiedad.propiedadId }} />
              </div>
              <Box mt={10}>
                <Heading
                  mb={2}
                  fontSize="lg"
                  letterSpacing={1}
                  fontWeight="semibold"
                >
                  Propiedades Similares
                </Heading>
                <Box mt={5}>
                  <PropiedadesDesc
                    breakpoints={{
                      base: 1,
                      ms: 1,
                      sm: 1,
                      md: 2,
                      lg: 2
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box display={{ base: 'none', lg: 'block' }}>
              <Box pos="sticky" top={{ base: '100px' }}>
                <m.div initial="initial" animate="animate" variants={fadeInUp}>
                  <AsesorCard simple {...{ asesor: propiedad.Asesor }} />
                </m.div>
                {!SocialInView && (
                  <HStack sx={{ zIndex: 4 }}>
                    <IconButton
                      size="lg"
                      variant="outline"
                      colorScheme="teal"
                      icon={<BsChatFill />}
                      onClick={ScrollToContact}
                      display={{ base: 'none', lg: 'flex' }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      onClick={nativeShare}
                      icon={<BiShareAlt fontSize="20px" />}
                      display={{ base: 'flex', lg: 'none' }}
                    />
                    <IconButton
                      size="lg"
                      colorScheme="teal"
                      icon={<BiPrinter fontSize="20px" />}
                      display={{ base: 'flex', lg: 'none' }}
                    />
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
                )}
              </Box>
            </Box>
          </SimpleGrid>
        </Container>

        {isOpen && <Contact isOpen={isOpen} onClose={onClose} />}

        {!is1024px && (
          <Stack right={4} bottom={4} pos="fixed" style={{ zIndex: 2 }}>
            <IconButton
              size="lg"
              rounded="full"
              colorScheme="teal"
              onClick={nativeShare}
              icon={<BiShareAlt fontSize="25px" />}
              display={{ base: !SocialInView ? 'flex' : 'none', lg: 'none' }}
            />
            <IconButton
              size="lg"
              rounded="full"
              colorScheme="whatsapp"
              onClick={() => onOpen()}
              icon={<RiWhatsappFill fontSize="30px" />}
              display={{ base: 'flex', lg: 'none' }}
            />
          </Stack>
        )}
      </Box>
    </LazyMotion>
  )
}

export default Propiedad
