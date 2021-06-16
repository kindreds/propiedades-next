import React from "react";
import PropTypes from "prop-types";
import {
  ModalBody,
  ModalOverlay,
  ModalContent,
  Modal as ModalContainer,
} from "@chakra-ui/modal";
import { Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Modal = ({ isOpen, onClose, children, ...props }) => {
  return (
    <ModalContainer
      {...props}
      size="4xl"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent maxW={{ base: "90%" }}>
        <ModalBody pos="relative" p={0}>
          <Box pos="absolute" top={-5} right={-5} zIndex="toast">
            <IconButton
              onClick={onClose}
              colorScheme="red"
              icon={<CloseIcon />}
            />
          </Box>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
