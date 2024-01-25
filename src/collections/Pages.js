import { Hero } from "../blocks/Hero";
import { Paragraph } from "../blocks/Paragraph";

export const Pages = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, Paragraph],
    },
  ],
};
