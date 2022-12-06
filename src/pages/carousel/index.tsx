import React from "react";
import Carousel from "../../components/carousel/Carousel";

const banners = [
  "https://via.placeholder.com/600x400/92c952",
  "https://via.placeholder.com/600x400/771796",
  "https://via.placeholder.com/600x400/24f355",
  "https://via.placeholder.com/600x400/f0f355",
  "https://via.placeholder.com/600x400/840355",
];

const CarouselPage = () => {
  return <Carousel banners={banners} />;
};

export default CarouselPage;
