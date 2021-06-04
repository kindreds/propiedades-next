import React from 'react';
import {
  FormLabel,
  FormControl,
  FormHelperText,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/textarea';
import { Box, Heading, Stack } from '@chakra-ui/layout';

const CommentForm = () => {
  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={4} fontWeight="semibold">
        Compartenos tu comentario
      </Heading>

      <Stack spacing={4}>
        <FormControl id="first-name" isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Correo</FormLabel>
          <Input type="email" />
          <FormHelperText>
            Nosotros nunca compartiremos tu correo.
          </FormHelperText>
        </FormControl>

        <Textarea size="sm" resize="none" placeholder="Escribe tu comentario" />

        <Button variant="outline" colorScheme="teal">
          Enviar
        </Button>
      </Stack>
    </Box>
  );
};

export default CommentForm;
