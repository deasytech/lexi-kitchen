import {
  BoxProps,
  ButtonProps,
  CardProps,
  FlexProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

export const bannerStyles: FlexProps = {
  justify: "center",
  align: "center",
  gap: 2,
  direction: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  p: "2rem",
};

export const bannerTitleStyles: HeadingProps = {
  size: { base: "xl", lg: "3xl" },
  lineHeight: "4rem",
  color: "brand.primary",
};

export const bannerTextStyles: TextProps = {
  fontSize: { base: "md", lg: "lg" },
  py: "1rem",
  maxW: "600px",
};

export const bannerButtonStyles: ButtonProps = {
  rounded: "full",
  minW: "10rem",
  bgColor: "brand.primary",
  color: "white",
  _hover: { bg: "brand.primaryDark" },
};

export const bannerImageStyles: BoxProps = {
  my: "2rem",
  w: { base: "300px", lg: "600px" },
  h: { base: "300px", lg: "500px" },
  bg: "center/cover no-repeat url(/hero-banner.jpg)",
};

export const topCatWrapperStyles: BoxProps = {
  w: { base: "100%", lg: "90%" },
  mx: "auto",
  py: "3rem",
  px: "2rem",
};

export const topCategoryCardStyles: CardProps = {
  direction: "row",
  align: "center",
  overflow: "hidden",
  variant: "outline",
  w: "100%",
  h: "100%",
  p: "10px",
  _hover: { cursor: "pointer", bgColor: "gray.100" },
};
