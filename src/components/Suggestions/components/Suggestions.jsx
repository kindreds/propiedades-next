import React, { useEffect, useState } from 'react'

// components
import Item from './Item'
import { Box, Stack } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'

// Data
import data from '../data/data'
import DeparProv from '../data/DeparProv'

// Functions
import { handleList } from '../helper/location'

const Suggestions = ({ onChange = () => {} }) => {
  // State para el input
  const [text, setText] = useState('')
  // State para las sugerencias
  const [list, setList] = useState([])
  // State para enviar al parent component
  const [selected, setSelected] = useState({})

  useEffect(() => {
    const isEmpty = Object.keys(selected).length === 0
    if (selected) onChange({ ok: !isEmpty, data: selected })
  }, [selected])

  const handlePayload = ({ payload, label }) => {
    setList([])
    setText(label)
    setSelected(payload)
  }

  const handleClick = ({ DeparCodi, ProvCodi, AllCodis, label }) => {
    DeparCodi = `${DeparCodi}`

    // Envio informacion depende de lo que elija el usuario
    // All Codis hace referencias a los codigos como string separado por comas
    if (AllCodis) {
      AllCodis = AllCodis.split(',')
      const payload = {
        DeparCodi: AllCodis[0],
        ProvCodi: AllCodis[1],
        DistCode: AllCodis[2]
      }
      handlePayload({ payload, label })
      return
    }

    if (ProvCodi) {
      const payload = { DeparCodi, ProvCodi }
      handlePayload({ payload, label })
      return
    }

    const payload = { DeparCodi }
    handlePayload({ payload, label })
  }

  return (
    <Box w="full" pos="relative">
      <Input
        type="text"
        fontSize={'15'}
        minH={{ base: '50px' }}
        placeholder="Ubicacion"
        value={text}
        onKeyDown={({ code }) => {
          if (code === 'Backspace') setSelected({})
        }}
        onChange={async ({ target: { value: v } }) => {
          setText(v)
          const data = await handleList(v)
          setList(data)
        }}
      />

      {list.length !== 0 ? (
        <Stack
          pos="absolute"
          bg="gray.100"
          shadow="md"
          rounded="md"
          px={4}
          py={2}
          w="full"
          zIndex="popover"
        >
          {list.map(({ label }, i) => {
            const arr = label.split(' - ').reverse()
            const DepCode = DeparProv?.[arr[0]]?.[0]?.DeparCodi

            if (arr[2]) {
              const DistCode = data?.[arr[0]]?.[arr[1]]?.[arr[2]]
              return (
                <Item
                  key={`${label}-${i}`}
                  onClick={() => {
                    handleClick({ AllCodis: DistCode, label })
                  }}
                >
                  {label}
                </Item>
              )
            }

            if (arr[1]) {
              const depar = DeparProv?.[arr[0]]
              const ProvCode = depar.find((e) => e.ProvNom === arr[1]).ProvCodi
              return (
                <Item
                  key={`${label}-${i}`}
                  onClick={() => {
                    handleClick({
                      label,
                      DeparCodi: DepCode,
                      ProvCodi: ProvCode
                    })
                  }}
                >
                  {label}
                </Item>
              )
            }

            return (
              <Item
                key={`${label}-${i}`}
                onClick={() => {
                  handleClick({
                    label,
                    DeparCodi: DepCode
                  })
                }}
              >
                {label}
              </Item>
            )
          })}
        </Stack>
      ) : null}
    </Box>
  )
}

export default Suggestions
