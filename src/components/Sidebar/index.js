import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/modal';

import { NAV_ITEMS } from './items';
import SidebarItem from './SidebarItem';
import { Heading } from '@chakra-ui/layout';
import { Accordion } from '@chakra-ui/accordion';
import { Logo } from '../SVGS';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/layout';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onToggle}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton size="lg" />
        <DrawerHeader>
          <Heading>MENÚ</Heading>
        </DrawerHeader>

        <DrawerBody>
          {NAV_ITEMS.map((item, i) => (
            <SidebarItem key={i} {...item} />
          ))}
        </DrawerBody>

        <DrawerFooter mb={6}>
          <NextLink href="/">
            <Link>
              <Logo isDark />
            </Link>
          </NextLink>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Sidebar;
