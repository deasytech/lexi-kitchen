"use client";

import { Box } from "@chakra-ui/react";
import DishCard from "@src/components/DishCard";
import SectionHeadings from "@src/components/SectionHeadings";
import SwiperNavButons from "@src/components/SwiperNavButons";
import { IDish } from "@src/models";
import React, { CSSProperties } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

interface featuredDishesProps {
  title: string;
  dishes: IDish[];
}

const FeaturedDishes = ({ title, dishes }: featuredDishesProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" p="2rem">
      <SectionHeadings title={title} />
      <Swiper {...sliderSettings} style={{ width: "100%", height: "100%" }}>
        {dishes && dishes.map((dish) => (
          <SwiperSlide key={dish.id} style={slideStyles}>
            <DishCard dish={dish} />
          </SwiperSlide>
        ))}
        <SwiperNavButons />
      </Swiper>
    </Box>
  );
};

export default FeaturedDishes;
