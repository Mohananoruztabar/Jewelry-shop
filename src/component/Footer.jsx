import React from 'react'
import Container from './Container'
import Link from 'next/link'

function Footer() {
  return (
    <div className='mt-20 border border-trans'>
        <Container>
            <section className='flex justify-between mt-15 mb-20'>
                <div className=''>
                   <figure>
                        <img className='w-[200px]' src="/logo.svg" alt="" />
                    </figure> 
                    <figcaption className='w-[400px] mt-4'>Unleash the radiance of your inner beauty with our premium jewelry brand - a perfect blend of sophistication and style.</figcaption>
                </div>
                <div className='flex gap-15'>
                    <div>
                        <h4 className='font-bold mb-5'>ACCOUNT</h4>
                        <ul>
                            <Link href="/loging"><li className='my-3 hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Loging</li></Link>
                            <Link href="/loging"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Orders</li></Link>
                            <Link href="/loging"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Addresses</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-5'>CATAIOG</h4>
                        <ul>
                            <Link href="/shop"><li className='my-3 hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Shop by category</li></Link>
                            <Link href="/shop"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Shop by brand</li></Link>
                            <Link href="/shop"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Promotions</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-bold mb-5'>HELP</h4>
                        <ul>
                            <Link href="/aboutUs"><li className='my-3 hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>About us</li></Link>
                            <Link href="/"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>Contact us</li></Link>
                            <Link href="/"><li className='my-3  hover:text-pink hover:border-b hover:border-b-pink ease-in-out duration-200'>F&R</li></Link>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h4 className='font-bold'>Contact Us</h4>
                    <div className='flex mt-4'>
                        <i className="ri-map-pin-2-line text-pink pe-2 text-2xl"></i>
                        <div>
                            <p>7031 N 35th Ave, Phoenix</p>
                        <span className=''>Arkansas United States</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex mt-5'>
                           <i className="ri-phone-line text-pink pe-2 text-2xl"></i>
                           <div>
                                <p>Call us 8 AM - 10 PM </p>
                                <span className=''>6668 5555 8464</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default Footer
