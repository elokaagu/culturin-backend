export const Paragraph = {
  slug: "paragraph",
  labels: {
    singular: "Paragraph",
    plural: "Paragraph Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "text",
      type: "text",
      label: "textarea",
    },
    {
      name: "backgroundImage",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
