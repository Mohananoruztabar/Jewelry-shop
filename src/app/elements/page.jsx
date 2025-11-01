"use client"
import Container from '@/component/Container'
import React, { useEffect , useRef } from 'react'
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay , Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import AccordionRight from '@/component/AccordionRight';


function Elements() {

  const leftRef = useRef(null)
  const bottomRef = useRef(null)
  const topRef = useRef(null)

  useEffect(() => {

   if (!leftRef.current || !bottomRef.current || !topRef.current) return

    const btn = leftRef.current.querySelector("button");
    const h3 = leftRef.current.querySelector("h3");
    const p = leftRef.current.querySelectorAll("p");

    gsap.fromTo(btn, { xPercent: 300 }, { duration: 1.3, delay: 1, xPercent: 0 });
    gsap.fromTo(h3, { x: 300, opacity: 0 }, { duration: 1, delay: 0.8, x: 0, opacity: 1, ease: "power2.out" });
    gsap.fromTo(p, { x: 300, opacity: 0 }, { duration: 1.2, delay: 0.9, x: 0, opacity: 1, ease: "power2.out" });

    const bottomItems = bottomRef.current.querySelectorAll("h3, p, button")
      gsap.fromTo(
      bottomItems,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay : 2 ,stagger: 0.2, ease: "power2.out" }
    )
    const topItems = topRef.current.querySelectorAll("h3, p, button")
      gsap.fromTo(
      topItems,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay : 3 ,stagger: 0.2, ease: "power2.out" }
    )
  } , [])
  
  

  
  
  return (
    <div>
      <Container>
        <h3 className='mt-10 text-3xl'>UI Elements & Animations</h3>
        <div className='flex mt-10 overflow-hidden' ref={leftRef}>
          <figure>
            <img src="/blog1.webp" alt="" />
          </figure>
          <div className='mx-5 py-10'>
            <h3 className='font-bold text-3xl'>JEWELRY TELLS <span className='text-pink block'>A GREAT STORY</span></h3>
            <p className='mt-5 text-zinc-600'>We hand-craft our high-end silver and gold jewelry in our own production sites and our teams oversee each stage of the process. We create jewels every day.</p>
            <p className='mt-5 text-gray-600'>We ensure a quick turnaround time, international shipping, best prices, and extremely well-finished jewelry pieces.</p>
            <button className='px-10 py-4 border mt-5 hover:bg-black hover:text-white group'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
          </div>
        </div>
      </Container>
    <div className='bg-ngray w-full py-10 mt-15 pb-15'>
      <Container >
        <div className='flex flex-col md:flex-row items-center justify-between gap-10' ref={bottomRef}>
          <div className='mx-5 w-full md:w-1/2 px-6'>
            <h3 className='font-bold text-3xl'>JEWELRY TELLS <span className='text-pink block'>A GREAT STORY</span></h3>
            <p className='mt-5 text-zinc-600'>We hand-craft our high-end silver and gold jewelry in our own production sites and   our teams oversee each stage of the process. We create jewels every day.</p>
            <p className='mt-5 text-gray-600'>We ensure a quick turnaround time, international shipping, best prices, and extremely   well-finished jewelry pieces.</p>
            <button className='px-10 py-4 border mt-5 bg-pink text-white'><i className="ri-youtube-line text-2xl"></i> Discover more</button>
          </div>
          <div className='w-full md:w-1/2 mt-10 md:mt-0'>
          <Swiper
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            modules={[Autoplay , Pagination, Mousewheel, Keyboard]}
            className="mySwiper">
            <SwiperSlide>
              <img src="/blog2-660x440.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/blog4-660x440.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/blog6-660x440.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/blog7-660x440.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/blog8-660x440.webp" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </Container>
    </div>
    <Container>
      <div className='flex mt-15'>
        <div className=''>
          <div className='grid grid-cols-2 gap-4'>
            <figure>
              <img className='w-[300px]' src="/blog7-660x440.webp" alt="" />
            </figure>
            <figure>
              <img className='w-[300px]' src="/blog8-660x440.webp" alt="" />
            </figure>
            <figure>
              <img className='w-[300px]' src="/blog2-660x440.webp" alt="" />
            </figure>
            <figure>
              <img className='w-[300px]' src="/blog4-660x440.webp" alt="" />
            </figure>
          </div>
        </div>
        <div className='mx-5 w-full md:w-1/2 px-6' ref={topRef}>
          <h3 className='font-bold text-3xl'>JEWELRY TELLS <span className='text-pink block'>A GREAT STORY</span></h3>
          <p className='mt-5 text-zinc-600'>We hand-craft our high-end silver and gold jewelry in our own production sitesand   our teams oversee each stage of the process. We create jewels every day.</p>
          <p className='mt-5 text-gray-600'>We ensure a quick turnaround time, international shipping, best prices, andextremely   well-finished jewelry pieces.</p>
          <button className='px-18 py-5 rounded-4xl mt-5 bg-pink-200 text-black hover:text-white hover:bg-black'>Discover more</button>
        </div>
      </div>
    </Container>
    <div className='mt-10 bg-fixed bg-top bg-cover h-[500px]' style={{ backgroundImage: "url('/parallax.webp')" }}>
      <div className='mx-5 w-full md:w-1/2 px-6 pt-20' ref={bottomRef}>
        <h3 className='font-bold text-3xl'>Parallax Background <span className='text-pink block'>With Gradient Overlay</span></h3>
        <p className='mt-5 text-zinc-600'>We hand-craft our high-end silver and gold jewelry in our own production sitesand   our teams oversee each stage of the process. We create jewels every day.</p>
        <p className='mt-5 text-gray-600'>We ensure a quick turnaround time, international shipping, best prices, andextremely   well-finished jewelry pieces.</p>
        <button className='px-10 py-4 border mt-5 hover:bg-black hover:text-white group'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
      </div>
    </div>
    <Container>
      <h3 className='mt-15 text-3xl text-center'>UI Elements & Animations</h3>
      <div className='grid grid-cols-4 justify-center gap-6 mt-15'>
        <article className='bg-ngray w-[290px] grid place-items-center text-center pt-10'>
          <figure>
            <img className='w-[50px]' src="/feature1.svg" alt="" />
          </figure>
          <div className='py-10'>
            <h4 className='text-[15px]'>EASY PAYMENTS</h4>
            <p className='mt-5 text-gray-700'>Enjoy flexible, stress-free shopping with our Easy Payments plan.</p>
          </div>
        </article>
        <article className='bg-ngray w-[290px] grid place-items-center text-center pt-10'>
          <figure>
            <img className='w-[50px]' src="/feature4.svg" alt="" />
          </figure>
          <div className='py-10'>
            <h4 className='text-[15px]'>ORIGIANL STONES</h4>
            <p className='mt-5 text-gray-700'>Explore our collection of jewelry crafted with original, authentic stones</p>
          </div>
        </article>
        <article className='bg-ngray w-[290px] grid place-items-center text-center pt-10'>
          <figure>
            <img className='w-[50px]' src="/feature3.svg" alt="" />
          </figure>
          <div className='py-10'>
            <h4 className='text-[15px]'>COUPONS & OFFERS</h4>
            <p className='mt-5 text-gray-700'>Save more with our exclusive coupons and special offers on stunning jewelry pieces.</p>
          </div>
        </article>
        <article className='bg-ngray w-[290px] grid place-items-center text-center pt-10'>
          <figure>
            <img className='w-[50px]' src="/feature2.svg" alt="" />
          </figure>
          <div className='py-10'>
            <h4 className='text-[15px]'>GIFT CARTS</h4>
            <p className='mt-5 text-gray-700'>Give the perfect present with our customizable gift cards, ideal for any jewelry lover.</p>
          </div>
        </article>
      </div>
    </Container>
    <div className='mt-10 bg-fixed bg-top bg-cover h-[580px]' style={{ backgroundImage: "url('/fixed.webp')" }}>
      <div className='w-full md:w-2/3 h-full px-30 py-30 para' ref={bottomRef} style={{backgroundColor : "#f5d5be"} }>
        <h3 className='font-bold text-3xl'>Parallax Background <span className='text-pink block'>With Gradient Overlay</span></h3>
        <p className='mt-5 text-zinc-600 w-[70%]'>We hand-craft our high-end silver and gold jewelry in our own production sitesand   our teams oversee each stage of the process. We create jewels every day.</p>
        <p className='mt-5 text-gray-600 w-[70%]'>We ensure a quick turnaround time, international shipping, best prices, andextremely   well-finished jewelry pieces.</p>
        <button className='px-10 py-4 mt-10 hover:bg-white hover:text-black group bg-black border text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
      </div>
    </div>
    <Container>
      <h3 className='mt-15 text-3xl text-center'>Pricing Tables</h3>
      <section className='flex gap-6 mt-15'>
        <div className='border border-trans h-[550px] grid place-items-center'>
          <div className='mt-7'>
            <span className='text-5xl'>$199.99</span>
            <span className='block mx-15 text-gray-600'>per year</span>
          </div>
          <h4 className='text-2xl'>Basic Package</h4>
          <ul className=''>
            <li className='px-10 py-3'>- Cleaning & Polishing (up to 3 pieces)</li>
            <li className='px-10 py-3'>- Annual inspection of all prongs</li>
            <li className='px-10 py-3'>- Minor Repairs (up to 2 free)</li>
            <li className='px-10 py-3'>- 5% discount on additional services and repairs.</li>
          </ul>
          <button className='px-10 py-4 mb-4 hover:bg-pink hover:text-black group bg-black  text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
        </div>
        <div className='border border-trans h-[550px] grid place-items-center'>
          <div className='mt-7'>
            <span className='text-5xl'>$299.99</span>
            <span className='block mx-15 text-gray-600'>per year</span>
          </div>
          <h4 className='text-2xl'>Silver Package</h4>
          <ul>
            <li className='px-10 py-3'>- Cleaning & Polishing (up to 3 pieces)</li>
            <li className='px-10 py-3'>- Annual inspection of all prongs</li>
            <li className='px-10 py-3'>- Minor Repairs (up to 2 free)</li>
            <li className='px-10 py-3'>- 5% discount on additional services and repairs.</li>
          </ul>
          <button className='px-10 py-4 mb-4 hover:bg-pink hover:text-black group bg-black  text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
        </div>
        <div className='border border-trans h-[550px] grid place-items-center bg-trans'>
          <div className='mt-7'>
            <span className='text-5xl'>$399.99</span>
            <span className='block mx-15 text-gray-600'>per year</span>
          </div>
          <h4 className='text-2xl'>Gold Package</h4>
          <ul>
            <li className='px-10 py-3'>- Cleaning & Polishing (up to 3 pieces)</li>
            <li className='px-10 py-3'>- Annual inspection of all prongs</li>
            <li className='px-10 py-3'>- Minor Repairs (up to 2 free)</li>
            <li className='px-10 py-3'>- 5% discount on additional services and repairs.</li>
          </ul>
          <button className='px-10 py-4 mb-4 hover:bg-black hover:text-black group bg-pink text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
        </div>
        <div className='border border-trans h-[550px] grid place-items-center'>
          <div className='mt-7'>
            <span className='text-5xl'>$499.99</span>
            <span className='block mx-15 text-gray-600'>per year</span>
          </div>
          <h4 className='text-2xl'>Platinum Package</h4>
          <ul>
            <li className='px-10 py-3'>- Cleaning & Polishing (up to 3 pieces)</li>
            <li className='px-10 py-3'>- Annual inspection of all prongs</li>
            <li className='px-10 py-3'>- Minor Repairs (up to 2 free)</li>
            <li className='px-10 py-3'>- 5% discount on additional services and repairs.</li>
          </ul>
          <button className='px-10 py-4 mb-4 hover:bg-pink hover:text-black group bg-black  text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
        </div>
      </section>
    </Container>
    <section className='mt-15 relative'>
      <video muted autoPlay controls loop className='object-cover w-full h-[600px] relative ' src="/video.mp4"></video>
      <div className='absolute top-0 left-0 w-full h-full bg-pink-300/40 z-10'></div>
      <div className='w-full md:w-2/3 h-full px-30 py-30 absolute top-0 left-0 z-30' ref={bottomRef} >
        <h3 className='font-bold text-3xl'>Video Background With <span className='block'>Gradient Overlay</span></h3>
        <p className='mt-5 text-zinc-600 w-[70%]'>We hand-craft our high-end silver and gold jewelry in our own production sitesand   our teams oversee each stage of the process. We create jewels every day.</p>
        <p className='mt-5 text-gray-600 w-[70%]'>We ensure a quick turnaround time, international shipping, best prices, andextremely   well-finished jewelry pieces.</p>
        <button className='px-10 py-4 mt-5 hover:bg-white hover:text-black group bg-black border text-white'>Discover more <i className="ri-arrow-right-long-line hidden group-hover:inline-block"></i></button>
      </div>
    </section>
    <Container>
      <div className='flex mt-15 h-[500px]'>
        <AccordionRight />
      </div>
    </Container>
    <section className='bg-ngray'>
      <Container>
        <h3 className='text-center pt-15 text-3xl'>Clients Testimonials</h3>
        <div className='grid grid-cols-3 gap-6 mt-15 pb-15'>
          <div className='bg-white w-[380px] h-[200px]'>
            <p className='p-5'>The necklace I purchased is absolutely stunning! The craftsmanship is impeccable, and it adds a touch of elegance!</p>
            <article className='flex'>
              <figure className=''>
                <img className='imdfg' src="/slide-1-asset-2-1.webp" alt="" />
              </figure>
              <div>
                <h4 className='m-2'>Emily.R</h4>
                <i className="ri-star-line text-pink ml-2"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
              </div>
            </article>
          </div>
          <div className='bg-white w-[380px] h-[200px]'>
            <p className='p-5'>My custom engagement ring exceeded all my expectations. The detail and quality are phenomenal, my fiancée couldn't be happier.</p>
            <article className='flex'>
              <figure>
                <img className='imdfg' src="/slide-1-asset-3.webp" alt="" />
              </figure>
              <div>
                <h4 className='m-2'>Lisa k.</h4>
                <i className="ri-star-line text-pink ml-2"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
              </div>
            </article>
          </div>
          <div className='bg-white w-[380px] h-[200px]'>
            <p className='p-5'>I adore the vintage bracelet I got from this shop. It’s beautifully designed and feels like a unique piece of history.</p>
            <article className='flex'>
              <figure>
                <img className='imdfg' src="/slide-1-asset-4.webp" alt="" />
              </figure>
              <div>
                <h4 className='m-2'>Sarah M.</h4>
                <i className="ri-star-line text-pink ml-2"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
                <i className="ri-star-line text-pink"></i>
              </div>
            </article>
          </div>
        </div>
      </Container>
      
    </section>
  </div>
  )
}

export default Elements
