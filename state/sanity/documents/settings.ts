import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title field required!'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required().error('Location field required!'),
    }),
    defineField({
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
      validation: (Rule) => Rule.required().error('Phone field required!'),
    }),
    defineField({
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().error('Email field required!'),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whatsapp',
      title: 'Whatsapp',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
});
