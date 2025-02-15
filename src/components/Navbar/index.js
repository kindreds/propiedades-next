import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { IconButton, Button } from "@chakra-ui/button";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { Logo } from "../SVGS";
import DesktopNav from "./DesktopNav";
import Sidebar from "../Sidebar";
import { useDisclosure } from "@chakra-ui/hooks";
import { Link } from "@chakra-ui/layout";

const Navbar = ({ dark = false }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrollTop, setScrollTop] = useState(0);
  const isDark = useBreakpointValue({ base: true, xl: false });

  useEffect(() => {
    const onChange = () => setScrollTop(window.scrollY);

    window.addEventListener("scroll", onChange);
    return () => window.removeEventListener("scroll", onChange);
  }, []);

  if (!dark) dark = scrollTop > 80;

  return (
    <>
      <Box
        top={0}
        w="100%"
        minH="60px"
        style={{ zIndex: 4 }}
        pos={{ base: "sticky" }}
        transition="background 0.3s ease"
        shadow={{ base: "lg", xl: dark ? "lg" : "none" }}
        bg={{ base: "white", xl: dark ? "white" : "transparent" }}
      >
        <Flex
          mx="auto"
          minH="60px"
          color="white"
          align="center"
          py={{ base: 4 }}
          px={{ base: 5 }}
          w={{ base: "100%", xl: "90%" }}
        >
          <Flex
            ml={{ base: -2 }}
            flex={{ base: 1, xl: "auto" }}
            display={{ base: "flex", xl: "none" }}
          >
            <IconButton
              ml="2"
              color="gray.700"
              variant={"ghost"}
              onClick={onToggle}
              aria-label={"Toggle Navigation"}
              icon={<HamburgerIcon w={8} h={8} />}
            />
          </Flex>

          <Flex flex={1} justify={{ base: "center", xl: "start" }}>
            <NextLink href="/">
              <Link>
                <Logo isDark={isDark || dark} />
              </Link>
            </NextLink>
          </Flex>

          <DesktopNav dark={dark} />
          <Flex
            flex={{ base: 1, xl: "0" }}
            ml={{ base: 0, xl: "30px" }}
            justify={{ base: "flex-end", xl: "center" }}
          >
            <IconButton
              variant={"ghost"}
              display={{ base: "block", xl: "none" }}
              icon={
                <Icon
                  w={5}
                  h={5}
                  opacity={0}
                  as={FaUserAlt}
                  color={{ base: "gray.700", xl: "white" }}
                />
              }
            />
            <Stack
              align="center"
              spacing="20px"
              direction="row"
              display={{ base: "none" }}
              // display={{ base: 'none', xl: 'flex' }}
            >
              <Button variant="link" colorScheme="red">
                Iniciar sesión
              </Button>
              <Button fontWeight="light" colorScheme="red">
                REGISTRARSE
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};

Navbar.propTypes = {
  dark: PropTypes.bool,
};

export default Navbar;
