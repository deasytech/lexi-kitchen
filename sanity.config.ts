import { Config } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@schemas";
import { lexiTheme } from "@src/theme";
import StudioNavbar from "@src/components/StudioNavbar";

export const config: Config = {
  name: "default",
  title: "Lexi Kitchen",
  projectId: "lcvfs389",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: lexiTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
