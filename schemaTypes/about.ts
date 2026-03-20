import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  type: "document",
  title: "Trang giới thiệu",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Tiêu đề trang",
      type: "internationalizedArrayString",
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Tiêu đề phụ",
      type: "internationalizedArrayDescription",
      validation: (rule: { required: () => any }) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Main Content",
      description: "Nội dung chính",
      type: "object",
      validation: (rule: { required: () => any }) => rule.required(),
      fields: [
        defineField({
          name: "aboutPhoto",
          type: "image",
          description: "Ảnh minh họa",
          title: "Photo",
          validation: (rule: { required: () => any }) => rule.required(),
        }),
        defineField({
          name: "philosophyTitle",
          type: "internationalizedArrayString",
          description: "Tiêu đề chính",
          title: "Main title",
          validation: (rule: { required: () => any }) => rule.required(),
        }),
        defineField({
          name: "philosophyDesc",
          type: "internationalizedArrayDescription",
          description: "Mô tả",
          title: "Description",
          validation: (rule: { required: () => any }) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "members",
      type: "array",
      title: "Members",
      description: "Danh sách nhân viên",
      validation: (rule: { required: () => any }) => rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          name: "member",
          title: "Member",
          description: "Thành viên",
          fields: [
            defineField({
              name: "memberPhoto",
              type: "image",
              description: "Ảnh chân dung",
              title: "Member Photo",
              validation: (rule: { required: () => any }) => rule.required(),
            }),
            defineField({
              name: "memberName",
              type: "internationalizedArrayString",
              description: "Họ và Tên",
              title: "Member Name",
              validation: (rule: { required: () => any }) => rule.required(),
            }),
            defineField({
              name: "memberTitle",
              type: "internationalizedArrayString",
              description: "Chức vụ",
              title: "Member Title",
              validation: (rule: { required: () => any }) => rule.required(),
            }),
            defineField({
              name: "memberAbout",
              type: "internationalizedArrayDescription",
              description: "Giới thiệu",
              title: "Member About",
              validation: (rule: { required: () => any }) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});
