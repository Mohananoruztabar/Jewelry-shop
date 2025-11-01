import Container from '@/component/Container'
import React from 'react'

function AboutUs() {
  return (
    <div>
        <Container>
            <h3 className='text-3xl mt-15'>ABOUT US</h3>
            <section className='mt-10'>
                <p>Welcome to our online jewelry store! We are a team of passionate jewelers who strive to bring the best and most exquisite pieces to our customers. Our journey began with a simple idea: to create a space where everyone can find something special to cherish and wear every day.We believe that jewelry is not just an accessory, but an extension of one's personality and individuality. Our collection is carefully curated to reflect this belief, with each piece being handpicked for its timeless elegance and unparalleled quality.</p>
                <div className='grid grid-cols-4 grid-rows-2 gap-3 mt-10'>
                    <figure className='grid col-span-2 row-span-2'>
                        <img src="/about-1.webp" alt="" />
                    </figure>
                    <figure className='grid col-span-1 row-span-1'>
                        <img src="/about-2.webp" alt="" />
                    </figure>
                    <figure className='grid col-span-1 row-span-1'>
                        <img src="/about-4.webp" alt="" />
                    </figure>
                    <figure>
                        <img src="/about-5.webp" alt="" />
                    </figure>
                    <figure>
                        <img src="/about-3.webp" alt="" />
                    </figure>
                </div>
                <h4 className='text-3xl mt-10'>OUR STORY</h4>
               <p className='mt-10'>At Joice Jewelry, our journey began with a simple yet profound passion for creating timeless  beauty through exquisite jewelry. Founded in the heart of a vibrant artisan community, our brand was born from a love for intricate craftsmanship and the desire to bring unique, high-quality pieces to discerning customers around the world. Each piece in our collection is meticulously designed and handcrafted, reflecting our commitment to excellence and our deep appreciation for the art of jewelry making.</p>
                <p className='mt-8'>
                    Our founder, Joice, has always been inspired by the elegance and allure of fine jewelry. With a background in design and a keen eye for detail, Joice set out to create a brand that would stand apart in an industry filled with mass-produced pieces. By collaborating with skilled artisans and sourcing the finest materials, we ensure that every item in our collection tells a story of dedication, artistry, and love. From classic styles to contemporary designs, Joice Jewelry offers something special for every occasion, making each moment memorable and extraordinary.
                </p>
                <p className='mt-8'>At Joice Jewelry, we believe that jewelry is more than just an accessory; it's a form of self-expression and a way to celebrate life's precious moments. Our mission is to provide our customers with beautiful, high-quality pieces that they can cherish for a lifetime. We are proud to be a part of your journey, offering not only stunning jewelry but also exceptional service and a personalized shopping experience. Join us in celebrating the art of fine jewelry and discover the perfect piece that resonates with your unique style and story</p>
            </section>
            <div className='mt-10'>
                <video controls poster='/video.webp' src="/video.mp4"></video>
            </div>
        </Container>
        <div className='bg-primary mt-15'>
            <Container>
                 <section className='py-20'>
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
               </section>
            </Container>
        </div>
    </div>
  )
}

export default AboutUs