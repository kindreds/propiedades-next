import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/layout';
import {
  Button,
  Flex,
  Icon,
  Input,
  Textarea,
  VisuallyHidden,
} from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

import Navbar from '../components/Navbar';

const contacto = () => {
  return (
    <Box
      bg="gray.200"
      w="100%"
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Navbar dark={true} />

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
          xl: 'container.xl',
        }}
      >
        {/* <KuttyHero /> */}
        <Box mt={{ base: '100px' }}>
          <Heading
            as="h1"
            mb={4}
            fontWeight="bold"
            fontSize={{ base: '3xl', md: '4xl' }}
            lineHeight={{ base: 'shorter', md: 'none' }}
            letterSpacing={{ base: 'normal', md: 'tight' }}
          >
            Deseas contactar con nosotros?
          </Heading>
          <Text
            fontWeight="light"
            color="gray.600"
            letterSpacing="wider"
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: 'lg', md: 'xl' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatibus maiores fugit pariatur, ipsam sequi accusantium
            necessitatibus sint tenetur dolores modi at dignissimos inventore
            fuga quaerat neque ex ad possimus.
          </Text>

          <SimpleGrid
            mt={4}
            templateColumns={{
              base: 'minmax(0, 1fr)',
              xl: 'repeat(2, minmax(0, 1fr))',
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                dolorem quod similique, amet nihil adipisci magnam eligendi
                praesentium inventore alias iste ipsum mollitia accusantium
                voluptas vero temporibus officiis soluta? Deleniti.
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

            <Stack spacing={4} bg="white" shadow="lg" rounded="lg" p={6}>
              <Heading
                as="h3"
                mb={2}
                fontWeight="semibold"
                fontSize={{ base: '2xl', md: '2xl' }}
                lineHeight={{ base: 'shorter', md: 'none' }}
                letterSpacing={{ base: 'normal', md: 'tight' }}
              >
                Queremos tu opinion
              </Heading>

              <SimpleGrid
                gap={4}
                templateColumns={{
                  base: 'minmax(0, 1fr)',
                  sm: 'repeat(2, 1fr)',
                }}
              >
                <Flex>
                  <VisuallyHidden>Nombre</VisuallyHidden>
                  <Input type="text" required placeholder="Nombre" />
                </Flex>
                <Flex>
                  <VisuallyHidden>Correo</VisuallyHidden>
                  <Input type="text" required placeholder="Correo" />
                </Flex>
              </SimpleGrid>

              <Flex>
                <VisuallyHidden>Asunto</VisuallyHidden>
                <Input type="text" required placeholder="Asunto" />
              </Flex>

              <Flex>
                <VisuallyHidden>Descripción</VisuallyHidden>
                <Textarea required placeholder="Dinos tu opinion" />
              </Flex>

              <Flex flex={1} justify="flex-end">
                <Button size="lg" colorScheme="red">
                  Enviar
                </Button>
              </Flex>
            </Stack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default contacto;
