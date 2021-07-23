import React from 'react'

import { Box } from '@chakra-ui/layout'

const Item = ({ children, ...props }) => {
  return (
    <Box as="button" color="gray.500" py={2} {...props}>
      {children}
    </Box>
  )
}

export default Item
