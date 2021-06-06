import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { StarIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/tooltip';
import { IconButton } from '@chakra-ui/button';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Box, Text, Flex, Badge, HStack, Divider } from '@chakra-ui/layout';

import { Avatar } from '../tools';
import SliderImage from './SliderImage';
import { Link } from '@chakra-ui/layout';

const PropertyCard = ({ i, fullW, ...props }) => {
  const [isLike, setIsLike] = useState(false);
  const w = { base: '95%', xl: '370px' };
  const imagesList = ['/casa1_cp.webp', '/casa2_cp.webp', '/casa3_cp.webp'];

  return (
    <Box
      {...props}
      mb={5}
      as="article"
      mx="auto"
      bg="white"
      shadow="md"
      borderWidth={1}
      borderRadius="lg"
      borderColor="gray.300"
      maxW={fullW ? { base: '100%', ms: '95%' } : w}
      transition="all 0.3s ease"
      _hover={{ shadow: 'xl' }}
    >
      <Box w="full" pos="relative">
        <Box
          w="full"
          borderTopEndRadius="lg"
          borderTopStartRadius="lg"
          overflow="hidden"
        >
          <SliderImage minH="250px" images={imagesList} h={{ base: '250px' }} />
        </Box>
        <HStack pos="absolute" top={2} left={2} w="100%">
          <Badge colorScheme="green" rounded="lg" py={0.5} px={1.5}>
            Nueva
          </Badge>
          <Badge colorScheme="blue" rounded="lg" py={0.5} px={1.5}>
            Venta
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
          <NextLink href={`/propiedades/${i}`}>
            <Link>
              <Text
                as="h4"
                isTruncated
                maxW="400px"
                fontSize="md"
                lineHeight="tight"
                fontWeight="semibold"
              >
                Casa moderna en el centro de la ciudad, con vista al mar y ....
              </Text>
            </Link>
          </NextLink>
          <Text fontSize="sm" color="gray.600">
            Breña: {i}
          </Text>
          <Text fontSize="sm" color="gray.600">
            Av. Coronel Portillo #1088.
          </Text>
          <Text fontSize="sm" color="gray.600">
            Lima - Lima - San Isidro
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
          {4} Cuartos &bull; {4} Baños
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
        <NextLink href={`/propiedades/${i}`}>
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
              alt="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </Box>
          <Text ml={1} fontSize="sm">
            Dan Abrahmov
          </Text>
        </Flex>
        <Text fontSize="sm">hace 1 año</Text>
      </Flex>
    </Box>
  );
};

PropertyCard.propTypes = {
  i: PropTypes.number,
  fullW: PropTypes.bool,
};

export default PropertyCard;
