export const DishSchema = {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of Dish',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'category',
        title: 'Dish Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'gallery',
        title: 'Gallery Images',
        type: 'array',
        of: [{ type: 'galleryImage' }],
        options: {
          maxLength: 3,
        },
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'object',
        fields: [
          {
            name: 'rate',
            title: 'Rate',
            type: 'number',
          },
          {
            name: 'count',
            title: 'Count',
            type: 'number',
          },
        ],
      },
    ],
  };