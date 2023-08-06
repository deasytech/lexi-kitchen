import Hero from "@src/components/Hero/Hero";
import Dishes from "@src/feaures/dishes/Dishes";
import { IDish } from "@src/models";
import { getAllDishesQueries } from "@src/queries";
import { client } from "@utils/sanity-client";

const getDishesAsync = () => {
  return client.fetch(getAllDishesQueries);
};

export const revalidate = 60; // revalidate this page every 60 seconds

const DishesPage = async () => {
  const dishes: IDish[] = await getDishesAsync();

  return (
    <>
      <Hero
        heading="Homemade Delicious Meals"
        description="Affordability, Tasty, Nurishing and Amazing Packaging"
        imageUrl="/hero-banner.jpg"
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <Dishes dishes={dishes} />
    </>
  );
};

export default DishesPage;
