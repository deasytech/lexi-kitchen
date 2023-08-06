import { CardProps, GridProps } from "@chakra-ui/react";

export const categoryCardStyles: CardProps = {
  direction: "column",
  align: "center",
  variant: "outline",
  overflow: "hidden",
  w: "100%",
  h: "100%",
  p: "10px",
  _hover: { bg: "gray.100", cursor: "pointer" },
};

export const categoryWrapperStyles: GridProps = {
  w: { base: "100%", lg: "90%" },
  templateColumns: { base: "repeat(1, 1fr)", lg: "repeat(2,1fr)" },
  gap: "20px",
  mx: "auto",
  p: "2rem",
};
