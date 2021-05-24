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
              {child.map(({ label, href: subHref }, i) => (
                <NextLink href={subHref} key={i}>
                  <Link py={2} px={4}>
                    {label}
                  </Link>
                </NextLink>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ) : (
        <>
          <Divider />
          <Box py={2} px={4}>
            <NextLink href={href}>
              <Link>{label}</Link>
            </NextLink>
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
