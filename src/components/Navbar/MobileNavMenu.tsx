import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { navItems } from "@src/helpers";
import React, { useRef } from "react";
import { VscListFlat } from "react-icons/vsc";

const MobileNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/">
              <Image
                src="/logo.png"
                maxW="100px"
                objectFit="contain"
                alt="Lexi kitchen logo"
              />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            {navItems.map((navItem, i) => (
              <Link key={i} href={navItem.href}>
                <Box
                  p="0.5rem"
                  _hover={{ bgColor: "brand.primaryDark", color: "white" }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavMenu;
