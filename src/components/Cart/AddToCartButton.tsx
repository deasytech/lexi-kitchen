import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { IDish } from "@src/models";
import { useContext } from "react";

interface IAddToCartButtonProps {
  dish: IDish;
  count?: number;
}

const AddToCartButton = ({ dish, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded("cart", dish.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          rounded="full"
          size="sm"
          w="150px"
          // _hover={{ bgColor: "brand.primaryDark", color: "white" }}
          onClick={() => removeItem("cart", dish.id)}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          rounded="full"
          size="sm"
          w="150px"
          _hover={{ bgColor: "brand.primaryDark", color: "white" }}
          onClick={() => addItem("cart", dish, count)}
        >
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
