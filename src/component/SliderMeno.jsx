"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "./Container";
import { useRouter } from "next/navigation";

export default function IconSlider() {
  const router = useRouter();
  
  const [slides] = useState([
    { src: "/rings.svg", slug: "rings", name: "rings" },
    { src: "/bracelet.svg", slug: "bracelet", name: "bracelet" },
    { src: "/chain.svg", slug: "chain", name: "chain" },
    { src: "/choker.svg", slug: "choker", name: "choker" },
    { src: "/cufflinks.svg", slug: "cufflinks", name: "cufflinks" },
    { src: "/earrings.svg", slug: "earrings", name: "earrings" },
    { src: "/gemstone.svg", slug: "gemstone", name: "gemstone" },
    { src: "/gift.svg", slug: "giftset", name: "gift" },
    { src: "/necklace.svg", slug: "necklace", name: "necklace" },
    { src: "/watch.svg", slug: "watch", name: "watch" },
  ]);

  const handleIconClick = (slug) => {
    router.push(`/store/category/${slug}`);
  };

  return (
    <Container>
      <div className="p-6 mt-20">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}        
          spaceBetween={12} 
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false,
          }}                     
          className="para2"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <button 
                onClick={() => handleIconClick(item.slug)}
                className="flex flex-col items-center p-3 bg-gray-100 rounded-lg hover:bg-white transition-colors duration-200 border-2 border-transparent hover:border-pink w-[100px] mx-auto"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <img
                    src={item.src}
                    alt={`icon-${item.name}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-xs text-gray-600 capitalize">
                  {item.name}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}