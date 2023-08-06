import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import {
  desktopNavStyle,
  logoSectionStyles,
  cartSectionStyles,
} from "./styles";
import Link from "next/link";
import { navItems } from "@src/helpers";
import Search from "../Search/Search";
import Wishlist from "../Wishlist/Wishlist";
import Cart from "../Cart/Cart";

const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyle}>
      <Stack {...logoSectionStyles}>
        <Box mr="1rem">
          <Link href="/">
            <Image src="/logo.png" width="110px" alt="Lexi kitchen logo" />
          </Link>
        </Box>
        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}
        <Search />
      </Stack>

      <Stack {...cartSectionStyles}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
