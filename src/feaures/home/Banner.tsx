"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import {
  bannerStyles,
  bannerTitleStyles,
  bannerTextStyles,
  bannerButtonStyles,
  bannerImageStyles,
} from "./styles";
import Link from "next/link";

const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerTitleStyles}>
          Order Your
          <br />
          Tasty Dish Online
        </Heading>
        <Text {...bannerTextStyles}>
          Your homemade deliciously cooked meal for your events, picnic and
          personal home eating.
        </Text>
        <Link href="/dishes">
          <Button {...bannerButtonStyles}>Order Now</Button>
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...bannerImageStyles} />
      </Box>
    </Flex>
  );
};

export default Banner;
