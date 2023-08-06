import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { IDish } from "@src/models";
import { useContext } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface IAddToWishlistButtonProps {
  dish: IDish;
}

const AddToWishlistButton = ({ dish }: IAddToWishlistButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);

  return (
    <>
      {isAdded("wishlist", dish.id) ? (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          rounded="full"
          title="Remove from Wishlist"
          _hover={{ bgColor: "transparent" }}
          onClick={() => removeItem("wishlist", dish.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          pos="absolute"
          variant="ghost"
          bgColor="transparent"
          color="red.400"
          rounded="full"
          title="Add from Wishlist"
          _hover={{ bgColor: "transparent" }}
          onClick={() => addItem("wishlist", dish)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};

export default AddToWishlistButton;
