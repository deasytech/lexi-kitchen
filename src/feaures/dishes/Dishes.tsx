"use client";

import { Button, Flex } from "@chakra-ui/react";
import { usePagination } from "@mantine/hooks";
import DishCard from "@src/components/DishCard";
import { IDish } from "@src/models";
import { useState } from "react";

interface IDishesProps {
  dishes: IDish[];
}

const itemsPerPage = 10;

const Dishes = ({ dishes }: IDishesProps) => {
  const [visibleDishes, setVisibleDishes] = useState(
    dishes.slice(0, itemsPerPage)
  );

  const total = Math.ceil(dishes.length / itemsPerPage);
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setVisibleDishes(dishes.slice(start, end));
    },
  });

  return (
    <>
      <Flex
        flexWrap="wrap"
        w={{ base: "100%", lg: "90%" }}
        mx="auto"
        justify={{ base: "center", lg: "space-between" }}
      >
        {visibleDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Flex>

      {itemsPerPage < dishes.length && (
        <Flex
          justify="center"
          w={{ base: '100%', lg: '90%' }}
          mx="auto"
          py="2rem"
        >
          {pagination.range.map((range) =>
            range === 'dots' ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}
              >
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primary"
                color={pagination.active === range ? 'white' : 'brand.primary'}
                bgColor={
                  pagination.active === range ? 'brand.primary' : 'white'
                }
                mx="1"
                key={range}
                _active={{ bgColor: 'none' }}
                _hover={{ bgColor: 'none' }}
              >
                {range}
              </Button>
            )
          )}
        </Flex>
      )}
    </>
  );
};

export default Dishes;
