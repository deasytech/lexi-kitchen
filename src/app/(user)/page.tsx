import Banner from "@src/feaures/home/Banner";
import FeaturedDishes from "@src/feaures/home/FeaturedDishes";
import TopCategories from "@src/feaures/home/TopCategories";
import { IFeaturedItems } from "@src/models";
import { getAllFeaturedItemsQueries } from "@src/queries";
import { client } from "@utils/sanity-client";

const getFeaturedItemsAsync = () => {
  return client.fetch(getAllFeaturedItemsQueries);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();
  
  return (
    <div>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedDishes title="Top Dishes" dishes={featuredItems[0].topDishes} />
      <FeaturedDishes title="Best Selling Dishes" dishes={featuredItems[0].bestSellingDishes} />
      <FeaturedDishes title="Most Rated Dishes" dishes={featuredItems[0].mostRatedDishes} />
    </div>
  );
}
