import React from 'react';
import { Flex, Text } from "@chakra-ui/react";
import { colors } from "@src/theme";
import ReactStars from "react-stars";
import { IRating } from '@src/models';

interface IRatingProps {
  rating: IRating;
}

const Rating = ({rating}: IRatingProps) => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={rating.rate}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text ml="5px">({rating.count})</Text>
    </Flex>
  );
};

export default Rating;
