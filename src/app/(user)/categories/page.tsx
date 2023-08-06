import Hero from "@src/components/Hero/Hero";
import Categories from "@src/feaures/categories/Categories";
import { ICategory } from "@src/models";
import { getAllCategoriesQueries } from "@src/queries";
import { client } from "@utils/sanity-client";
import React from "react";

const getCategoriesAsync = () => {
  return client.fetch(getAllCategoriesQueries);
}

export const revalidate = 60; // revalidate this page every 60 seconds

const CategoriesPage = async () => {
  const categories: ICategory[] = await getCategoriesAsync();

  return (
    <>
      <Hero
        heading="Dishes Categories"
        description="We've got all your favorite dishes."
        imageUrl="/hero-banner.jpg"
        btnLabel="View All Dishes"
        btnLink="/dishes"
      />
      <Categories categories={categories} />
    </>
  );
};

export default CategoriesPage;
