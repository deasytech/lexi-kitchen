import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Rating from "./Rating";
import AddToCartButton from "./Cart/AddToCartButton";
import { IDish } from "@src/models";
import { getSubstring } from "@src/helpers";
import AddToWishlistButton from "./Wishlist/AddToWishlistButton";
import Link from "next/link";

interface IDishCardProps {
  dish: IDish;
}

const DishCard = ({ dish }: IDishCardProps) => {
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <AddToWishlistButton dish={dish} />
      <CardBody>
        <Link href={`/dishes/${dish.slug}`}>
          <Box
            boxSize="200px"
            bg={`center / contain no-repeat url(${dish.mainImage})`}
            mx="auto"
            borderRadius="lg"
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/dishes/${dish.slug}`}>
              <Heading size="sm">{getSubstring(dish.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">$</Text>
              <Text fontSize="xl">{dish.price}</Text>
            </Flex>
          </Flex>
          <Text>{getSubstring(dish.description, 30)}</Text>
          <Rating rating={dish.rating} />
          <AddToCartButton dish={dish} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DishCard;
