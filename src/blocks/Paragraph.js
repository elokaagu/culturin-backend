export const Paragraph = {
  slug: "paragraph",
  labels: {
    singular: "Paragraph",
    plural: "Paragraph Blocks",
  },
  fields: {
    title: {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    text: {
      name: "text",
      type: "text",
      label: "textarea",
    },
    backgroundImage: {
      name: "backgroundImage",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
    },
  },
};
