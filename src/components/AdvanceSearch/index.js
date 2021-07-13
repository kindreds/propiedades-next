import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Text,
  Flex,
  Stack,
  Button,
  Input,
  Select,
  Slider,
  Radio,
  FormLabel,
  RadioGroup,
  InputGroup,
  NumberInput,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  NumberInputField,
  InputRightElement,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

const AdvanceSearch = ({ isDrawer }) => {
  const [desde, setDesde] = useState('0.00')
  const [hasta, setHasta] = useState('200.000.00')
  const [distance, setDistance] = useState(14)

  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')

  return (
    <Stack
      mr={4}
      bg="white"
      py={6}
      px={isDrawer ? 0 : 6}
      w={isDrawer ? '100%' : null}
      maxH={isDrawer ? null : '970px'}
      shadow={isDrawer ? 'none' : 'lg'}
      rounded={isDrawer ? 'none' : 'lg'}
      display={isDrawer ? 'flex' : { base: 'none', xl: 'flex' }}
    >
      <Text
        fontWeight="bold"
        mb={isDrawer ? 4 : 0}
        textAlign={isDrawer ? 'center' : 'left'}
      >
        Busqueda Avanzada
      </Text>

      {/* <InputGroup>
        <Input size="lg" fontSize="sm" placeholder="Palabra clave" />
        <InputRightElement>
          <SearchIcon color="gray.500" />
        </InputRightElement>
      </InputGroup> */}
      {/* <InputGroup>
        <Input
          fontWeight="light"
          fontSize="sm"
          size="lg"
          placeholder="Ubicacion"
        />
        <InputRightElement>
          <SearchIcon color="gray.500" />
        </InputRightElement>
      </InputGroup> */}
      <FormLabel fontSize="sm">Tipo de Contrato</FormLabel>
      <RadioGroup defaultValue="Venta">
        <Stack>
          <Radio value="1">
            <Text fontSize="sm">Venta</Text>
          </Radio>
          <Radio value="2">
            <Text fontSize="sm">Alquiler</Text>
          </Radio>
        </Stack>
      </RadioGroup>
      <FormLabel fontSize="sm">Antiguedad</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="A Estrenar">
        <option>En planos</option>
        <option>En construcción</option>
        <option>A Estrenar</option>
        <option>hasta 5 años</option>
        <option>hasta 10 años</option>
        <option>hasta 20 años</option>
        <option>hasta 50 años</option>
        <option>más 50 años</option>
      </Select>
      {/* <Box>
        <Text fontSize="sm" mb={2}>
          Distancia: {distance} km
        </Text>
        <Slider
          value={distance}
          onChange={(e) => setDistance(e)}
          colorScheme="red"
          defaultValue={30}
          aria-label="slider-ex-2"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box> */}
      <FormLabel fontSize="sm">Departamento</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="Lima">
        <option>Lima</option>
        <option>Tacna</option>
        <option>Arequipa</option>
        <option>Moquegua</option>
      </Select>
      <FormLabel fontSize="sm">Provincia</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="Lima">
        <option>Lima</option>
        <option>Tacna</option>
        <option>Arequipa</option>
        <option>Moquegua</option>
      </Select>
      <FormLabel fontSize="sm">Distrito</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="Breña">
        <option>Lima</option>
        <option>Tacna</option>
        <option>Arequipa</option>
        <option>Moquegua</option>
      </Select>
      {/* <Select fontSize="sm" size="lg" placeholder="Tipo de Contrato">
        <option>Alquiler</option>
        <option>Venta</option>
      </Select> */}
      <FormLabel fontSize="sm">Tipo de propiedad</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="Tipo 1">
        <option>Tipo 1</option>
        <option>Tipo 2</option>
        <option>Tipo 3</option>
        <option>Tipo 4</option>
      </Select>
      <FormLabel fontSize="sm">Monto min.</FormLabel>
      <NumberInput
        onChange={(valueString) => setDesde(parse(valueString))}
        value={format(desde)}
      >
        <NumberInputField fontSize="sm" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel fontSize="sm">Monto max.</FormLabel>
      <NumberInput
        value={format(hasta)}
        onChange={(valueString) => setHasta(parse(valueString))}
      >
        <NumberInputField fontSize="sm" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel fontSize="sm">Nro. Habitaciones</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="+2">
        <option>+ 1</option>
        <option>+ 2</option>
        <option>+ 3</option>
        <option>+ 4</option>
      </Select>
      <FormLabel fontSize="sm">Nro. Baños</FormLabel>
      <Select fontSize="sm" size="lg" placeholder="+3">
        <option>+ 1</option>
        <option>+ 2</option>
        <option>+ 3</option>
        <option>+ 4</option>
      </Select>

      <Flex justify="center">
        <Button mt={4} size="lg" colorScheme="red">
          Buscar
        </Button>
      </Flex>
    </Stack>
  )
}

AdvanceSearch.propTypes = {
  isDrawer: PropTypes.bool
}

export default AdvanceSearch
