import React, { useState } from 'react'
import NextLink from 'next/link'

// Terceros
import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/image'
import { StarIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/tooltip'
import { IconButton } from '@chakra-ui/button'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import {
  Box,
  Text,
  Link,
  Flex,
  Badge,
  HStack,
  Divider
} from '@chakra-ui/layout'

import { Avatar } from '../tools'
import { fadeInUp } from '../../motions/fadeInUp'

const PropertyCard = ({ i, p }) => {
  const [isLike, setIsLike] = useState(false)

  const isVenta = p.tipoContrato === 1
  console.log(p)

  return (
    <motion.div initial="initial" animate="animate" variants={fadeInUp}>
      <Box
        mb={5}
        mx="auto"
        bg="white"
        shadow="md"
        as="article"
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.300"
        _hover={{ shadow: 'xl' }}
        transition="all 0.3s ease"
        maxW={{ base: '90%', ms: '370px' }}
      >
        <Box w="full" pos="relative">
          <Box
            w="full"
            overflow="hidden"
            borderTopEndRadius="lg"
            borderTopStartRadius="lg"
          >
            <Image
              src={p.fotoPrincipal.url}
              alt={p.fotoPrincipal.descripcion}
            />
          </Box>
          <HStack pos="absolute" top={2} left={2} w="100%">
            <Badge colorScheme="green" rounded="lg" py={0.5} px={1.5}>
              Nueva
            </Badge>
            <Badge
              py={0.5}
              px={1.5}
              rounded="lg"
              colorScheme={isVenta ? 'blue' : 'purple'}
            >
              {isVenta ? 'Venta' : 'Alquiler'}
            </Badge>
          </HStack>
          <Tooltip hasArrow label="Dar me gusta" placement="bottom">
            <IconButton
              display="none"
              size="sm"
              right={12}
              bottom={2}
              pos="absolute"
              opacity={isLike ? 1 : 0.7}
              color={isLike ? 'red.600' : ''}
              onClick={() => setIsLike(!isLike)}
              _hover={{ opacity: 1, color: 'red.600' }}
              icon={isLike ? <BsHeartFill /> : <BsHeart />}
            />
          </Tooltip>
          <Tooltip hasArrow label="Comparar" placement="bottom">
            <IconButton
              display="none"
              size="sm"
              right={2}
              bottom={2}
              pos="absolute"
              opacity={isLike ? 1 : 0.7}
              color={isLike ? 'blue.600' : ''}
              onClick={() => setIsLike(!isLike)}
              _hover={{ opacity: 1, color: 'blue.600' }}
              icon={<CgArrowsExchangeAlt fontSize="20px" />}
            />
          </Tooltip>
        </Box>
        <Box p={3}>
          <Box mb={4}>
            <NextLink href={`/propiedades/${p.slug}`}>
              <Link>
                <Text
                  as="h4"
                  isTruncated
                  maxW="400px"
                  fontSize="md"
                  lineHeight="tight"
                  fontWeight="semibold"
                >
                  {p.titulo}
                </Text>
              </Link>
            </NextLink>
            <Text fontSize="sm" color="gray.600">
              {p.direccion}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {p.Departamento.DeparNom} - {p.Provincia.ProvNom} -{' '}
              {p.Distrito.DistNom}
            </Text>
            <Text fontSize="md" color="gray.800" fontWeight="semibold">
              S/ 200.000,00
            </Text>
          </Box>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {p.cuartos} Cuartos &bull; {p.banios} Baños
          </Box>

          <Box d="flex" alignItems="center" mb={2}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  fontSize="sm"
                  key={i}
                  color={i < 4 ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {33} Opiniones
            </Box>
          </Box>
          <NextLink href={`/propiedades/${p.slug}`}>
            <Link fontSize="sm" color="blue.500" textDecorationLine="underline">
              Ver mas
            </Link>
          </NextLink>
        </Box>
        <Divider />
        <Flex justify="space-between" alignItems="center" p={3}>
          <Flex alignItems="center">
            <Box w={'50px'} h={'50px'}>
              <Avatar
                width={50}
                height={50}
                alt={p.Asesor.alias}
                src="https://bit.ly/dan-abramov"
              />
            </Box>
            <Text ml={1} fontSize="sm">
              {p.Asesor.nombres} {p.Asesor.apellidos}
            </Text>
          </Flex>
          <Text fontSize="sm">hace 1 año</Text>
        </Flex>
      </Box>
    </motion.div>
  )
}

export default PropertyCard
