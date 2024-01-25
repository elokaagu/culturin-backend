export const Hero = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Hero Blocks",
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
