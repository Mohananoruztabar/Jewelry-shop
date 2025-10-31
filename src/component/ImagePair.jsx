import React from 'react'
import Container from './Container'
import Link from 'next/link'

function ImagePair() {
  return (
    <div>
        <Container>
            <div className='flex '>
                <figure className='ml-30 overflow-hidden'>
                    <img className='hover:scale-105 object-cover hover:duration-500 overflow-hidden' src="/for-her.webp" alt="" />
                </figure>
                <div className='mt-30 ml-20'>
                    <h4 className='text-gray-500'>ELEGANCE</h4>
                    <h2 className='text-4xl font-bold mt-3'>FORE HER</h2>
                    <p className='text-gray-400 mt-4 w-[65%]'>Discover the epitome of sophistication white our luxury jewelry collection</p>
                    <Link href="/store"><button className='border px-8 py-2 mt-4 hover:bg-black hover:text-white transition-all duration-300 group ease-in-out'>Discover more <i className='ri-arrow-right-long-line ease-in-out opacity-0 group-hover:opacity-100 transition-opacity group-hover:transition-all group-hover:duration-500'></i></button></Link>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-30 pl-20'>
                    <h4 className='text-gray-500'>ELEGANCE</h4>
                    <h2 className='text-4xl font-bold mt-3'>FOR HIM</h2>
                    <p className='text-gray-400 mt-4 w-[65%] '>Experience the pinnacle of luxury with our exclusive jewelry for him.</p>
                    <Link href="/store"><button className='border px-8 py-2 mt-4 hover:bg-black hover:text-white transition-all duration-300 group ease-in-out'>Discover more <i className='ri-arrow-right-long-line ease-in-out opacity-0 group-hover:opacity-100 transition-opacity group-hover:transition-all group-hover:duration-500'></i></button></Link>
                </div>
                <figure className='overflow-hidden '>
                    <img className='hover:scale-105 object-cover hover:duration-500 overflow-hidden' src="/for-him.webp" alt="" />
                </figure>
            </div>
            
        </Container>
    </div>
  )
}

export default ImagePair