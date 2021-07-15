import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Select } from '@chakra-ui/select'
import { Button } from '@chakra-ui/button'
import { Flex, Stack, Text } from '@chakra-ui/layout'
import useLocation from '../../hooks/useLocation'

const AdvanceSearchAsesor = ({ setVariables }) => {
  const [DepCode, setDepCode] = useState(0)
  const [ProCode, setProCode] = useState(0)
  const [DistCode, setDistCode] = useState(0)
  const { depar, provincia, distrito } = useLocation({
    DepCode,
    ProCode
  })

  useEffect(() => {
    setProCode(0)
    setDistCode(0)
  }, [DepCode])

  const handleSubmit = () => {
    setVariables((v) => ({
      ...v,
      distrito: DistCode === 0 ? '' : DistCode,
      provincia: ProCode === 0 ? '' : ProCode,
      departamento: DepCode === 0 ? '' : DepCode
    }))
  }

  const reset = () => {
    setDepCode(0)
    setVariables((v) => ({
      ...v,
      asesor: '',
      distrito: '',
      provincia: '',
      departamento: ''
    }))
  }

  return (
    <Stack
      mr={4}
      py={6}
      px={6}
      bg="white"
      shadow={'lg'}
      rounded={'lg'}
      display={{ base: 'none', xl: 'flex' }}
    >
      <Text fontWeight="bold" mb={2}>
        Busqueda Avanzada
      </Text>
      <Select
        size="lg"
        fontSize="sm"
        value={DepCode}
        placeholder="Departamento"
        onChange={({ target: { value } }) => setDepCode(value)}
      >
        {depar.data.map(({ DeparCodi, DeparNom }) => (
          <option key={DeparCodi} value={DeparCodi}>
            {DeparNom}
          </option>
        ))}
      </Select>
      <Select
        size="lg"
        fontSize="sm"
        placeholder="Provincia"
        value={ProCode}
        onChange={({ target: { value } }) => setProCode(value)}
      >
        {provincia.data.map(({ ProvCodi, ProvNom }) => (
          <option key={ProvCodi} value={ProvCodi}>
            {ProvNom}
          </option>
        ))}
      </Select>
      <Select
        size="lg"
        fontSize="sm"
        placeholder="Distrito"
        value={DistCode}
        onChange={({ target: { value } }) => setDistCode(value)}
      >
        {distrito.data.map(({ DistCodi, DistNom }) => (
          <option key={DistCodi} value={DistCodi}>
            {DistNom}
          </option>
        ))}
      </Select>
      <Flex justify="space-between">
        <Button mt={4} onClick={reset} variant="outline" colorScheme="red">
          Limpiar
        </Button>
        <Button onClick={handleSubmit} mt={4} colorScheme="red">
          Buscar
        </Button>
      </Flex>
    </Stack>
  )
}

AdvanceSearchAsesor.propTypes = {
  isDrawer: PropTypes.bool
}

export default AdvanceSearchAsesor
