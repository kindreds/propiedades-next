import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Link,
  Text,
  Badge,
  HStack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/layout';
import {
  FaBed,
  FaBath,
  FaBuilding,
  FaWhatsapp,
  FaFacebookF,
  FaFacebookMessenger,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';
import { Tooltip } from '@chakra-ui/tooltip';
import { Icon, StarIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/button';
import { BiPrinter, BiShareAlt } from 'react-icons/bi';

import { nativeShare } from '../../helper/nativeShare';

const PropertiHeader = ({ socialRef, ScrollToContact }) => {
  return (
    <SimpleGrid
      templateColumns={{ base: 'minmax(0, 1fr)', ms: 'repeat(2, 1fr)' }}
    >
      <Box mb={{ base: 4, sm: 0 }}>
        <HStack pb={2}>
          <Badge colorScheme="green">Nuevo</Badge>
          <Badge colorScheme="blue">Venta</Badge>
        </HStack>
        <Heading fontSize="xl" mb={1}>
          Departamento Diamante
        </Heading>
        <Text fontSize="lg">S/ 200.000,00</Text>
        <Text color="gray.600">Av. Coronel Portillo #1088.</Text>
        <NextLink href="/propiedades">
          <Link color="blue.500">Lima - Lima - San Isidro.</Link>
        </NextLink>
        <Box d="flex" alignItems="center" mb={2}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                mr={1}
                fontSize="large"
                color={i < 4 ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600">
            {33} Opiniones
          </Box>
        </Box>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={ScrollToContact}
          leftIcon={<BsChatFill />}
        >
          Solicitar información
        </Button>
      </Box>

      <Box display="flex" flexDir="column">
        <SimpleGrid
          flex={1}
          mb={{ base: 4, sm: 0 }}
          templateColumns="repeat(3, 80px)"
          justifyContent={{ base: 'center', ms: 'flex-end' }}
        >
          <Flex
            userSelect="none"
            flexDir="column"
            justify="flex-start"
            align="center"
          >
            <Box mb={1} p={3} h="60px" bg="teal" rounded="full">
              <Icon color="white" as={FaBed} fontSize="35px" />
            </Box>
            <Text color="gray.700">Cuartos</Text>
            <Heading>4</Heading>
          </Flex>
          <Flex
            userSelect="none"
            flexDir="column"
            justify="flex-start"
            align="center"
          >
            <Box mb={1} p={4} h="60px" bg="teal" rounded="full">
              <Icon color="white" as={FaBath} fontSize="30px" />
            </Box>
            <Text color="gray.700">Baños</Text>
            <Heading>4</Heading>
          </Flex>
          <Flex
            userSelect="none"
            flexDir="column"
            justify="flex-start"
            align="center"
          >
            <Box mb={1} p={4} h="60px" bg="teal" rounded="full">
              <Icon color="white" as={FaBuilding} fontSize="30px" />
            </Box>
            <Text color="gray.700">Pisos</Text>
            <Heading>2</Heading>
          </Flex>
        </SimpleGrid>
        <HStack
          ref={socialRef}
          justifySelf="flex-end"
          alignSelf={{ base: 'center', ms: 'flex-end' }}
        >
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
      </Box>
    </SimpleGrid>
  );
};

PropertiHeader.propTypes = {
  socialRef: PropTypes.func.isRequired,
  ScrollToContact: PropTypes.func.isRequired,
};

export default PropertiHeader;
