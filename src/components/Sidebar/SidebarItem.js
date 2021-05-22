import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const SidebarItem = ({ label, child, href }) => {
  return (
    <>
      {child ? (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={2}>
            <Box
              px={4}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              {child.map(({ label }, i) => (
                <Button variant="link" py={2} px={4} key={i}>
                  {label}
                </Button>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ) : (
        <>
          <Divider />
          <Box py={2} px={4}>
            <Text>{label}</Text>
          </Box>
        </>
      )}
    </>
  );
};

SidebarItem.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  child: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarItem;
