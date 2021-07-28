import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Box,
  Flex,
  Text,
  Stack,
  Heading,
  Container,
  SimpleGrid
} from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'

import { FaPlay } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import OpinionForm from '../components/OpinionForm'

const contacto = () => {
  return (
    <div>
      <Head>
        <title>Contactanos</title>
      </Head>
      <Box
        w="full"
        h="50vh"
        mt="-82px"
        minH="550px"
        rounded="3xl"
        overflow="hidden"
        pos="relative"
      >
        <Image layout="fill" objectFit="cover" src="/banner-contacto.jpg" />
        <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.5)"></Box>
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
                ¿Deseas contactar con nosotros?
              </Text>
            </Heading>
            <Stack
              mt={2}
              spacing={2}
              justifyContent={{ base: 'center' }}
              direction={{ base: 'column', sm: 'row' }}
            >
              {/* <Button size="lg" shadow="lg">
                Sé un asesor
              </Button> */}
              <Button
                size="lg"
                shadow="lg"
                colorScheme="red"
                leftIcon={<FaPlay />}
                // onClick={() => modalHandler.onOpen()}
              >
                Ver video
              </Button>
            </Stack>
          </div>
        </Container>
      </Box>
      <Box
        w="100%"
        d="flex"
        // minH="100vh"
        bg="gray.200"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          py={5}
          d="flex"
          alignItems="center"
          justifyContent="center"
          maxW={{
            base: '99%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            xl: 'container.xl'
          }}
        >
          <Box>
            <SimpleGrid
              gap={{ xl: 5 }}
              templateColumns={{
                base: 'minmax(0, 1fr)',
                xl: 'repeat(2, minmax(0, 1fr))'
              }}
            >
              <Stack bg="red.500" shadow="lg" rounded="lg" p={6}>
                <Heading
                  as="h3"
                  mb={2}
                  fontWeight="semibold"
                  fontSize={{ base: '2xl', md: '2xl' }}
                  lineHeight={{ base: 'shorter', md: 'none' }}
                  letterSpacing={{ base: 'normal', md: 'tight' }}
                >
                  Información de contacto
                </Heading>
                <Text color="gray.100" mb={2} fontSize="sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum dolorem quod similique, amet nihil adipisci magnam
                  eligendi praesentium inventore alias iste ipsum mollitia
                  accusantium voluptas vero temporibus officiis soluta?
                  Deleniti.
                </Text>

                <Flex align="center">
                  <Icon
                    fontSize="40px"
                    mr={6}
                    color="gray.700"
                    as={MdLocationOn}
                  />
                  <Text
                    letterSpacing={{ base: 'normal', md: 'tight' }}
                    color="gray.100"
                  >
                    Av Rockvile, #1098, mz 1, lt2.
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    fontSize="28px"
                    ml={2}
                    mr={6}
                    color="gray.700"
                    as={PhoneIcon}
                  />
                  <Text
                    letterSpacing={{ base: 'normal', md: 'tight' }}
                    color="gray.100"
                  >
                    Correo: correo@example.com
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    fontSize="28px"
                    ml={2}
                    mr={6}
                    color="gray.700"
                    as={EmailIcon}
                  />
                  <Text
                    letterSpacing={{ base: 'normal', md: 'tight' }}
                    color="gray.100"
                  >
                    Telefono: correo@example.com
                  </Text>
                </Flex>
              </Stack>

              <OpinionForm />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
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
    </div>
  )
}

export default contacto
