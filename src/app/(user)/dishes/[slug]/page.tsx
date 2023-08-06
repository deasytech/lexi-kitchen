import DishDetails from "@src/feaures/dishes/DishDetails";
import { IDish } from "@src/models";
import { query } from "@src/queries";
import { client } from "@utils/sanity-client";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // revalidate this page every 60 seconds

const DishDetailsPage = async ({ params: { slug } }: Props) => {
  const dish: IDish = await client.fetch(query, { slug });
  return (
    <>
      <DishDetails dish={dish} />
    </>
  );
};

export default DishDetailsPage;
