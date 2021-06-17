import React, { useEffect, useState } from "react";
import { AspectRatio, Box, Heading } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";

const VideoProperti = () => {
  const { ref, inView } = useInView();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (inView) setLoad(true);
  }, [inView]);

  return (
    <Box ref={ref} mt={4} bg="white" rounded="lg" shadow="lg" overflow="hidden">
      <Heading
        px={4}
        py={6}
        fontSize="lg"
        letterSpacing={1}
        fontWeight="semibold"
      >
        Video de la propiedad
      </Heading>

      {load && (
        <AspectRatio w="full" ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/d67NNpbhMuk"
            title="Propiedad"
            allowFullScreen
          />
        </AspectRatio>
      )}
    </Box>
  );
};

export default VideoProperti;
