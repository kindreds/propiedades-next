import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';

import AdvanceSearch from '.';
import { CloseButton } from '@chakra-ui/close-button';

const AdvanceSearchDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody pos="relative">
          <CloseButton mb={1} size="lg" onClick={onClose} />
          <AdvanceSearch isDrawer />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

AdvanceSearchDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AdvanceSearchDrawer;
