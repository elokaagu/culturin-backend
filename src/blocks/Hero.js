export const Hero = {
  slug: "hero",
  labels: {
    singular: "Hero",
    plural: "Hero Blocks",
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
