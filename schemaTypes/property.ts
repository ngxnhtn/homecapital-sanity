import { defineArrayMember, defineField, defineType } from "sanity";
import locationField from "../fields/locationField";

export default defineType({
  name: "property",
  title: "Danh sách bất động sản",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Tên bất động sản",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Đường dẫn",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured?",
      type: "boolean",
      description: "Nổi bật?",
    }),
    defineField({
      name: "propertyValue",
      type: "object",
      title: "Property Value",
      description: "Giá trị bất động sản",
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "priceAmount",
          type: "number",
          title: "Price",
          description: "Giá tiền",
          validation: (rule) => rule.positive(),
        }),
        defineField({
          name: "currency",
          type: "string",
          title: "Currency",
          description: "Đơn vị",
          options: {
            list: [
              { title: "HUF (Ft)", value: "HUF" },
              { title: "EUR (€)", value: "EUR" },
            ],
            layout: "dropdown",
          },
          initialValue: "HUF",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "listingStatus",
      title: "Listing Status",
      type: "string",
      description: "Trạng thái bất động sản",
      options: {
        list: [
          { title: "For Rent", value: "rent" },
          { title: "For Sale", value: "sale" },
          { title: "Closed (Sold/Rented)", value: "closed" },
        ],
        layout: "radio",
      },
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      description: "Loại bất động sản",
      options: {
        list: ["Apartment", "House", "Commercial", "Land"],
      },
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "internationalizedArrayDescription",
      description: "Mô tả",
    }),
    defineField({
      name: "featureImage",
      title: "Feature Image",
      type: "image",
      description: "Ảnh nổi bật",
      options: { hotspot: true },
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      description: "Danh mục ảnh (Đừng quên xóa ảnh Untitled nhé)",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    locationField,
    defineField({
      name: "specs",
      title: "Property Specifications",
      type: "object",
      description: "Thông tin bất động sản",
      validation: (rule: { required: () => any }) => rule.required(),
      fields: [
        defineField({
          name: "area",
          title: "Area (sqm)",
          type: "number",
          description: "Diện tích (mét vuông)",
          validation: (rule: { required: () => any }) => rule.required(),
        }),
        defineField({
          name: "rooms",
          title: "Rooms",
          type: "number",
          description: "Số phòng",
          validation: (rule: { required: () => any }) => rule.required(),
        }),
        defineField({
          name: "bedrooms",
          title: "Bedrooms",
          type: "number",
          description: "Số phòng ngủ",

          deprecated: {
            reason: "Đổi qua số phòng",
          },
        }),
        defineField({
          name: "bathrooms",
          title: "Bathrooms",
          type: "number",
          description: "Số phòng tắm",

          deprecated: {
            reason: "Đổi qua số phòng",
          },
        }),
      ],
      options: { columns: 2 },
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      description: "Danh sách tiện ích (Ví dụ: Garage, Vườn, AC,...)",
      of: [
        defineArrayMember({
          type: "object",
          name: "amenity",
          fields: [
            defineField({
              name: "en",
              title: "English",
              type: "string",
              validation: (rule: { required: () => any }) => rule.required(),
            }),
            defineField({
              name: "vi",
              title: "Tiếng Việt",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
