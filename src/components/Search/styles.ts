import { BoxProps, InputGroupProps, InputProps } from "@chakra-ui/react";

export const searchInputStyles: InputProps = {
  type: "text",
  placeholder: "Search...",
  focusBorderColor: "brand.primaryLight",
  borderWidth: "1px",
  borderColor: "gray.400",
};

export const inputGroup: InputGroupProps = {
  w: { base: "100%", lg: "32rem" },
  size: "sm",
};

export const dropdownStyles: BoxProps = {
  pos: "absolute",
  bg: "white",
  shadow: "md",
  padding: "0.5rem",
  w: "100%",
  boxSizing: "border-box",
  maxH: "500px",
  overflowY: "auto",
};
