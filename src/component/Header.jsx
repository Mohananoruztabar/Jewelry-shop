"use client"
import React, { useState , useEffect , useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { gsap } from "gsap";
import SplitType from 'split-type'

export default function Header() {
  const [progress, setProgress] = useState(0);
  const slideRefs = useRef([]);

  const animateSlide = (index) => {
    const currentSlide = slideRefs.current[index];
    if (!currentSlide) return;

    const h6 = currentSlide.querySelector("h6");
    if (h6) {
      const splitH6 = new SplitType(h6, { types: 'chars, words' });
      gsap.from(splitH6.chars, {
        opacity: 0,
        y: -30,
        stagger: 0.05,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.3
      });
    }


    const h3 = currentSlide.querySelector("h3"); 
    gsap.fromTo(h3, { x: -300, opacity : 0}, { duration: 1, delay: 1  , x : 0 , opacity : 1 , ease: "power2.out" });
   
    const p = currentSlide.querySelector("p");
    gsap.fromTo(p, { yPercent: 150, }, { duration: 1, delay: 1 , yPercent : 0  });

    const btn = currentSlide.querySelector("button")
    gsap.fromTo(btn , { xPercent : -180 }, { duration: 1.5 , delay: 0.5 , xPercent : 0})

  };

  return (
    <div className='relative'>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => animateSlide(swiper.realIndex)}
        onAutoplayTimeLeft={(swiper, time, progress) => {
          setProgress((1 - progress) * 100);
        }}
        onSlideChangeTransitionStart={() => setProgress(0)}
        className="relative overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div ref={el => slideRefs.current[0] = el} className='grid grid-cols-2 '>
            <div className='m-18 text-left pt-22 pl-8 overflow-hidden'>
              <h6 className="text-[15px] text-gray-500 mb-3 ml-2">TIMELESS BEAUTY</h6>
              <h3 className='font-bold text-5xl w-[85%] mb-8'>JEWELRY SETS GET UP TO 10% OFF</h3>
              <div className='overflow-hidden'>
                <p className='animate-text text-gray-600 w-[55%] m-3'>Sparlle and Save:Enjoy our stunning jewelry collection at discounted prices!</p>
              </div>
              <button className='animate-text border m-3 mt-8 px-8 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:transition-all hover:duration-400'>
                shop now <i className='ri-arrow-right-long-line opacity-0 group-hover:opacity-100'></i>
              </button>
            </div>
            <figure>
              <img src="/slide-1-asset-2-1.webp" alt="" />
            </figure>
          </div> 
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div ref={el => slideRefs.current[1] = el} className='grid grid-cols-2'>
            <div className='m-18 text-left pt-22 pl-8 overflow-hidden'>
              <h6 className="text-[15px] text-gray-500 mb-3 ml-2">NEW COLLECTION</h6>
              <h3 className='font-bold text-5xl w-[85%] mb-8'>FANCY JEWELERY</h3>
              <div className='overflow-hidden'>
                <p className='animate-text text-gray-600 w-[78%] m-3'>Jewelery Joice a fresh and conceptual in the world of jewelry. You will get a unique, one-of-a-kind decoration that will suit you better than any other.</p>
              </div>
              <button className='animate-text border m-3 mt-8 px-8 py-2 flex items-center justify-center gap-2 overflow-hidden hover:bg-black hover:text-white hover:transition-all hover:duration-400'>
                shop now <i className='ri-arrow-right-long-line opacity-0 group-hover:opacity-100'></i>
              </button>
            </div>
            <figure>
              <img src="/slide-1-asset-3.webp" alt="" />
            </figure>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div ref={el => slideRefs.current[2] = el} className='grid grid-cols-2'>
            <div className='m-18 text-left pt-22 pl-8 overflow-hidden'>
              <h6 className='text-[15px] text-gray-500 mb-3 ml-2'>MODERN CHARM</h6>
              <h3 className='font-bold text-5xl w-[95%] m-2 mb-8'>ELEGANT COLLECTION FOR YOUR LADY</h3>
              <div className='overflow-hidden'>
                <p className='animate-text text-gray-600 w-[50%] m-3'>More than just an accessory, its a reflection of your individuality.</p>
                
              </div>
              <button className='animate-text border m-3 mt-8 px-8 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:transition-all hover:duration-400'>
                shop now <i className='ri-arrow-right-long-line opacity-0 group-hover:opacity-100n text-white'></i>
                
              </button>
            </div>
            <figure>
              <img src="/slide-1-asset-4.webp" alt="" />
            </figure>
          </div>
        </SwiperSlide>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-secondery z-10">
          <div
            className="h-full bg-white opacity-100 shadow-3xl transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Swiper>
    </div>
  );
}