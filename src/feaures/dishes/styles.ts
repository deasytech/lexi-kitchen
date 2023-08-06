import {
  BoxProps,
  ButtonProps,
  CardProps,
  GridProps,
  ImageProps,
} from "@chakra-ui/react";

export const heroCardStyles: CardProps = {
  direction: { base: "column", lg: "row" },
  align: "center",
  justify: "center",
  overflow: "hidden",
  variant: "outline",
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  shadow: "sma",
  p: "2rem",
  mb: "2rem",
};

export const heroImageStyles: ImageProps = {
  objectFit: "cover",
  maxW: "100%",
  rounded: "md",
};

export const heroBoxStyles: BoxProps = {
  mx: "2rem",
  w: { base: "100%", lg: "50%" },
};

export const dishDetailsGridStyles: GridProps = {
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2,1fr)" },
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  p: "2rem",
  gap: "20",
};

export const buyNowStyles: ButtonProps = {
  variant: "outline",
  bgColor: "brand.primary",
  color: "white",
  borderRadius: "50px",
  size: "sm",
  w: "160px",
  mr: "1rem",
  my: "0.5rem",
  _hover: { bgColor: "none" },
};
