"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";
import { IDish } from "@src/models";
import React, { useContext, useState } from "react";
import { dishDetailsGridStyles, buyNowStyles } from "./styles";
import Rating from "@src/components/Rating";
import { Quantity } from "@src/components/Quantity";
import AddToCartButton from "@src/components/Cart/AddToCartButton";
import CustomBreadcrumb from "@src/components/CustomBreadcrumb";
import { defaultBreadCrubItems, getSubstring } from "@src/helpers";
import { AppContext } from "@src/context/AppContext";
import AddToWishlistButton from "@src/components/Wishlist/AddToWishlistButton";
import Link from "next/link";

interface IDishDetailsProp {
  dish: IDish;
}

const DishDetails = ({ dish }: IDishDetailsProp) => {
  const [quantity, setQuantity] = useState(1);
  const { isAdded, addItem, resetItems } = useContext(AppContext);

  return (
    <>
      <CustomBreadcrumb
        items={[
          ...defaultBreadCrubItems,
          {
            name: dish.category!.name,
            link: `/categories/${dish.category?.id}`,
          },
          {
            name: getSubstring(dish.name, 20),
            link: `/dishes/${dish.slug}`,
          },
        ]}
      />
      <Grid {...dishDetailsGridStyles}>
        <GridItem p="1rem">
          <AddToWishlistButton dish={dish} />
          <Image src={dish.mainImage} alt={dish.name} mx="auto" />
          <Flex>
            {dish.gallery?.length !== 0 &&
              dish.gallery?.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={dish.name}
                  mx="auto"
                  boxSize="70px"
                  rounded="md"
                  shadow="sm"
                  borderWidth="1px"
                  borderColor="gray.100"
                />
              ))}
          </Flex>
        </GridItem>
        <GridItem p="1rem">
          <Heading>{dish.name}</Heading>
          <Text my="1rem">{dish.description}</Text>
          <Rating rating={dish.rating} />
          <Text fontWeight="bold" fontSize="2rem">
            ${dish.price}
          </Text>
          <Divider my="1rem" />
          <Quantity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdded("cart", dish.id)}
          />
          <Divider my="1rem" />

          <Box>
            <Link href="/checkout">
              <Button
                {...buyNowStyles}
                onClick={() => {
                  resetItems("checkout");
                  addItem("checkout", dish, quantity);
                }}
              >
                Order Now
              </Button>
            </Link>
            <AddToCartButton dish={dish} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Delivery</Text>
              <ChakraLink textDecor="underline" color="gray.500">
                Purchase items above $999.99 to activate the free delivery
              </ChakraLink>
            </Box>

            {/* <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <ChakraLink textDecor="underline"> Details</ChakraLink>
              </Text>
            </Box> */}
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default DishDetails;
