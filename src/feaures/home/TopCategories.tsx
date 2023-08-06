"use client";

import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import SectionHeadings from "@src/components/SectionHeadings";
import { topCatWrapperStyles, topCategoryCardStyles } from "./styles";
import { ICategory } from "@src/models";
import { categories } from "@mocks/categories";

interface ITopCategoriesProps {
  categories: ICategory[];
}

interface ITopCategoryProps {
  category: ICategory;
}

const TopCategoryCard = ({category}: ITopCategoryProps) => {
  return (
    <Card {...topCategoryCardStyles}>
      <Image
        src={category.image}
        alt={category.slug}
        width={100}
        height={100}
      />
      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
      </CardBody>
    </Card>
  );
};

const TopCategories = ({ categories }: ITopCategoriesProps) => {
  return (
    <Box {...topCatWrapperStyles}>
      <SectionHeadings title="Order Our Top Categories" />

      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
          <TopCategoryCard category={category} />
        </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TopCategories;
