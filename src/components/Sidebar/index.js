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
          <Accordion allowToggle>
            {NAV_ITEMS.map((item, i) => (
              <SidebarItem key={i} {...item} />
            ))}
          </Accordion>
        </DrawerBody>

        <DrawerFooter>LOGO</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Sidebar;
