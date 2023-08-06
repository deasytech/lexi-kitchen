import { Box } from "@chakra-ui/react";
import React from "react";
import { navbarStyles } from "./styles";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Box className="navbar-wrapper" h={{ base: "150px", lg: "120px" }}>
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};

export default Navbar;
