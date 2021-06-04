import React from 'react';
import { AspectRatio, Box, Heading } from '@chakra-ui/layout';

const VideoProperti = () => {
  return (
    <Box mt={4} bg="white" rounded="lg" shadow="lg" overflow="hidden">
      <Heading
        px={4}
        py={6}
        fontSize="lg"
        letterSpacing={1}
        fontWeight="semibold"
      >
        Video de la propiedad
      </Heading>

      <AspectRatio w="full" ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/d67NNpbhMuk"
          title="Propiedad"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

export default VideoProperti;
