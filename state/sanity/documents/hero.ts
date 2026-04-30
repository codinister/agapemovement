import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'motto',
      title: 'Motto',
      type: 'string',
      validation: (Rule) => Rule.required().error('Motto field required!'),
    }),
    defineField({
      name: 'image', 
      title: 'Image',
      type: 'image', 
      options: {
        hotspot: true
      }
    })
  ],
});
