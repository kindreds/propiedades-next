import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { FaList } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { GoSettings } from 'react-icons/go';
import { BsGridFill } from 'react-icons/bs';
import { Button, IconButton } from '@chakra-ui/button';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Heading,
  Box,
  Container,
  Flex,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  Divider,
  Badge,
} from '@chakra-ui/layout';

import AdvanceSearch from '../components/AdvanceSearch';
import PropertyCard from '../components/PropertyCard';
import AdvanceSearchDrawer from '../components/AdvanceSearch/AdvanceSearchDrawer';
import Footer from '../components/Footer';

const Propiedades = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box pos="relative" bg="gray.200" minH="100vh">
      <Head>
        <title>Inmobiliara</title>
      </Head>

      <Navbar dark={true} />
      <Container
        pb={10}
        maxW={{
          base: '95%',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
        pt={{ base: '100px', xl: '120px' }}
      >
        <Breadcrumb
          mb={5}
          spacing="8px"
          display={{ base: 'none', lg: 'block' }}
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <NextLink href="/">
              <BreadcrumbLink fontWeight="light" href="#">
                Inicio
              </BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="light" href="#">
              Propiedades
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex mb={5} align="center">
          <Heading fontSize={{ base: '2xl', sm: '3xl' }} flex={1}>
            Propiedades
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
        <Flex>
          <Box>
            <AdvanceSearch />
            <Box
              mt={8}
              mr={4}
              py={4}
              px={6}
              bg="white"
              shadow={'lg'}
              rounded={'lg'}
              display={{ base: 'none', lg: 'block' }}
            >
              <Text mb={4} fontWeight="bold">
                Últimas propiedades
              </Text>
              <Stack spacing={4} divider={<Divider />}>
                <Flex pos="relative">
                  <Image rounded="lg" w="80px" src="./casa1.jpg" alt="casa" />
                  <Box ml={2}>
                    <Text fontSize="sm">Casa 1</Text>
                    <Text fontSize="sm" color="red.400">
                      S/ 200,000.00
                    </Text>
                    <HStack>
                      <Text fontSize="sm">Cuartos: 4</Text>
                      <Text fontSize="sm">Baños: 4</Text>
                      <Text fontSize="sm">M&sup2;: 72</Text>
                    </HStack>
                  </Box>
                  <Badge pos="absolute" top={0} right={0} colorScheme="green">
                    Nueva
                  </Badge>
                </Flex>
                <Flex pos="relative">
                  <Image rounded="lg" w="80px" src="./casa1.jpg" alt="casa" />
                  <Box ml={2}>
                    <Text fontSize="sm">Casa 1</Text>
                    <Text fontSize="sm" color="red.400">
                      S/ 200,000.00
                    </Text>
                    <HStack>
                      <Text fontSize="sm">Cuartos: 4</Text>
                      <Text fontSize="sm">Baños: 4</Text>
                      <Text fontSize="sm">M&sup2;: 72</Text>
                    </HStack>
                  </Box>
                  <Badge pos="absolute" top={0} right={0} colorScheme="green">
                    Nueva
                  </Badge>
                </Flex>
                <Flex>
                  <Image rounded="lg" w="80px" src="./casa1.jpg" alt="casa" />
                  <Box ml={2}>
                    <Text fontSize="sm">Casa 1</Text>
                    <Text fontSize="sm" color="red.400">
                      S/ 200,000.00
                    </Text>
                    <HStack>
                      <Text fontSize="sm">Cuartos: 4</Text>
                      <Text fontSize="sm">Baños: 4</Text>
                      <Text fontSize="sm">M&sup2;: 72</Text>
                    </HStack>
                  </Box>
                </Flex>
                <Flex>
                  <Image rounded="lg" w="80px" src="./casa1.jpg" alt="casa" />
                  <Box ml={2}>
                    <Text fontSize="sm">Casa 1</Text>
                    <Text fontSize="sm" color="red.400">
                      S/ 200,000.00
                    </Text>
                    <HStack>
                      <Text fontSize="sm">Cuartos: 4</Text>
                      <Text fontSize="sm">Baños: 4</Text>
                      <Text fontSize="sm">M&sup2;: 72</Text>
                    </HStack>
                  </Box>
                </Flex>
                <Flex>
                  <Image rounded="lg" w="80px" src="./casa1.jpg" alt="casa" />
                  <Box ml={2}>
                    <Text fontSize="sm">Casa 1</Text>
                    <Text fontSize="sm" color="red.400">
                      S/ 200,000.00
                    </Text>
                    <HStack>
                      <Text fontSize="sm">Cuartos: 4</Text>
                      <Text fontSize="sm">Baños: 4</Text>
                      <Text fontSize="sm">M&sup2;: 72</Text>
                    </HStack>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          </Box>
          <Box flex={1}>
            <Flex
              p={{ base: 2, xl: 4 }}
              mb={6}
              bg="white"
              shadow="lg"
              maxH="70px"
              rounded="lg"
              align="center"
              justify="space-between"
            >
              <Text
                fontWeight="bold"
                letterSpacing="wide"
                ml={{ base: 2, xl: 6 }}
                fontSize={{ base: 'small' }}
                textAlign={{ base: 'center' }}
              >
                10 RESULTADOS
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  fontSize={{ base: 'sm' }}
                  rightIcon={<ChevronDownIcon />}
                >
                  Ordenar
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={{ base: 'sm' }}>Nuevos</MenuItem>
                  <MenuItem fontSize={{ base: 'sm' }}>Antiguos</MenuItem>
                  <MenuItem fontSize={{ base: 'sm' }}>Menor precio</MenuItem>
                  <MenuItem fontSize={{ base: 'sm' }}>Mayor precio</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <SimpleGrid
              gap={4}
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
              }}
            >
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <PropertyCard fullW key={i} i={i} />
                ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
      <Footer />
      <AdvanceSearchDrawer isOpen={isOpen} onClose={onClose} />
      <IconButton
        size="lg"
        right={4}
        bottom={4}
        pos="fixed"
        rounded="full"
        colorScheme="red"
        onClick={() => onOpen()}
        icon={<GoSettings fontSize="30px" />}
        display={{ base: 'flex', lg: 'none' }}
      />
    </Box>
  );
};

export default Propiedades;
