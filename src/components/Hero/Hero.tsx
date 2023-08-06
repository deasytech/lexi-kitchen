"use client";

import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { heroBoxStyles, heroCardStyles, heroImageStyles } from "@src/feaures/dishes/styles";
import Link from "next/link";
import React from "react";

interface HeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

const Hero = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: HeroProps) => {
  return (
    <Card {...heroCardStyles}>
      <Box {...heroBoxStyles}>
        <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
        <Text my="1rem">{description}</Text>
        <Link href={btnLink}>
          <Button variant="outline">{btnLabel}</Button>
        </Link>
      </Box>

      <Box {...heroBoxStyles} mt="1rem">
        <Image src={imageUrl} alt={heading} {...heroImageStyles} />
      </Box>
    </Card>
  );
};

export default Hero;
