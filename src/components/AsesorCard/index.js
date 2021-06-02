import React from 'react';
import NextLink from 'next/link';
import { RiWhatsappFill } from 'react-icons/ri';
import { PhoneIcon, AtSignIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  Flex,
  Icon,
  Heading,
  Link,
  Badge,
  SimpleGrid,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const AsesorCard = ({ props }) => {
  return (
    <Box
      {...props}
      w="full"
      mb={10}
      as="article"
      mx="auto"
      bg="white"
      shadow="md"
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.300"
      transition="all 0.3s ease"
      _hover={{ shadow: 'xl' }}
    >
      <Box pos="relative" mb={4}>
        <Image
          h={64}
          w="full"
          fit="cover"
          alt="avatar"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />

        <Badge pos="absolute" top={2} left={2} colorScheme="green">
          2 propiedades
        </Badge>

        <Flex alignItems="center" p={4} mb={4} bg="gray.800">
          <Heading as="h1" fontSize="lg" color="white" fontWeight="semibold">
            Victoria Diaz (Asesor)
          </Heading>
        </Flex>

        {/* <Flex px={4} alignItems="center" mb={2} color="gray.900">
          <Icon h={6} w={6} mr={1} as={RiWhatsappFill} fill="whatsapp.500" />
          <Link
            px={2}
            color="blue.600"
            fontWeight="light"
            href="https://wa.me/+51999999999"
          >
            999 999 999
          </Link>
        </Flex>
        <Flex px={4} alignItems="center" mb={2} color="gray.900">
          <Icon as={PhoneIcon} h={5} w={5} mr={2} />
          <Link
            px={2}
            color="blue.600"
            fontWeight="light"
            href="tel:+51999999999"
          >
            999 999 999
          </Link>
        </Flex>
        <Flex px={4} alignItems="center" mb={2} color="gray.900">
          <Icon as={AtSignIcon} h={5} w={5} mr={2} />

          <Link
            href="mailto:vdiaz@example.com"
            px={2}
            fontWeight="light"
            color="blue.600"
          >
            vdiaz@example.com
          </Link>
        </Flex> */}

        <SimpleGrid mx={6} templateColumns="minmax(0, 1fr) 130px">
          <HStack>
            <Icon
              fontSize="lg"
              opacity={0.5}
              cursor="pointer"
              as={FaFacebookF}
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s ease"
            />
            <Icon
              fontSize="lg"
              opacity={0.5}
              cursor="pointer"
              as={AiFillInstagram}
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s ease"
            />
            <Icon
              fontSize="lg"
              opacity={0.5}
              cursor="pointer"
              as={FaLinkedin}
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s ease"
            />
          </HStack>

          <NextLink href="/propiedades">
            <Link
              d="flex"
              w="full"
              fontSize="sm"
              color="blue.500"
              colorScheme="blue"
              alignItems="center"
            >
              Ver Propiedades
              <Icon as={ChevronRightIcon} />
            </Link>
          </NextLink>
        </SimpleGrid>
      </Box>
      <SimpleGrid borderTopWidth="1px" templateColumns="repeat(3, 1fr)">
        <IconButton
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
          as="a"
          href="tel:+51999999999"
          rounded="none"
          color="gray.500"
          borderLeftWidth="1px"
          _hover={{ color: 'gray.700' }}
          icon={<PhoneIcon fontSize={20} />}
        />
        <IconButton
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
  );
};

export default AsesorCard;
