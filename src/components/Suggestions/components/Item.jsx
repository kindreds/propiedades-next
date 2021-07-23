import React from 'react'

import { Box } from '@chakra-ui/layout'

const Item = ({ children, ...props }) => {
  return (
    <Box
      py={1}
      w="full"
      as="button"
      textAlign="left"
      color="gray.500"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Item
