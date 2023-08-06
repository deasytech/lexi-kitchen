import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import { IDish } from "@src/models";
import { client } from "@utils/sanity-client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { dropdownStyles, inputGroup, searchInputStyles } from "./styles";
import { searchQuery } from "@src/queries";

const Search = () => {
  const ref = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dishes, setDishes] = useState<IDish[]>([]);

  useOutsideClick({
    ref: ref,
    handler: () => {
      setIsModalOpen(false);
      setDishes([]);
    },
  });

  const fetchDishes = async () => {
    setIsLoading(true);
    const dishes: IDish[] = await client.fetch(searchQuery, {
      searchText: `*${searchText}*`,
    });
    setDishes(dishes);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchDishes();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <Box pos="relative" w={{ base: "100%", lg: "32rem" }} ref={ref}>
      <InputGroup {...inputGroup}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          {...searchInputStyles}
          value={searchText}
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>

      {isModalOpen && (
        <Box
          {...dropdownStyles}
        >
          {dishes.length === 0 ? (
            isLoading ? (
              <>Loading...</>
            ) : (
              <> No Dishes Found</>
            )
          ) : (
            <SearchedDishList dishes={dishes} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default Search;

interface SearchedDishListProps {
  dishes: IDish[];
}

const SearchedDishList = ({ dishes }: SearchedDishListProps) => {
  return (
    <>
      {dishes.map((dish) => (
        <Link key={dish.id} href={`/dishes/${dish.slug}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            p="2"
            _hover={{ bgColor: "gray.100" }}
          >
            <Flex align="center">
              <Image
                alt={dish.name}
                src={dish.mainImage}
                boxSize="24px"
                mr="10px"
              />
              <Text>{dish.name}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{dish.category?.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};
