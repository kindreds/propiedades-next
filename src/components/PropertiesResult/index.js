import React from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'

import { motion } from 'framer-motion'
import { stagger } from '../../motions/stagger'
import { fadeInUp } from '../../motions/fadeInUp'

const PropertyCard = dynamic(() => import('../PropertyCard'))

const PropertiesResult = ({ columns = 2, propiedades = [] }) => {
  return (
    <Box flex={1} d="flex" flexDir="column" justifyContent="flex-start">
      <motion.div variants={fadeInUp}>
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
      </motion.div>

      <SimpleGrid
        gap={4}
        mx="auto"
        as={motion.div}
        variants={stagger}
        boxSizing="border-box"
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: `repeat(${columns}, minmax(0, 1fr))`
        }}
      >
        {propiedades.map((p, i) => (
          <PropertyCard key={i} p={p} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PropertiesResult
