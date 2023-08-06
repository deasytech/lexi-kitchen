import { extendTheme } from "@chakra-ui/react";
import { buildLegacyTheme } from "sanity";

export const colors = {
  brand: {
    primary: "#f40407",
    primaryLight: "#f4898a",
    primaryDark: "#ac0305",
  },
};

export const theme = extendTheme({ colors });

const props = {
  "--lexi-white": "#fff",
  "--lexi-black": "#1a1a1a",
  "--brand-primary": colors.brand.primary,
  "--brand-primary-light": colors.brand.primaryLight,
  "--brand-primary-dark": colors.brand.primaryDark,
  "--lexi-gray": "#666666",
};

export const lexiTheme = buildLegacyTheme({
  "--black": props["--lexi-black"],
  "--gray": props["--lexi-gray"],

  "--focus-color": props["--brand-primary-dark"],

  "--brand-primary": props["--brand-primary"],

  "--component-bg": props["--lexi-white"],
  "--component-text-color": props["--lexi-black"],

  "--default-button-color": props["--lexi-gray"],
  "--default-button-primary-color": props["--brand-primary"],

  "--state-info-color": props["--brand-primary-light"],
});
