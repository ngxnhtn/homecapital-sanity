import { defineField, defineType } from "sanity";
import locationField from "../fields/locationField";

export default defineType({
  name: "agency",
  title: "Thông tin công ty",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Agency Name",
      type: "string",
      description: "Tên công ty",
      validation: (Rule: { required: () => any }) => Rule.required(),
      initialValue: "Home Capital Property",
    }),
    defineField({
      name: "logo",
      title: "Agency Logo",
      type: "image",
      description: "Logo công ty",
      options: { hotspot: true },
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Short Agency Bio",
      type: "internationalizedArrayDescription",
      description: "Giới thiệu ngắn về công ty (Hiện thị tại phần about)",
    }),
    defineField({
      name: "contactDetails",
      title: "Contact Details",
      description: "Thông tin liên lạc",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Public Email",
          type: "string",
          description: "Địa chỉ thư điện tử",
        }),
        defineField({
          name: "phone",
          title: "Main Phone",
          type: "string",
          description: "e.g. +36 1 234 5678",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp Number",
          type: "string",
          description: "Format: 36301234567",
        }),
      ],
    }),
    locationField,
    defineField({
      name: "socials",
      title: "Social Media Links",
      description: "Liên kết mạng xã hội",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
      ],
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "string",
      initialValue: "Mon-Fri: 09:00 - 18:00",
      description: "Giờ mở cửa",
    }),
  ],
});
