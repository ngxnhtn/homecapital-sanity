import { defineField } from "sanity";

export default defineField({
  name: "location",
  title: "Location",
  description: "Vị trí",
  type: "object",
  validation: (rule: { required: () => any }) => rule.required(),
  fields: [
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      description: "Địa chỉ đường (không ghi số Postal hoặc quận, thành phố)",
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "postalCode",
      title: "Postal Code",
      type: "number",
      description: "Mã bưu chính",
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true;
          if (!/^\d{4}$/.test(String(value))) return "Phải có 4 số";
          if (value < 1011 || value > 1239)
            return "Postal Code không thuộc vùng Budapest (1011–1239)";
          return true;
        }),
    }),
    defineField({
      name: "gmaps",
      title: "Google Maps Link",
      type: "url",
      description: "Dán đường dẫn Google Maps tại đây",
    }),
  ],
});
