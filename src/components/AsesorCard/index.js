import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import PropTypes from 'prop-types'
import { RiWhatsappFill } from 'react-icons/ri'
import {
  StarIcon,
  PhoneIcon,
  AtSignIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/icon'
import { IconButton } from '@chakra-ui/button'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Box, SimpleGrid, Text, Heading, Link } from '@chakra-ui/layout'

import { fadeInUp } from '../../motions/fadeInUp'

const AsesorCard = ({ simple, drawer, asesor, ...props }) => {
  const foto =
    asesor.foto.url ??
    'https://apipropiedades.softaki.com/storage/app/imagenesGenerales/2021-07/casa11.webp'

  return (
    <LazyMotion features={domAnimation}>
      <m.div variants={fadeInUp}>
        <Box
          {...props}
          w="full"
          mx="auto"
          bg="white"
          as="article"
          overflow="hidden"
          mb={simple ? 2 : 10}
          borderColor="gray.300"
          shadow={!drawer && 'md'}
          borderWidth={!drawer && 1}
          transition="all 0.3s ease"
          borderRadius={!drawer && 'lg'}
          _hover={{ shadow: !drawer ? 'xl' : 'none' }}
        >
          <Box pos="relative" h={64} w="full">
            <Image
              layout="fill"
              loading="lazy"
              objectFit="cover"
              objectPosition="center"
              src={foto}
            />
          </Box>

          <Box alignItems="center" p={4}>
            <Heading as="h1" fontSize="lg" fontWeight="semibold" mb={2}>
              {asesor.nombres} {asesor.apellidos} (Asesor)
            </Heading>
            <Text>13 Propiedades</Text>
            <Box d="flex" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? 'teal.500' : 'gray.300'} />
                ))}
              <Box as="span" ml="2" color="gray.600">
                {12} Opiniones
              </Box>
            </Box>
            <NextLink href={`/asesores/${asesor.alias}`}>
              <Link
                mt={2}
                d="flex"
                w="full"
                color="blue.500"
                colorScheme="blue"
                alignItems="center"
              >
                Ver Propiedades
                <Icon as={ChevronRightIcon} />
              </Link>
            </NextLink>
          </Box>
          <SimpleGrid
            borderTopWidth="1px"
            borderBottomWidth={drawer && '1px'}
            templateColumns="repeat(3, 1fr)"
          >
            <IconButton
              variant={drawer && ''}
              as="a"
              target="_blank"
              rel="​noopener noreferrer"
              href="https://wa.me/+51999999999"
              rounded="none"
              color="gray.500"
              _hover={{ color: 'whatsapp.500' }}
              icon={<RiWhatsappFill fontSize={25} />}
            />
            <IconButton
              variant={drawer && 'ghost'}
              as="a"
              href="tel:+51999999999"
              rounded="none"
              color="gray.500"
              borderLeftWidth="1px"
              _hover={{ color: 'gray.700' }}
              icon={<PhoneIcon fontSize={20} />}
            />
            <IconButton
              variant={drawer && 'ghost'}
              as="a"
              rounded="none"
              color="gray.500"
              borderLeftWidth="1px"
              _hover={{ color: 'gray.700' }}
              href="mailto:vdiaz@example.com"
              icon={<AtSignIcon fontSize={20} />}
            />
          </SimpleGrid>
        </Box>
      </m.div>
    </LazyMotion>
  )
}

AsesorCard.propTypes = {
  simple: PropTypes.bool,
  drawer: PropTypes.bool
}

export default AsesorCard
