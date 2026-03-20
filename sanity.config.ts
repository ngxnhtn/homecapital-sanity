import { defineConfig, defineField } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

export default defineConfig({
  name: "default",
  title: "real estate",

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,

  plugins: [
    structureTool(),
    visionTool(),
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
