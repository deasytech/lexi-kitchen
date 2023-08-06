import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { mobileNavContainerStyles, mobileSearchWrapper } from "./styles";
import Search from "../Search/Search";
import MobileNavMenu from "./MobileNavMenu";
import Wishlist from "../Wishlist/Wishlist";
import Cart from "../Cart/Cart";

const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileNavMenu />
        </Box>
        <Link href="/">
          <Image src="/logo.png" width="100px" alt="Lexi kitchen logo" />
        </Link>
        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  );
};

export default MobileNav;
