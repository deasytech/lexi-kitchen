import { groq } from "next-sanity";

// queries

// return only the name of dishes
// *[_type == 'dish']{name}

// return values for multiple attributes
// *[_type == 'dish']{_id, _type, name}

// category named Rice and its image url
// *[_type=='category' && name == 'Rice']{name,'image': image.asset->url}

// all dishes (name and price) where the price is less than 100
// *[_type=='dish' && price <= 100]{name, price}

// Get all dishes
// Filter out the properties

export const getAllDishesQueries: string = groq`
    *[_type == "dish"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[] {
            caption,
            "url": asset->url
        }
    }
`;

// Fetching Gallery images without caption
// "gallery": gallery[].asset->url | output: ['image-url1', 'image-url2']

// You can also do object spreading as it is called in Javascript
// Get a single dish using the slug
// Spreading all the properties
// Dereference the ones I want

export const query: string = groq`
    *[_type == "dish" && slug.current == $slug][0] {
        ...,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

export const getAllCategoriesQueries = groq`
    *[_type == "category"] {
        "id": _id,
        name,
        "image": image.asset->url 
    }
`;

export const getCategory: string = groq`
*[_type == "dish" && references($id)] {
    ...,
    "id": _id,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{ name, "image": image.asset->url  },
}
`;

export const getCategoryId = groq`*[_type == "category"] {
    "id": _id
  }`;

export const getAllFeaturedItemsQueries = groq`
    *[_type == "featuredDishesAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "image": image.asset->url,
        },
        "bestSellingDishes": bestSellingDishes[]->{
            "id": _id,
            name,
            price,
            rating,
            description,
            "mainImage": mainImage.asset->url,
        },
        "topDishes": topDishes[]->{
            "id": _id,
            name,
            price,
            rating,
            description,
            "mainImage": mainImage.asset->url,
        },
        "mostRatedDishes": mostRatedDishes[]->{
            "id": _id,
            name,
            price,
            rating,
            description,
            "mainImage": mainImage.asset->url,
        }
    }
`;

export const searchQuery: string = groq`
*[_type == "dish" && (name match $searchText || description match $searchText) ] {
  ...,
  "id": _id,
  "slug": slug.current,
    "mainImage": mainImage.asset->url,
    category->{
        name,
        "id": _id,
        "image": image.asset->url
    },
    "gallery": gallery[].asset->url
}
`;
