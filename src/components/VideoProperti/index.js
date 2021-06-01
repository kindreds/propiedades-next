import React from 'react';
import { Box, Heading } from '@chakra-ui/layout';

const VideoProperti = () => {
  return (
    <Box mt={4} px={4} py={6} bg="white" rounded="lg" shadow="lg">
      <Heading letterSpacing={1} fontSize="lg" mb={4}>
        Video de la propiedad
      </Heading>

      <iframe
        src="https://www.youtube.com/embed/d67NNpbhMuk?autoplay=0&mute=0"
        width="100%"
        height="300"
      />
    </Box>
  );
};

export default VideoProperti;
