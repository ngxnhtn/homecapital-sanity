import { defineConfig, defineField } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { iconPicker } from "sanity-plugin-icon-picker";

export default defineConfig({
  name: "default",
  title: "real estate",

  projectId: "7pox372f",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
    iconPicker(),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "vi", title: "Tiếng Việt" },
      ],
      fieldTypes: [
        defineField({
          name: "description",
          type: "text",
          rows: 5,
          description: "Mô tả",
        }),
        defineField({
          name: "string",
          type: "string",
          description: "Tiện ích",
        }),
      ],
      defaultLanguages: ["en"],
      languageDisplay: "titleAndCode",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
