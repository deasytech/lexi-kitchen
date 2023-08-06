"use client";

import { Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import { ICategory } from "@src/models";
import React from "react";
import { categoryCardStyles, categoryWrapperStyles } from "./styles";
import Link from "next/link";

interface ICategoryProps {
  categories: ICategory[];
}

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        {...categoryCardStyles}
      >
        <Image
          src={category.image}
          alt={category.name}
          width={200}
          height={200}
        />
        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

const Categories = ({ categories }: ICategoryProps) => {
  return (
    <Grid
      {...categoryWrapperStyles}
    >
      {categories.map((category, i) => (
        <CategoryCard key={i} category={category} />
      ))}
    </Grid>
  );
};

export default Categories;
