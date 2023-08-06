import CustomBreadcrumb from "@src/components/CustomBreadcrumb";
import Hero from "@src/components/Hero/Hero";
import Dishes from "@src/feaures/dishes/Dishes";
import { defaultBreadCrubItems } from "@src/helpers";
import { ICategory, IDish } from "@src/models";
import { getCategory, getCategoryId } from "@src/queries";
import { client } from "@utils/sanity-client";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const categories: ICategory[] = await client.fetch(getCategoryId);

  return categories.map((category) => ({
    id: category.id,
  }));
}

const CategoryPage = async ({ params: { id } }: Props) => {
  const dishes: IDish[] = await client.fetch(getCategory, { id });

  return (
    <>
      <Hero
        heading={dishes[0]?.category!.name}
        description={`Delicious and Affordable ${dishes[0]?.category!.name}`}
        imageUrl={dishes[0]?.category!.image}
        btnLabel="View All Categories"
        btnLink="/categories"
      />
      <CustomBreadcrumb
        items={[
          ...defaultBreadCrubItems,
          { name: dishes[0]?.category!.name, link: "#" },
        ]}
      />
      <Dishes dishes={dishes} />
    </>
  );
};

export default CategoryPage;
