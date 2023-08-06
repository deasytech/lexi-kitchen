export const DishesAndCategoriesSchema = {
    name: 'featuredDishesAndCategories',
    title: 'Featured',
    type: 'document',
    fields: [
      {
        name: 'topCategories',
        title: 'Top Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }],
          },
        ],
      },
      {
        name: 'bestSellingDishes',
        title: 'Best Selling Dishes',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'dish' }],
          },
        ],
      },
      {
        name: 'mostRatedDishes',
        title: 'Most Rated Deals',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'dish' }],
          },
        ],
      },
      {
        name: 'topDishes',
        title: 'Top Dishes',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'dish' }],
          },
        ],
      },
    ],
  };