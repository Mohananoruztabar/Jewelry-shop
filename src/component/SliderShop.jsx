"use client";
import React from "react";
import Container from "./Container";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function SliderShop({category}) {
  const router = useRouter();

  
  const categories = [
    { id: 1, name: "CHAIN", slug: "chain", image: "cat_64-150x150.webp" },
    { id: 2, name: "EARRINGS", slug: "earrings", image: "cat04-150x150.webp" },
    { id: 3, name: "GIFT SET", slug: "giftset", image: "cat_59-150x150.webp" },
    { id: 4, name: "STARFISH", slug: "starfish", image: "cat02-150x150.webp" },
    { id: 5, name: "STERLING", slug: "sterling", image: "cat_44-150x150.webp" },
    { id: 6, name: "BRACELET", slug: "bracelet", image: "cat_53-150x150.webp" },
    { id: 7, name: "WATCH", slug: "watch", image: "cat05-150x150.webp" },
    { id: 8, name: "RINGS", slug: "rings", image: "cat41-150x150.webp" },
  ];

  const handleCategoryClick = (slug) => {
    router.push(`/store/category/${slug}`);
  };
  

  return (
    <div>
      <Container>
        <div className="relative mt-5">
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation
            modules={[Autoplay, Navigation]}
            slidesPerView={6}
            spaceBetween={10}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 35,
              },
            }}
            className="mySwiper mySwiperShop"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <button
                  onClick={() => handleCategoryClick(cat.slug)}
                  className="w-[190px] flex justify-center items-center h-[250px] rounded-lg border-trans transition-colors duration-200 border hover:border-pink mx-auto"
                >
                  <div>
                    <figure>
                      <img src={cat.image} alt={cat.name} />
                    </figure>
                    <figcaption className="text-[15px] border-b-2 border-pink w-fit mx-auto">
                      {cat.name}
                    </figcaption>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default SliderShop;
