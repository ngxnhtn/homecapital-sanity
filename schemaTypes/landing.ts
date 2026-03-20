import { defineField, defineType } from "sanity";

export default defineType({
  name: "landing",
  type: "document",
  title: "Màn hình chính",
  fields: [
    defineField({
      name: "title",
      title: "Main Headline",
      type: "internationalizedArrayString",
      description: "e.g., Find your dream home in Budapest",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "internationalizedArrayString",
      description: "A short sub-headline below the main title.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: { required: () => any }) => rule.required(),
    }),
  ],
});
