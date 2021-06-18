import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Text, Flex, Box, Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";

import BasicSearch from "../BasicSearch";
import {
  headingMotion,
  firstBtnsMotion,
  secondBtnsMotion,
  basicSearchMotion,
} from "../../motions/headingMotion";

const Hero = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <Box minH={{ xl: "100vh" }} overflow="hidden" mt="-82px">
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage="url(./hero_cp.webp)"
      >
        <Flex
          minH={{ xl: "100vh" }}
          bg="rgba(29, 41, 62,0.7)"
          mt={{ base: "76px", xl: "0px" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box pt="50px" pb="20px" maxW={{ base: "90%" }} mx="auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headingMotion}
            >
              <Heading
                mb="2"
                color="white"
                textAlign={"center"}
                fontWeight={{ base: "bold" }}
                fontSize={{ base: "2xl", sm: "4xl", xl: "6xl" }}
              >
                Busca tu casa soñada
              </Heading>
            </motion.div>

            <Text textAlign={"center"} mb="8" color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Flex justify={{ base: "space-evenly", sm: "center" }} mb="6">
              <motion.div
                variants={firstBtnsMotion}
                initial="hidden"
                animate="visible"
              >
                <Button
                  minW="28"
                  size="lg"
                  mx={{ base: "0", sm: "12px" }}
                  onClick={() => setIsActive(1)}
                  colorScheme={isActive === 1 ? "red" : "gray"}
                >
                  Alquiler
                </Button>
              </motion.div>
              <motion.div
                variants={secondBtnsMotion}
                initial="hidden"
                animate="visible"
              >
                <Button
                  minW="28"
                  size="lg"
                  mx={{ base: "0", sm: "12px" }}
                  onClick={() => setIsActive(0)}
                  colorScheme={isActive === 0 ? "red" : "gray"}
                >
                  Venta
                </Button>
              </motion.div>
            </Flex>

            <motion.div
              variants={basicSearchMotion}
              initial="hidden"
              animate="visible"
            >
              <BasicSearch />
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
