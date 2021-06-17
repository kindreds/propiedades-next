import React from "react";
import Section from ".";
import Card from "../Card";
import { Flex } from "@chakra-ui/layout";

import { whyChooseUs } from "../../data";
import { motion } from "framer-motion";
import { stagger } from "../../motions/stagger";

const PorQueElegirnos = () => {
  return (
    <Section>
      <Flex
        wrap="wrap"
        as={motion.div}
        variants={stagger}
        justify="space-evenly"
      >
        {whyChooseUs.map((item, i) => (
          <Card key={i} {...item} bg="white" mb={{ base: 6, xl: 0 }} />
        ))}
      </Flex>
    </Section>
  );
};

export default PorQueElegirnos;
