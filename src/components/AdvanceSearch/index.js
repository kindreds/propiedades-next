import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Terceros
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Text, Flex, Stack, Box } from '@chakra-ui/layout'
import { NumberInput, NumberInputField } from '@chakra-ui/number-input'

import useLocation from '../../hooks/useLocation'
import searchPropis from '../../types/searchPropis'
import { useGetSearchQuery } from '../../generated/graphql'

const initialState = {
  tipoContrato: '',
  slugCategoria: '',
  DeparCodi: 0,
  ProvCodi: 0,
  DistCodi: 0,
  montoMinimo: 0,
  montoMaximo: 200,
  areaMinima: 0,
  areaMaxima: 0,
  antiguedad: '',
  cuartos: '',
  banios: ''
}

const AdvanceSearch = ({
  isDrawer,
  setVariables = () => {},
  resetVariables = () => {}
}) => {
  // Form
  const [form, setForm] = useState(initialState)

  // Antiguedad
  const [antiguedad, setAntiguedad] = useState({})

  // Querys
  const { data = searchPropis } = useGetSearchQuery()
  const { depar, provincia, distrito } = useLocation({
    DepCode: form.DeparCodi,
    ProCode: form.ProvCodi
  })

  useEffect(() => {
    setForm((f) => ({ ...f, ProvCodi: 0, DistCodi: 0 }))
  }, [form.DeparCodi])

  useEffect(() => {
    if (data.GetAreaMinimo && data.GetAreaMaximo) {
      // const { GetAreaMinimo: min, GetAreaMaximo: max } = data
      setForm((f) => ({ ...f, areaMinima: '', areaMaxima: '' }))
    }
  }, [data.GetAreaMinimo, data.GetAreaMaximo])

  useEffect(() => {
    data.GetAntiguedad.forEach((n) => {
      const year = new Date().getFullYear()
      if (n - year < 5) {
        return setAntiguedad((v) => ({ ...v, 5: v[5] ? v[5] + 1 : 1 }))
      }
      if (n - year < 10) {
        return setAntiguedad((v) => ({ ...v, 10: v[10] ? v[10] + 1 : 1 }))
      }
      if (n - year < 20) {
        return setAntiguedad((v) => ({ ...v, 20: v[20] ? v[20] + 1 : 1 }))
      }
      if (n - year < 50) {
        return setAntiguedad((v) => ({ ...v, 50: v[50] ? v[50] + 1 : 1 }))
      }
    })
  }, [data.GetAntiguedad])

  const format = (val) => '$' + val
  const parse = (val) => val.replace(/^\$/, '')
  const handleChange = (v, n) => setForm((f) => ({ ...f, [n]: v }))

  const handleReset = () => {
    const { GetAreaMinimo: min, GetAreaMaximo: max } = data
    setForm({
      ...initialState,
      areaMinima: min,
      areaMaxima: max
    })

    resetVariables()
  }

  const handleSubmit = () => {
    const {
      banios,
      cuartos,
      ProvCodi,
      DistCodi,
      DeparCodi,
      antiguedad,
      areaMinima,
      areaMaxima,
      tipoContrato,
      slugCategoria
    } = form

    const payload = {
      tipoContrato: tipoContrato === '' ? null : tipoContrato,
      slugCategoria: slugCategoria === '' ? null : slugCategoria,
      DeparCodi: DeparCodi === 0 ? null : DeparCodi,
      ProvCodi: ProvCodi === 0 ? null : ProvCodi,
      DistCodi: DistCodi === 0 ? null : DistCodi,
      montoMinimo: null,
      montoMaximo: null,
      areaMinima: areaMinima === 0 ? null : areaMinima,
      areaMaxima: areaMaxima === 0 ? null : areaMaxima,
      antiguedad: antiguedad === 0 ? null : antiguedad,
      cuartos: cuartos === 0 ? null : cuartos,
      banios: banios === 0 ? null : banios
    }

    setVariables((v) => ({ ...v, ...payload }))
  }

  return (
    <Stack
      mr={4}
      bg="white"
      py={6}
      maxW="320px"
      px={isDrawer ? 0 : 6}
      w={isDrawer ? '100%' : null}
      shadow={isDrawer ? 'none' : 'lg'}
      rounded={isDrawer ? 'none' : 'lg'}
      maxH={isDrawer ? null : 'fit-content'}
      display={isDrawer ? 'flex' : { base: 'none', xl: 'flex' }}
    >
      <Text
        fontWeight="bold"
        mb={isDrawer ? 4 : 0}
        textAlign={isDrawer ? 'center' : 'left'}
      >
        Busqueda Avanzada
      </Text>
      <FormLabel fontSize="sm">Tipo de Contrato</FormLabel>
      <RadioGroup
        value={form.tipoContrato}
        onChange={(v) => handleChange(v, 'tipoContrato')}
      >
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
      <Select
        size="lg"
        fontSize="sm"
        name="antiguedad"
        placeholder="Seleccione"
        value={form.antiguedad}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {Object.keys(antiguedad).map((number) => {
          return (
            <option key={`antiguedad-${number}`} value={number}>
              hasta {number} años
            </option>
          )
        })}
        {/* <option>En planos</option>
        <option>En construcción</option>
        <option>A Estrenar</option>
        <option>hasta 5 años</option>
        <option>hasta 10 años</option>
        <option>hasta 20 años</option>
        <option>hasta 50 años</option>
        <option>más 50 años</option> */}
      </Select>
      <FormLabel fontSize="sm">Departamento</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        name="DeparCodi"
        placeholder="Departamento"
        value={form.DeparCodi}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {depar.data.map(({ DeparCodi, DeparNom }) => (
          <option key={DeparCodi} value={DeparCodi}>
            {DeparNom}
          </option>
        ))}
      </Select>
      <FormLabel fontSize="sm">Provincia</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        placeholder="Provincia"
        name="ProvCodi"
        value={form.ProvCodi}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {provincia.data.map(({ ProvCodi, ProvNom }) => (
          <option key={ProvCodi} value={ProvCodi}>
            {ProvNom}
          </option>
        ))}
      </Select>
      <FormLabel fontSize="sm">Distrito</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        placeholder="Distrito"
        name="DistCodi"
        value={form.DistCodi}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {distrito.data.map(({ DistCodi, DistNom }) => (
          <option key={DistCodi} value={DistCodi}>
            {DistNom}
          </option>
        ))}
      </Select>
      <FormLabel fontSize="sm">Categorias</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        name="slugCategoria"
        placeholder="Seleccione"
        value={form.slugCategoria}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {data.GetCategoria.map((cat) => (
          <option key={cat.categoriaId} value={cat.slugCategoria}>
            {cat.nombreCategoria}
          </option>
        ))}
      </Select>
      <Flex justify="space-between">
        <Box w="40%">
          <FormLabel fontSize="sm">Area min.</FormLabel>
          {/* <NumberInput
            variant="flushed"
            min={parseInt(data.GetAreaMinimo)}
            value={parseInt(form.areaMinima)}
            onChange={(v) => handleChange(v, 'areaMinima')}
          >
            <NumberInputField pl={2} />
          </NumberInput> */}

          <Input
            type="number"
            name="areaMinima"
            variant="flushed"
            placeholder={data.GetAreaMinimo}
            value={parseInt(form.areaMinima)}
            onChange={({ target: { name, value } }) =>
              handleChange(value, name)
            }
          />
        </Box>

        <Box w="40%">
          <FormLabel fontSize="sm">Area max.</FormLabel>
          {/* <NumberInput
            variant="flushed"
            max={parseInt(data.GetAreaMaximo)}
            value={parseInt(form.areaMaxima)}
            onChange={(v) => handleChange(v, 'areaMaxima')}
          >
            <NumberInputField pl={2} />
          </NumberInput> */}
          <Input
            type="number"
            name="areaMaxima"
            variant="flushed"
            placeholder={data.GetAreaMaximo}
            value={parseInt(form.areaMaxima)}
            onChange={({ target: { name, value } }) =>
              handleChange(value, name)
            }
          />
        </Box>
      </Flex>

      <Flex justify="space-between">
        <Box w="40%">
          <FormLabel fontSize="sm">Monto min.</FormLabel>
          {/* <NumberInput
            variant="flushed"
            value={format(form.montoMinimo)}
            onChange={(v) => handleChange(parse(v), 'montoMinimo')}
          >
            <NumberInputField pl={2} />
          </NumberInput> */}
          <Input
            type="number"
            placeholder={0}
            variant="flushed"
            name="montoMinimo"
            value={format(form.montoMinimo)}
            onChange={({ target: { name, value } }) =>
              handleChange(value, name)
            }
          />
        </Box>

        <Box w="40%">
          <FormLabel fontSize="sm">Monto max.</FormLabel>
          {/* <NumberInput
            variant="flushed"
            value={format(form.montoMaximo)}
            onChange={(v) => handleChange(parse(v), 'montoMaximo')}
          >
            <NumberInputField pl={2} />
          </NumberInput> */}
          <Input
            type="number"
            variant="flushed"
            name="montoMaximo"
            placeholder="$200"
            value={format(form.montoMaximo)}
            onChange={({ target: { name, value } }) =>
              handleChange(value, name)
            }
          />
        </Box>
      </Flex>
      <FormLabel fontSize="sm">Nro. Cuartos</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        name="cuartos"
        placeholder="Seleccione"
        value={form.cuartos}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {data.GetCuartos.map((cuartos) => (
          <option key={`cuarto-${cuartos}`} value={cuartos}>
            {cuartos}
          </option>
        ))}
      </Select>
      <FormLabel fontSize="sm">Nro. Baños</FormLabel>
      <Select
        size="lg"
        fontSize="sm"
        name="banios"
        placeholder="Seleccione"
        value={form.banios}
        onChange={({ target: { value: v, name: n } }) => handleChange(v, n)}
      >
        {data.GetBanios.map((banios) => (
          <option key={`cuarto-${banios}`} value={banios}>
            {banios}
          </option>
        ))}
      </Select>

      <Flex justify="space-between">
        <Button
          onClick={handleReset}
          variant="outline"
          mt={4}
          colorScheme="red"
        >
          Limpiar
        </Button>
        <Button onClick={handleSubmit} mt={4} colorScheme="red">
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
