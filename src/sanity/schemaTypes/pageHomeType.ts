import { defineType, defineField } from "sanity";

export const pageHomeType = defineType({
  name: "pageHome",
  title: "Page: Home",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Section: Hero",
      type: "object",
      description: "Hero v1.0",
      fields: [
        defineField({
          name: "tag",
          title: "Tagline",
          type: "string",
          description: "Tagline for the hero section",
          validation: (Rule) => [
            Rule.min(10)
              .min(10)
              .error("Tagline shorter than 10 chars could look weird."),
            Rule.max(35).warning(
              "Tagline longer than 35 chars might look a bit long."
            ),
          ],
        }),
        defineField({
          name: "title",
          title: "Two Lines Title",
          type: "array",
          description:
            "Title for the hero section. This should have somewhere between 25 to 35 chars long.",
          validation: (Rule) => Rule.required(),
          of: [
            defineField({
              name: "line1",
              title: "Line 1",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(10)
                  .max(18)
                  .warning(
                    "The sweet spot is between 10 to 18 chars for line."
                  ),
            }),
            defineField({
              name: "line2",
              title: "Line 2",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(10)
                  .max(18)
                  .warning(
                    "The sweet spot is between 10 to 18 chars for line."
                  ),
            }),
          ],
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
          description:
            "Description in the Hero section. This is the paragrpah underneath the Title.",
          validation: (Rule) =>
            Rule.required()
              .min(85)
              .max(150)
              .warning("The sweet spot is between 85 to 150 chars.")
              .error("A description is required"),
        }),
        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",
          description: "Image for the hero section",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          description: "The steps featured in the hero section",
          validation: (Rule) => Rule.required().min(3).max(3).unique(),
          of: [
            defineField({
              name: "step",
              title: "Step",
              type: "string",
              validation: (Rule) => Rule.required().min(10).max(30),
            }),
          ],
        }),
        defineField({
          name: "cta",
          title: "Call to Action",
          type: "string",
          description: "The call to action for the hero section",
          validation: (Rule) => Rule.required().min(2).max(20),
        }),
        defineField({
          name: "ctaLink",
          title: "Call to Action Link",
          type: "url",
          description: "The link for the call to action: '/contact'",
        }),
        defineField({
          name: "mainColor",
          title: "Main Color",
          type: "color",
          description: "The main color for the hero section",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero.title",
      subtitle: "hero.tag",
      media: "hero.image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      const fullTitle = title.join(" ");
      return {
        title: fullTitle,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
