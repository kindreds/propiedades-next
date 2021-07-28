import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Box,
  Text,
  Stack,
  Heading,
  Container,
  AspectRatio
} from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { FormLabel, FormControl } from '@chakra-ui/form-control'
import { m, LazyMotion, domAnimation } from 'framer-motion'

import { FaPlay } from 'react-icons/fa'

import Modal from '../components/Modal'
import Catchap from '../components/Catchap'
import PostulanteForm from '../components/PostulanteForm'

const BeAsesor = () => {
  const modalHandler = useDisclosure()

  const scrollToForm = () => {
    import('react-scroll').then((scroll) => {
      scroll.animateScroll.scrollTo(1088)
    })
  }

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Sé un asesor</title>
      </Head>
      <Box bg="gray.200">
        <Box minH="550px">
          <Box
            w="full"
            h="70vh"
            mt="-82px"
            minH="550px"
            rounded="3xl"
            overflow="hidden"
            pos="relative"
          >
            <Image layout="fill" objectFit="cover" src="/bannerasesor.png" />
            <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.5)"></Box>
          </Box>
          <Container
            pos="absolute"
            top={52}
            left={0}
            right={0}
            bottom={0}
            maxW="container.xl"
          >
            <div className="glass">
              <Heading
                mb={6}
                color="gray.100"
                lineHeight="shorter"
                letterSpacing="tight"
                fontWeight="extrabold"
                fontSize={{ base: '3xl', sm: '4xl' }}
              >
                <Text display="block" color="white" mb={{ base: 1 }}>
                  ¿Deseas unirte a nuestro equipo?
                </Text>
                <Text display="block" color="white">
                  Sé un Asesor RE/MAX.
                </Text>
              </Heading>
              <Stack
                mt={2}
                spacing={2}
                justifyContent={{ base: 'center' }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button onClick={scrollToForm} size="lg" shadow="lg">
                  Sé un asesor
                </Button>
                <Button
                  size="lg"
                  shadow="lg"
                  colorScheme="red"
                  leftIcon={<FaPlay />}
                  onClick={() => modalHandler.onOpen()}
                >
                  Ver video
                </Button>
              </Stack>
            </div>
          </Container>
        </Box>
      </Box>
      <Box bg="gray.200" id="BeAsesorID">
        <Container maxW="container.lg" py={5}>
          <Stack spacing={5}>
            <Box
              p={8}
              w="full"
              bg="white"
              rounded="lg"
              borderWidth={1}
              borderColor="gray.300"
            >
              <Heading as="h3" mb={5}>
                Los asesores
              </Heading>
              <Text>
                Los asesores RE / MAX trabajan de forma autónoma, pero no están
                solos. Cuentan con el apoyo del Broker y de toda la Organización
                RE / MAX, reconocida en todo el mundo por desarrollar su propia
                cartera de clientes a cambio de las comisiones más altas del
                mercado. <br /> <br /> El asesor RE / MAX tiene todo lo que
                necesita para disfrutar de una carrera exitosa. Entrenamiento
                constante, tecnología revolucionaria, comisiones máximas y
                crecimiento constante. En RE / MAX, el único límite es su propia
                capacidad de trabajo.
              </Text>
            </Box>
            <Box
              p={8}
              w="full"
              bg="white"
              rounded="lg"
              borderWidth={1}
              id="formContact"
              borderColor="gray.300"
              style={{ scrollPaddingTop: '100px' }}
            >
              <Heading as="h3" mb={5} fontSize={{ base: 'xl' }}>
                Formulario de contacto para ser asesor asociado de RE/MAX Perú
              </Heading>

              <PostulanteForm />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Modal {...modalHandler}>
        <AspectRatio ratio={16 / 9} w="full">
          <iframe
            src="https://www.youtube.com/embed/d67NNpbhMuk"
            title="Propiedad"
            allowFullScreen
          />
        </AspectRatio>
      </Modal>
      <style jsx>
        {`
          .glass {
            width: 700px;
            text-align: center;
            padding-block: 5rem;
            padding-inline: 1rem;
            margin-inline: auto;
          }

          @media screen and (max-width: 826px) {
            .glass {
              width: 500px;
            }
          }
          @media screen and (max-width: 526px) {
            .glass {
              width: 90%;
              padding-block: 2rem;
            }
          }
        `}
      </style>
    </LazyMotion>
  )
}

export default BeAsesor
