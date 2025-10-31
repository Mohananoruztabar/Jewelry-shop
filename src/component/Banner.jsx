import React from 'react'
import Container from './Container'

function Banner() {
  return (
    <div className='mt-15'>
        <Container>
            <div className='bg-primary h-[250px] grid grid-cols-2'>
                <figure className='h-[250px] w-[380px]'>
                    <img className='h-[250px] w-[380px] object-cover object-top' src="/subscribe_banner_image.webp" alt="" />
                </figure>
                <div className='m-10'>
                    <h4 className='font-bold mt-2 text-2xl'>15% DISCOUNT</h4>
                    <p className='mt-5 text-gray-600'>For subscription to our newsletter</p>
                    <div className='mt-5'>
                        <input className='border border-trans bg-white py-3 w-[300px] px-2' placeholder='Email address' type="text" />
                        <button className='bg-pink py-3 text-white px-4'><i className="ri-arrow-right-long-line"></i></button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner