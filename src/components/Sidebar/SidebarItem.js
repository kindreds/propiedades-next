import React from 'react';
import PropTypes from 'prop-types';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion';
import NextLink from 'next/link';
import { Box, Link, Divider } from '@chakra-ui/layout';

const SidebarItem = ({ label, href }) => {
  return (
    <>
      <Divider />
      <Box py={4} px={4}>
        <NextLink href={href}>
          <Link>{label}</Link>
        </NextLink>
      </Box>
    </>
  );
};

SidebarItem.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  child: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarItem;
